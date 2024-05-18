const planOptions=document.querySelectorAll('.plan-selection > div');
const packDuration=document.querySelector('.wrapper');
const child=packDuration.querySelector('.child');

function renderChosenPlan() {
    const planInfos=document.querySelectorAll('.plan-info');
    planInfos.forEach((planInfo,index) => {
        if(planInfo.querySelector('p:nth-child(1)').innerText===planChosen)
        {
            choosePlan(planOptions[index]);
        }
    });
}

renderChosenPlan();

function renderDuration() {
    duration=!duration;
    choosePlanDuration();
}

renderDuration();

function choosePlan(plan)  {
    const planType=plan.querySelector('.plan-info > p:nth-child(1)').innerText;
    planOptions.forEach((ele)=> {
        if(ele.classList.contains('onClickFocus'))
        {
            ele.classList.remove('onClickFocus');
            ele.style.borderColor='var(--light-gray)';
        }
    });

    plan.classList.add('onClickFocus');
    plan.style.borderColor='var(--purplish-blue)';

    planChosen=planType;

    localStorage.setItem('plan-chosen',planChosen);
}

function choosePlanDuration() {
    if(duration)
    {
        child.style.transform='translateX(0rem)';
        duration=0;

        planOptions.forEach((plan,index) => {
            const planPrice=plan.querySelector('.plan-info > p:nth-child(2)');
            const planType=plan.querySelector('.plan-info  > p:first-child').innerText;
            planPrice.innerHTML=`${planInfo[planType]['Monthly']}`;

            plan.querySelector('.plan-info').removeChild(plan.querySelector('.plan-info').lastChild);
        });
    }
    else 
    {
        child.style.transform='translateX(1.5rem)';
        duration=1;

        /* Lets create the bottom paragraph for each of the plan type */
        
        planOptions.forEach((plan,index) => {
            const paragraph=document.createElement('p');
            paragraph.innerHTML='2 months free';

            const planPrice=plan.querySelector('.plan-info > p:nth-child(2)');
            const planType=plan.querySelector('.plan-info  > p:first-child').innerText;
            planPrice.innerHTML=`${planInfo[planType]['Yearly']}`;

            plan.querySelector('.plan-info').appendChild(paragraph);
        });
    }
    localStorage.setItem('duration',duration);
}

planOptions.forEach((plan,index) => {
    plan.addEventListener('click',() => {choosePlan(plan)});
    plan.addEventListener('keydown',(e) => {
        if(e.key==='Enter')
        {
            choosePlan(plan);
        }
    });
});


packDuration.addEventListener('click',choosePlanDuration);
packDuration.addEventListener('keydown',(e) => {
    if(e.key==='Enter')
    {
        choosePlanDuration();
    }
});
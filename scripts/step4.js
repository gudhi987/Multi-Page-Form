const additionalCharges=document.querySelector('.additional-charges');
const confirmButton=document.querySelector('.confirm');

function renderChosenPlanDetails() {
    const planType=document.querySelector('.info-wrapper > p');
    const planPrice=document.querySelector('.plan-price-summary > p');

    if(duration) 
    {
        planType.innerHTML=`${planChosen} (Yearly)`;
        planPrice.innerHTML=`${planInfo[planChosen]['Yearly']}`;
    }
    else 
    {
        planType.innerHTML=`${planChosen} (Monthly)`;
        planPrice.innerHTML=`${planInfo[planChosen]['Monthly']}`;
    }
}

renderChosenPlanDetails();

function addingAdditionalOptions() {
    additionalCharges.innerHTML='';
    choosenAddOns.forEach((ele,index) => {
        if(ele==1)
        {
            const divEle=document.createElement('div');
            const paragraph1=document.createElement('p');
            const paragraph2=document.createElement('p');

            paragraph1.innerHTML=`${addOnOptionsInfo[index].name}`;
            if(duration===0)
            {
                paragraph2.innerHTML=`+${addOnOptionsInfo[index].price['Monthly']}`;
            }
            else 
            {
                paragraph2.innerHTML=`+${addOnOptionsInfo[index].price['Yearly']}`;
            }

            divEle.appendChild(paragraph1);
            divEle.appendChild(paragraph2);

            additionalCharges.appendChild(divEle);
        }
    });
}

addingAdditionalOptions();

function extractPrice(str) {
    return Number(str.slice(1,str.indexOf('/')));
}

function totalAmount() {
    let planPrice=extractPrice(planInfo[planChosen]['Monthly']);
    let addOnsCost=0;
    
    choosenAddOns.forEach((addOn,index) => {
        if(addOn===1)
        {
            addOnsCost+=extractPrice(addOnOptionsInfo[index].price['Monthly']);    
        }
    });

    const priceTitle=document.querySelector('.total-price > p:first-child');
    const totalPrice=document.querySelector('.total-price p:last-child');

    if(duration)
    {
        priceTitle.innerHTML=`Total (per year)`;
        totalPrice.innerHTML=`$${(planPrice+addOnsCost)*10}/yr`
    }
    else 
    {
        priceTitle.innerHTML=`Total (per month)`;
        totalPrice.innerHTML=`$${(planPrice+addOnsCost)}/mo`
    }
}

totalAmount();

confirmButton.addEventListener('click',() => {
    document.querySelector('.info').innerHTML =
    `
        <div class="thank-you">
            <div class="svg-wrapper">
            <img src="./assets/images/icon-thank-you.svg" alt="icon-thank-you">
            </div>
            <h1>Thank you!</h1>
            <p>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
            </p>
        </div>
    `;

    localStorage.removeItem('user-info');
    localStorage.removeItem('plan-chosen');
    localStorage.removeItem('duration');
    localStorage.removeItem('choosen-addons');
})
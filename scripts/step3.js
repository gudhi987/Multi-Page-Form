const addOnOptions=document.querySelectorAll('.add-on-options > div');
const addOnPrices=document.querySelectorAll('.add-on-options > div > p');
const inputs=Array.from(document.querySelectorAll('input'));

function renderingPricesOfAddOns() {
    if(duration)
    {
        addOnPrices.forEach((addOnPrice,index) => {
            addOnPrice.innerHTML=`+${addOnOptionsInfo[index].price['Yearly']}`;
        });
    }
    else 
    {
        addOnPrices.forEach((addOnPrice,index) => {
            addOnPrice.innerHTML=`+${addOnOptionsInfo[index].price['Monthly']}`;
        });
    }
}

renderingPricesOfAddOns();

function renderChoosenAddOns() {
    choosenAddOns.forEach((ele,index) => {
        if(ele===1)
        {
            addOnOptionsHandler(addOnOptions[index],index);
        }
    });
}

renderChoosenAddOns();

function addOnOptionsHandler(addOn,index) {
    if(addOn.classList.contains('onClickStyle'))
    {
        addOn.classList.remove('onClickStyle');
        addOn.style.borderColor='var(--light-gray)';
        addOn.style.outline='none';
        inputs[index].checked=false;
        choosenAddOns[index]=0;
    }
    else
    {
        addOn.classList.add('onClickStyle');
        addOn.style.borderColor='var(--purplish-blue)';
        inputs[index].checked=true;
        choosenAddOns[index]=1;
    }
    localStorage.setItem('choosen-addons',JSON.stringify(choosenAddOns));
}

addOnOptions.forEach((addOn,index) => {
    addOn.addEventListener('click',() => {addOnOptionsHandler(addOn,index)});
    addOn.addEventListener('keydown',(e) => {
        if(e.key==='Enter')
        {
            addOnOptionsHandler(addOn,index);
        }
    })
});
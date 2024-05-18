const nameField=document.querySelector('#name');
const emailField=document.querySelector('#email-address');
const phoneNoField=document.querySelector('#phone-no');
const nextButton=document.querySelector('.next');

// Rendering the values of the input field

function renderInputFieldValues() {
    nameField.value=userInfo.name;
    emailField.value=userInfo.email;
    phoneNoField.value=userInfo.phoneNo;
}

renderInputFieldValues();

// Handling the invalid state 

function invalidNameField() {
    const errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(1) .error-message');
    if(nameField.validity.valid)
    {
        errorMsgEle.innerHTML='';
    }
    else 
    {
        errorMsgEle.innerHTML='Enter a valid name';
    }
}

function invalidEmailField() {
    const errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(2) .error-message');
    if(emailField.validity.valid)
    {
        errorMsgEle.innerHTML='';
    }
    else 
    {
        errorMsgEle.innerHTML='Enter a valid email';
    }
}

function invalidPhoneNoField() {
    const errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(3) .error-message');
    if(phoneNoField.validity.valid)
    {
        errorMsgEle.innerHTML='';
    }
    else 
    {
        errorMsgEle.innerHTML='Enter a valid phone number';
    }
}
nameField.addEventListener('keydown',invalidNameField);
nameField.addEventListener('keyup',invalidNameField);

emailField.addEventListener('keydown',invalidEmailField);
emailField.addEventListener('keyup',invalidEmailField);

phoneNoField.addEventListener('keydown',invalidPhoneNoField);
phoneNoField.addEventListener('keyup',invalidPhoneNoField);

// Handling the next button 


nextButton.addEventListener('click',() => {
    let errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(1) .error-message');
    if(!nameField.value)
    {
        errorMsgEle.innerHTML='This field is required';

        nameField.classList.add('add-required-animation');

        setTimeout(() => {
            nameField.classList.remove('add-required-animation')
        },500);
    }
    else 
    {
        errorMsgEle.innerHTML='';
    }

    errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(2) .error-message');
    if(!emailField.value)
    {
        errorMsgEle.innerHTML='This field is required';

        emailField.classList.add('add-required-animation');

        setTimeout(() => {
            emailField.classList.remove('add-required-animation')
        },500);
    }
    else 
    {
        errorMsgEle.innerHTML='';
    }

    errorMsgEle=document.querySelector('.input-wrapper:nth-of-type(3) .error-message');
    if(!phoneNoField.value)
    {
        errorMsgEle.innerHTML='This field is required';

        phoneNoField.classList.add('add-required-animation');

        setTimeout(() => {
            phoneNoField.classList.remove('add-required-animation')
        },500);
    }
    else 
    {
        errorMsgEle.innerHTML='';
    }

    if(nameField.value && emailField.validity.valid && emailField.value && phoneNoField.value)
    {
        userInfo.name=nameField.value;
        userInfo.email=emailField.value;
        userInfo.phoneNo=phoneNoField.value;
        localStorage.setItem('user-info',JSON.stringify(userInfo));
        window.location.href='/step_2.html';
    }
});
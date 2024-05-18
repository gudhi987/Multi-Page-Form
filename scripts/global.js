const planInfo = {
    'Arcade' : {
        'Monthly' : '$9/mo',
        'Yearly'  : '$90/yr'
    },
    'Advanced' : {
        'Monthly' : '$12/mo',
        'Yearly'  : '$120/yr'
    },
    'Pro' : {
        'Monthly' : '$15/mo',
        'Yearly'  : '$150/yr'
    } 
};

const addOnOptionsInfo = {
    0 : {
            name: 'Online Service',
            price: {
                'Monthly' : '$1/mo',
                'Yearly'  : '$10/yr'
            }
        },
    1 : {
            name : 'Larger Storage',
            price : {
                'Monthly' : '$2/mo',
                'Yearly'  : '$20/yr'
            }
        },   
    2 : {
            name : 'Customizable Profile',
            price : {
                'Monthly' : '$2/mo',
                'Yearly'  : '$20/yr'
            }
    },
};

let userInfo=JSON.parse(localStorage.getItem('user-info')) || {name: '',email: '',phoneNo: ''};

let planChosen = localStorage.getItem('plan-chosen') || 'Arcade';
let duration=Boolean(parseInt(localStorage.getItem('duration'))) || 0;

const choosenAddOns=JSON.parse(localStorage.getItem('choosen-addons')) || [0,0,0];
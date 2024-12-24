'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.score').textContent);
// console.log(document.querySelector('.number').textContent);
// console.log(document.querySelector('.highscore').textContent);
// document.querySelector('.message').textContent = 'Correct Number !!';
// document.querySelector('.number').textContent = 20;
// document.querySelector('.guess').value=65;
// console.log(document.querySelector('.guess').value);

// const onclicked = document.querySelector('.check');
// console.log(document.querySelector('.check'));

// console.log(document.querySelector('.check').onClick = clicked => {
    
// });

// const generateRandomNumber = Math.trunc(Math.random()*6 + 1);

// document.querySelector('.check').addEventListener('click', function(){
//     let checkGuessedValue = Number(document.querySelector('.guess').value);
//     if(checkGuessedValue === generateRandomNumber){
//         document.querySelector('.message').textContent = 'Congratulations !!';
//     }
// });

// Get references to the DOM elements


const billPayment = {
    'billAmount' : null,
    'tipPercentage' : null,
    'calculateTip' : function (){
                        billPayment.totalTips = billPayment.billAmount * (billPayment.tipPercentage/100);
                        return (billPayment.totalTips);
                    },
    'calculateBill' :function (){
                        return (billPayment.billAmount + billPayment.billAmount*(billPayment.tipPercentage/100));
                    } 
}


document.querySelector('#calculate-btn').addEventListener('click', function(){
    const billAmount = Number(document.querySelector('#bill-amount').value);
    const tipPercentage = Number(document.querySelector('#tip-percentage').value);
    console.log(billAmount,tipPercentage);
    if(billAmount<=0){
        document.querySelector('#bill-amount').placeholder = 'Bill is required !';
        document.querySelector('#bill-amount').focus();
    }else if(tipPercentage<=0 && billAmount!=0 ){
        document.querySelector('#tip-percentage').placeholder = 'Tip percentage is required !';
        document.querySelector('#tip-percentage').focus();
    }else{
        billPayment.billAmount = billAmount;
        billPayment.tipPercentage = tipPercentage;
        document.querySelector('#tip-amount').textContent = billPayment.calculateTip();
        document.querySelector('#total-amount').textContent = billPayment.calculateBill();
    }
})
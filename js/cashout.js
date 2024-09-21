document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
       

        const cashOut = gitInputFieldValueById('input-cash-out-money');
        const pinNumber = gitInputFieldValueById('input-cash-out-pin');
        

       if(pinNumber === 1234){

        const balance = gitTextFieldValueById('account-balance');
        const newBalance = balance - cashOut;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;


       }
       else{
        alert('Failed to cash out . please try again later')
       }
})
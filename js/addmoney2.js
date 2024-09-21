document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = gitInputFieldValueById('input-add-money');
        const pinNumber = gitInputFieldValueById('input-pin-number');
        

        if(pinNumber === 1234){

            const balance = gitTextFieldValueById('account-balance');
            console.log(balance,addMoney);
            const newBalance = balance + addMoney;
            console.log(newBalance);
            document.getElementById('account-balance').innerText = newBalance;
          
         
        }
        else{
            alert('Failed to add money! please try again later')
        }

})
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoney = gitInputFieldValueById('input-add-money');
        const pinNumber = gitInputFieldValueById('input-pin-number');
        
        if(isNaN(addMoney)){
            alert('Failed to add money')
            return;
        }


        if(pinNumber === 1234){

          const balance = gitTextFieldValueById('account-balance');
          // console.log(balance,addMoney);
          const newBalance = balance + addMoney;
          // console.log(newBalance);
          document.getElementById('account-balance').innerText = newBalance;

          // add to transaction history   
          const p = document.createElement('p');
          p.innerText = `Added: ${addMoney} Tk. New Balance: ${ newBalance}`;
          console.log(p);

          // should be a common function
          document.getElementById('transaction-container').appendChild(p);
         
        }
        else{
            alert('Failed to add money! please try again later')
        }

})
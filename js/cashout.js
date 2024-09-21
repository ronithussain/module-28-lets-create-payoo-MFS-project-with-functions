document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
       

        const cashOut = gitInputFieldValueById('input-cash-out-money');
        const pinNumber = gitInputFieldValueById('input-cash-out-pin');
        

        if(isNaN(cashOut)){
            alert('Failed to cash out')
            return;
        }

       if(pinNumber === 1234){
        const balance = gitTextFieldValueById('account-balance');

        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }

        const newBalance = balance - cashOut;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.classList.add('p-3');
        div.classList.add('rounded-xl');
        div.classList.add('mt-3');
        div.innerHTML= `
        <h4 class="text-2xl font-bold"></h4>
        <p> ${cashOut} withdraw. New Balance ${newBalance} </p>
        `
        document.getElementById('transaction-container').appendChild(div);

       }
       else{
        alert('Failed to cash out . please try again later')
       }
})
document.getElementById('btn-add-money')
    .addEventListener('click', 
        function(event){
            event.preventDefault();
            console.log('add button clicked');
           
 const addMoney = getInputFieldValueById('input-add-money'); 
 const pinNumber = getInputFieldValueById('input-pin-number');
 console.log('add money inside addMoney.js', addMoney,pinNumber);

 // 
 if(pinNumber === 1234){

 }
 else{
     alert('Failed to add the money.')
 }



})
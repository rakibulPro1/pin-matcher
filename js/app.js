
function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == 'C'){
            document.getElementById('calc-input').value = '';
        }

    }
    else{
        const calcInput = document.getElementById('calc-input');
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
  
});

function verifyPin(){
    const generatedPin = document.getElementById('display-pin').value;
    const confirmPin = document.getElementById('calc-input').value;
    
    const successMessege = document.getElementById('success-notify');
    const failMessege = document.getElementById('fail-notify');

    if(generatedPin == confirmPin){
        successMessege.style.display = 'block';
        failMessege.style.display = 'none';
    }
    else{
        failMessege.style.display = 'block';
        successMessege.style.display = 'none';

    }

}
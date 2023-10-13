function getPin() {
    const pin = generateRandomNumber();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    } else {
        getPin()
    }
}


function generateRandomNumber() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('ganerat-pin-btn').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-feild');
    const previousTypeNumber = typeNumberField.value;

    if (isNaN(number)) {
        if (number === '<') {
            const caracter = previousTypeNumber.split('');
            caracter.pop();
            // console.log(caracter);
            const remainigCaracter = caracter.join('');
            // console.log("join-", remainigCaracter);
            typeNumberField.value = remainigCaracter;

        } else if (number === 'C') {

            typeNumberField.value = '';
        }
    } else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }

})
document.getElementById('verify-pin').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const displayPinValue = displayPin.value;

    const typeNumberField = document.getElementById('type-feild');
    const previousTypeNumber = typeNumberField.value;

    
    const pinSucess=document.getElementById('pin-sucess');
    const pinUnSucess=document.getElementById('pin-unsucess');
    if(displayPinValue === previousTypeNumber){
        pinSucess.style.display="block"
        pinUnSucess.style.display="none"
    }else{
        pinUnSucess.style.display="block"
        pinSucess.style.display="none"
    }
})
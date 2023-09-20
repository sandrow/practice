const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results span');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

//need to loop through the numbers. This will be looping through every element that has the class of "numbers"
for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        //this is setting the selected number
        let atr = e.target.getAttribute('data-button');
        if(isFirstValue === false) {

            getFirstValue(atr)
        }
    })
}

function getFirstValue(valueAtr) {
    result.innerHTML = '';
    firstValue += valueAtr;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}


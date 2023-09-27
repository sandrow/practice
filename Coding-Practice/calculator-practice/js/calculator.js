const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

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
        if(isSecondValue === false) {
            getSecondValue(atr)
        }
    })
}
//This function can be reworked
function getFirstValue(valueAtr) {
    result.innerHTML = '';
    firstValue += valueAtr;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(valueAtr2){
    // need to set the conditions in order to show the second value
    // need to make sure that the "first value" and "sign" isn't empty
    if (firstValue != '' && sign != ''){
        secondValue += valueAtr2;
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
    

}

// here is when we get the "sign"
// why a for loop?


function getSign() {
    for(let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', (e) => {
        //this is setting the selected number
        sign = e.target.getAttribute('value');
        isFirstValue = true;
        
        })
    }
}

getSign();

//this is doig the actual calculations for each sign thats selected
equals.addEventListener('click', () => {
    result.innerHTML = '';
    if(sign === "+") {
        resultValue = firstValue + secondValue;
    } else if (sign === "-") {
        resultValue = firstValue - secondValue;
    } else if (sign === "x") {
        resultValue = firstValue * secondValue;
    } else if (sign === "/") {
        resultValue = firstValue / secondValue;
    } 
        result.innerHTML = resultValue;
        //this is allowing us to add on to the calculation but setting the results to the first value and resetting the second value to be empty.
        firstValue = resultValue;
        secondValue = '';

        checkResultLength();
});

function checkResultLength(){
    //this is turning the result into an string
    resultValue = JSON.stringify(resultValue);
    if(resultValue.length >= 8) {
        //this is turning the result into an object
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }

}

// this is setting up the negative sign 
negative.addEventListener('click', () => {
    result.innerHTML = '';
    if(firstValue != '') {
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(firstValue != '' && secondValue != '' && sign != ''){
        resultValue = -resultValue;
    }

    result.innerHTML = resultValue;
})

// this is setting up the percent sign 
percent.addEventListener('click', () => {
    result.innerHTML = '';
    if(firstValue != '') {
        resultValue = firstValue / 100;
        firstValue = resultValue;
    }
    if(firstValue != '' && secondValue != '' && sign != ''){
        resultValue = resultValue / 100;
    }

    result.innerHTML = resultValue;
})

// this is setting up the clear sign 
clear.addEventListener('click', () => {
    result.innerHTML = 0;
    
    firstValue = "";
    isFirstValue = false;
    secondValue = "";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})
//=============================================================================================================
// the code below is to allow me to use the keyboard to type the buttons in addition to clicking them
// This will need to be configured to work with the calculator
// ill need to find the key code associated with the number and math sign for this to work
//theres 2 sets of key codes one for the numbers along the top of the keyboard and the other is for the side keypad
//ill need to figure out how this will work for both!
//=============================================================================================================

function highlightKey(e) {
    
    const key = document.querySelector(`.items[data-key="${e.keyCode}"],[data-keyAlt="${e.keyCode}"]`);
    key.classList.add("highlight"); // this is adding the class of "highlight" to any key that has the data-key attribute
    
}
  //you want to listen to every single key on the page to know when it ends
  const keys = document.querySelectorAll(".items");

//   function removeTransition(e){
//     console.log(e);
//   }

//   keys.forEach(items => items.addEventListener('transitionend', removeTransition));

  function removeTransition(e) {
    if (e.propertyName !== "transform") return; // skip it if its not a transform
    console.log(this);
    //this is always equal to whatever got called against it, in this case "this" is equal to "key"

    // FIGURE OUT AND UNDERSTAND WHY keys.classList.remove("highlight"); DIDN'T WORK, BUT this.classList.remove("highlight"); didnt!
    this.classList.remove("highlight");
  }

  //this is listening for the transition end on each one
  //when you have an array of elements you cant listen on all of them, you need to loop over each one and add an event listener
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", highlightKey);


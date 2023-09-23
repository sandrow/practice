const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.results');

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
//This function can be reworked
function getFirstValue(valueAtr) {
    result.innerHTML = '';
    firstValue += valueAtr;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

//=============================================================================================================
// the code below is to allow me to use the keyboard to type the buttons in addition to clicking them
// This will need to be configured to work with the calculator
// ill need to find the key code associated with the number and math sign for this to work
//theres 2 sets of key codes one for the numbers along the top of the keyboard and the other is for the side keypad
//ill need to figure out how this will work for both!
//=============================================================================================================

function playSound(e) {
    
    const key = document.querySelector(`.items[data-key="${e.keyCode}"],[data-keyAlt="${e.keyCode}"]`);
    
    // if (!audio) return; // this will stop the function from running so i wont get an uncaught TypeError
    // audio.currentTime = 0; // this will rewind the audio back to zero
    // audio.play();
    key.classList.add("highlight"); // this is adding the class of "playing" to any key that has the data-key attribute
    
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

    // FIGURE OUT AND UNDERSTAND WHY keys.classList.remove("playing"); DIDN'T WORK, BUT this.classList.remove("playing"); DID????

     
    this.classList.remove("highlight");
  }

  //this is listening for the transition end on each one
  //when you have an array of elements you cant listen on all of them, you need to loop over each one and add an event listener
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playSound);


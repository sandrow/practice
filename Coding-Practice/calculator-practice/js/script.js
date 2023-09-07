//Code for calculator
    // let calculation = localStorage.getItem('calculation') || '';
    // displayCalculation();

    // function updateCalculation(value) {
    //     calculation += value;

    //     displayCalculation();

    //     localStorage.setItem('calculation', calculation);
    // }
    // function displayCalculation(){
    //     document.querySelector('.js-calculation')
    //     .innerHTML = calculation;
    // }

    let calculation = localStorage.getItem('calculation') || '';

// Display the calculation when the page first loads.
displayCalculation();

function updateCalculation(value) {
  calculation += value;

  // Display the calculation on the page
  // instead of console.log
  displayCalculation();

  localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
  document.querySelector('.js-calculation')
    .innerHTML = calculation;
}




//Code for styling the calculator
const updateCursor = ({ x, y }) => {
  document.documentElement.style.setProperty('--x', x)
  document.documentElement.style.setProperty('--y', y)
}

document.body.addEventListener('pointermove', updateCursor)
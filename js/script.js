console.log('JS OK')

// *PHASE 1

//? *********************** Functions ***********************

// Create Function for cells
function createCell(numero) {
    let element = '';
    for (let i = 1; i <= numero; i++) {
        element += `<div class="cell-${numero}">${i}</div>`;
    }
    return element;
}

//? *********************************************************

// Link DOM elements
const grid = document.querySelector('.grid');
const selectElement = document.getElementById('difficulty');
const button = document.querySelector('button');

// Button click - Create Variables 
button.addEventListener('click', function () {
    const difficulty = parseInt(selectElement.value);
    console.log(difficulty);
}

)




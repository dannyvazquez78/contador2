// const parrafo = document.querySelector("p");
// const boton = document.querySelector("button");
// const botonResta = document.querySelector("button");

// let contador = 0;

// boton.addEventListener("click", () => {
// console.log("click");
// contador++;
// parrafo.textContent = contador
// })

const buttons = document.querySelectorAll('.btn');
const counterElement = document.querySelector('#counter');
buttons[1].disabled = true;        

console.log(counterElement)

let counter = 0;
buttons.forEach( (button, index) => {
    button.addEventListener('click', (event) => {
        const operationType = event.target.dataset.operation;
        operationType === 'suma' ? ++counter : --counter
        counterElement.textContent = counter;
        buttons[1].disabled = counter <= 0 ? true : false;
    });
});

// const input = document.querySelector('#myInput');
// const h1 = document.querySelector('h1');

// input.addEventListener('keyup', (event) => {
//     h1.textContent = event.target.value
// })
// console.log(input)
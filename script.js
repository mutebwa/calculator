let result = 0;
let operand = 0;
let operation = add;
let display = "";

const add = (a, b) => {
    result = a + b
}
const multiply = (a, b) => {
    result = a * b
}
const substract = (a, b) => {
    result = a - b
}
const divide = (a, b) => {
    if (b == 0) {
        result = 69420
    }
    result = a / b
}
const percent = (a) => {
    result = a / 100
}

const compute = (operation, operand) => {
    result = operation(result, operand);
}

//These functions on change the operation

const changeToAddition = () => {
    operation = add;
}

const changeToMultiplication = () => {
    operation = multiply;
}

const changeToSubstraction = () => {
    operation = substract;
}

const changeToDivision = () => {
    operation = divide;
}

//Zeroing

const reset = () => {
    result = operand = 0;
    operation = add;
}

const deletion= () => {
    operand = 0;
}

const screen = document.querySelector(".screen")
const updateScreen = (input) => {
    display = display + input;
    screen.textContent = display;
}
// numeric buttons
const oneButton = document.querySelector(".one")
const twoButton = document.querySelector(".two")
const threeButton = document.querySelector(".three")
const fourButton = document.querySelector(".four")
const fiveButton = document.querySelector(".five")
const sixButton = document.querySelector(".six")
const sevenButton = document.querySelector(".seven")
const eightButton = document.querySelector(".eight")
const nineButton = document.querySelector(".nine")
const zeroButton = document.querySelector(".zero")

oneButton.addEventListener("click", () => {
    compute();
    operand = (operand * 10) + 1;
    updateScreen("1");
});

//operating buttons
const addButton = document.querySelector(".addButton")
const substractButton = document.querySelector(".substractButton")
const multiplyButton = document.querySelector(".multiplyButton")
const divideButton = document.querySelector(".divideButton")
const percentButton = document.querySelector(".percentButton")
const computeButton = document.querySelector(".computeButton")

addButton.addEventListener("click", () => {
    changeToAddition();
    updateScreen("+");
});

substractButton.addEventListener("click", () => {
    changeToSubstraction();
    updateScreen("-");
  });

multiplyButton.addEventListener("click", () => {
  changeToMultiplication();
  updateScreen("×");
});

divideButton.addEventListener("click", () => {
    changeToDivision();
    updateScreen("/");
});

percentButton.addEventListener("click", () => {
    percent(result);
    display = "";
    updateScreen(`${result}`);
});

computeButton.addEventListener("click", () => {
    display = "";
    updateScreen(`${result}`);
});
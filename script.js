class  Calculator{
constructor(previousOperandTextElement, currentOperandTextElement){
this.previousOperandTextElement = previousOperandTextElement;
this.currentOperandTextElement = currentOperandTextElement;
this.clear();
}

clear(){
    this.currentOperand  = '';
    this.previousOperand = '';
    this.operation = undefined;
}

delete(){


}
appendNumber(){

chooseOperation(operation)

}

Computed(){

}

updateDisplay(){

}

}





const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector("[data-previous-operand]");
const currentOperandTextElement = document.querySelector("[data-current-operand]");


const Calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText);
        Calculator.updateDisplay();
    });
});

const mathematicalOperations = (a, b, operation) => {

    if (isNaN(a) || isNaN(b)) {
        return 'Invalid input! Please enter valid numbers';
    }

    const validOperations = ['+', '-', '*', '/'];
    if (!validOperations.includes(operation)) {
        return 'Please enter a valid operation (+, -, *, /)';
    }

    if (operation === '/' && b === 0) {
        return 'Cannot divide by zero';
    }

    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return 'Invalid operation';
    }
}

const firstNumber = parseFloat(prompt('Enter the first number:'));
const operation = prompt('Enter the operation (+, -, *, /):');
const secondNumber = parseFloat(prompt('Enter the second number:'));

const result = mathematicalOperations(firstNumber, secondNumber, operation);
console.log(`${firstNumber} ${operation} ${secondNumber} = ${result}`);

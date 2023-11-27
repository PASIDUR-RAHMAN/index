// Define a function that takes two numbers and an operator, and returns the result.
function calculate(num1: number, num2: number, operator: string): number {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                throw new Error("Cannot divide by zero");
            }
        default:
            throw new Error("Invalid operator");
    }
}

// Example usage:
const num1 = 10;
const num2 = 5;
const operator = '*';

try {
    const result = calculate(num1, num2, operator);
    console.log(`${num1} ${operator} ${num2} = ${result}`);
} catch (error) {
    console.error(error.message);
}

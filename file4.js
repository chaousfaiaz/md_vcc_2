// script.js
// A simple JavaScript program to greet the user and add two numbers

// Function to safely parse numbers
function parseNumber(value) {
    const num = Number(value);
    if (isNaN(num)) {
        throw new Error(`Invalid number: "${value}"`);
    }
    return num;
}

try {
    // Prompt user for their name (works in browser)
    let name = prompt("Enter your name:");
    if (!name || name.trim() === "") {
        name = "Guest";
    }

    // Prompt for two numbers
    const num1 = parseNumber(prompt("Enter first number:"));
    const num2 = parseNumber(prompt("Enter second number:"));

    // Calculate sum
    const sum = num1 + num2;

    // Display result
    alert(`Hello, ${name}! The sum of ${num1} and ${num2} is ${sum}.`);
    console.log(`Hello, ${name}! The sum of ${num1} and ${num2} is ${sum}.`);

} catch (error) {
    alert(error.message);
    console.error(error.message);
}



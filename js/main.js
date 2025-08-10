// DOM elements
const button = document.getElementById('myButton');
const output = document.getElementById('output');

// Event listener
button.addEventListener('click', () => {
    output.textContent = 'Button clicked!';
    
    // Create a new element dynamically
    const newElement = document.createElement('p');
    newElement.textContent = 'New element created at: ' + new Date().toLocaleTimeString();
    document.body.appendChild(newElement);
});

// Basic function example
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Developer');

// Simple class example
class Counter {
    constructor() {
        this.count = 0;
    }
    
    increment() {
        this.count++;
        console.log(this.count);
    }
}

const myCounter = new Counter();
myCounter.increment();
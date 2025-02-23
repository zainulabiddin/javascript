// A higher-order function that takes a function as an argument
function higherOrderFunction(callback) {
    console.log("Higher-order function executing...");
    // Execute the callback function
    callback();
}

// Define a simple function to be used as a callback
function simpleFunction() {
    console.log("Simple function executed.");
}

// Call the higher-order function and pass the simple function as an argument
higherOrderFunction(simpleFunction);
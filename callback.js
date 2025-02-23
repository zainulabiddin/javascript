// A function that takes a callback function as an argument
function doSomething(callback) {
    console.log("Doing something...");
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        console.log("Operation completed.");
        // Execute the callback function
        callback();
    }, 2000);
}

// Define a callback function
function myCallback() {
    console.log("Callback function executed.");
}

// Call the function and pass the callback function as an argument
doSomething(myCallback);
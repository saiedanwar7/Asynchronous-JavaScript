/*

    ----------------------  Callbacks  --------------------

An event handler is a particular type of callback. 
A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. 
As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

However, callback-based code can get hard to understand when the callback itself has to call functions that accept a callback. 
This is a common situation if you need to perform some operation that breaks down into a series of asynchronous functions. 

For example, consider the following:

*/

function doStep1(init) {
    return init + 1;
}

function doStep2(init) {
    return init + 2;
}

function doStep3(init) {
    return init + 3;
}

function doOperation() {
    let result = 0;

    result = doStep1(result);   // provide 0 as a parameter value
    result = doStep2(result);
    result = doStep3(result);
    return result;
    // console.log(`result: ${result}`); 
}


let finalResult = doOperation();
console.log(`The Final Answer: ${finalResult}`);  // The Final Answer: 6



/*
    Here we have a single operation that's split into three steps, where each step depends on the last step. 
    In our example, the first step adds 1 to the input, the second adds 2, and the third adds 3. 
    Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3). As a synchronous program, this is very straightforward. 
    But what if we implemented the steps using callbacks?

*/

function doWork1(init, callback) {
    const result = init + 1;
    callback(result);
}

function doWork2(init, callback) {
    const result = init + 2;
    callback(result);
}


function doWork3(init, callback) {
    const result = init + 3;
    callback(result);
}

function doWorkOperation() {
    doWork1(0, (result1) => {
        doWork2(result1, (result2) => {
            doWork3(result2, (result3) => {
                console.log(`result: ${result3}`);   // result: 6
            });
        });
    });
}

doWorkOperation();

/*
    Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. 
    This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).
    When we nest callbacks like this, it can also get very hard to handle errors: often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level.
    For these reasons, most modern asynchronous APIs don't use callbacks. Instead, the foundation of asynchronous programming in JavaScript is the Promise, 

*/
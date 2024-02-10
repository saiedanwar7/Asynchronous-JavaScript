/*


    Promises are the foundation of asynchronous programming in modern JavaScript. 
    A promise is an object returned by an asynchronous function, which represents the current state of the operation. 
    At the time the promise is returned to the caller, the operation often isn't finished, 
    but the promise object provides methods to handle the eventual success or failure of the operation.



    -   Callback hell solve korar jonno Promise use kora hoy
    -   Promise er maddhome amra asynchronous kaj gular order control korte pari.
    -   Promise er jonno JavaScript er kaj gula atke thake na


    Promises

    A promise is an object with a syntactical coating introduced by ES6 which became another way of skipping writing callbacks to implement asynchronous operations. Web APIs like fetch() are implemented using the promising methodology. It makes the code more readable and is a solution to escape the callback hell.

    Promises generally have three states :

        Fulfilled: the desired action has been resolved or completed successfully.
        Pending : the desired action has neither been resolved nor been rejected and still in its initial state.    
        Rejected : the desired action has been rejected causing the desired operation to fail.


        - promises ekta anonynemous function ney, tar moddhe abar 2 ta function ney - resolve and reject

        The new Error() method is an inbuilt application programming interface of the Node module in which a new Error object is created and error.message property is set to the provided text message
        

        Syntax:
        -------

        let newPromise = new Promise(function(resolve, reject) {    
                // asynchronous call is made 
                // resolve or reject the data
        });


*/

// asynchronous function 

const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if(!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            Time: "10:00 PM",
        };
        resolve(meetingDetails);
    } else {
        reject(new Error ("Meeting already scheduled!"));
    }
});



// step by step kontar por konta hocche seta buja jacche

meeting
    .then((result) => {                    // successfull-resolve-then
        console.log(JSON.stringify(result));
    })
    .catch((err) => {
        console.log(err.message);
    });


// synchronous

console.log("Hello Promise")
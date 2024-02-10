/*
    ================================== How to use Promises ==========================

    Promise:

    The Promise object represents the eventual (completion or failure) of an asynchronous operation and its resulting value.

    Description
    
    A Promise is a proxy for a value not necessarily known when the promise is created. 
    It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 
    This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

    A Promise is in one of these states:

        pending: initial state, neither fulfilled nor rejected.
        fulfilled: meaning that the operation was completed successfully.
        rejected: meaning that the operation failed.

    - Promises are the foundation of asynchronous programming in modern JavaScript.
    - A Promise is an object returned by an asynchronous function, which represents the
      current state of the operation.
    - At the time the promise is returned to the caller, the operation often isn't finished, 
      but the promise object provides methods to handle the eventual success or failure of the operation.

*/





// ------------------------------ Show Promise Status -----------------------------

// const fetchPromise = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
// console.log(fetchPromise);



//--------------------- Show response property -----------------

// const fetchPromise1 = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// fetchPromise1
//         .then((response) => {
//             console.log(response);   // response er onnek gula property ache
//         })
     
        
/*
   ---------------------- output ------------------ 

    Response {
            type: 'cors', 
            url: 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json', 
            redirected: false, 
            status: 200, 
            ok: true, …}

*/


/*
 ============================ Using the fatch() API ================================

    To do this, we'll make an HTTP request to the server. In an HTTP request, 
    we send a request message to a remote server, and it sends us back a response. 
    In this case, we'll send a request to get a JSON file from the server. 
    we'll use the fetch() API, which is the modern, promise-based replacement for XMLHttpRequest.

*/


// const fetchPromise2 = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// console.log(fetchPromise2);

// fetchPromise2.then((respone) => {
//     // response object property gula dekhte parbo chaile
//     console.log(`Received response: ${respone.status}`);
//     console.log(`Received response ok: ${respone.ok}`);
//     console.log(`Received response ok: ${respone.redirected}`);
//     console.log(`Received response ok: ${respone.url}`);
   
// });

// console.log("Started request...");

/*
    output : Promise {<state>:"pending"},

    Promise object has a state - whose value is "pending", The "pending" state means that the fetch operation is still going on.

    passing a handler function into the Promise's then() method. When (and if) the fetch operation succeeds, the promise will call our handler, passing in a Response object, which contains the server's response.

    Response Object has property like - 
                ok: true - if respone data
                redirected
                status: 200  - if respones success
                Json()  - data formet
                url

    HTTP response status codes indicate whether a specific HTTP request has been successfully completed. 

    Responses are grouped in five classes:

        1. Informational responses (100 – 199)
        2. Successful responses (200 – 299)
        3. Redirection messages (300 – 399)
        4. Client error responses (400 – 499)
        5. Server error responses (500 – 599)

*/





/*
    ------------------------------- Chaining promises -----------------------------

    - With the fetch() API, once you get a Response object, you need to call another function to get the response data.
    - In this case, we want to get the response data as JSON, so we would call the json() method of the Response object.
    - It turns out that json() is also asynchronous. So this is a case where we have to call two successive asynchronous functions.
*/

const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

fetchPromise3.then((respone) => {
    console.log(`Receive Status: ${respone.status}`);   // status success

    const jsonPromise = respone.json();   // json() success then show data from API
    jsonPromise.then((data) => {
        console.log(data)       // show all data, as a Array, Object
        console.log(data[1]);   // return single object
        console.log(data[0].name);  // return object name property
    })
})


// fetchPromise.then((response) => {
//     const jsonPromise = response.json();
//     jsonPromise.then((data) =>{
//         console.log(data);   // find all data
//         for(let dat of data){
//             console.log(dat);
//         }
//         console.log(data[0]);
//     })
//     // console.log(`Received response: ${response.status}`);
// });

// console.log("Started request...");


// --------- apply promise --------

// const fetchPromise1 = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// fetchPromise1
//         .then((respse) => respse.json())
//         .then((data) => {
//             console.log(data[0].name);
//         });


// ------------ show error message if not work --------------

// const fetchPromise1 = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);

// fetchPromise1
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error: ${response.status}`);
//             }
//             return response.json();
//         })
//         // jodi json() data pai
//         .then((data) => {
//             console.log(data[0].name);
//         });



/*
        ----------------------------- Catching errors -------------------------------

*/

// const fetchPromise2 = fetch(
//     "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
//   );

//   fetchPromise2
//         .then((response) => {
//             if(!response.ok) {
//                 throw new Error(`HTTP error: ${response.status}`);
//             }
//             // if success
//             return response.json();
//         })   // semicolon hobe na
//         // success hole json theke data nibo
//         .then((data) => {
//             console.log(data[0].name);
//         })
//         //  catch error
//         .catch((error) => {
//             console.error(`Could not get products ${error}`)
//         });



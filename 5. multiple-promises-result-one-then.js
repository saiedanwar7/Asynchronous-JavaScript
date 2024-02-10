
//--------------------- Promise.all ---------------------


// const promise1 = Promise.resolve(`Promise 1 resolved`);  // single promise ei way te likhte pari

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Promise 2 resolved`)
//     }, 2000);
// });



// // result in multiple then

// // promise1.then((res) => console.log(res));
// // promise2.then((res) => console.log(res));


// // Use Promise.all for  all - return as an Array

// Promise.all([promise1, promise2]).then((res) => {
//     console.log(res);
// });




//--------- Promise.race - onnek gula promise er moddhe je first hobe tar ta print korbe -----------

// jodi onnek gula promise er moddhe je kono ekta result dorkar tahole Promise.race use korte pari

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 1 resolved`);
    }, 5000)
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`Promise 2 resolved`)
    }, 2000);
});


Promise.race([promise1, promise2]).then((res) => {
    console.log(res);
});
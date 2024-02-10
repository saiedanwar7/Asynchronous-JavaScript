
/*
   ---------------- About Asynchronous JavaScript ---------------------

  - JavaScript er best performance er jonno sob somoy amra Asynchronous way te code lekhar try korbo.
  - jokhonei kono expensive operation korte hobe tokhonei sei operation ta ke asynchronous way te run korabo,
    jeno blocking behaviour ta na thake
  - choto choto asynchronous kaj gular order control korte amra callback function use korte pari,
  - Asynchronous task sob somoy Promise return kore, and sei Promise er sathe (then) othoba (catch) match kore amra
    promise execution korte pari,
  - Finally sob cheye convenient way te asynchronous task korar jonno, amra async-await ei code block use korte pari


*/



/* 1. ---------------------- Problem 1 without Asynchronous --------------------- */
// problem hocche while ta use koror jonno, jotokhon 3 sec sesh na hobe totokhon dore code r execute hobe na,
// full browser block kore rakhbe.

// const processOrder = (customer) => {
//     console.log(`Processing order for customer 1`);

//     var currentTime = new Date().getTime();
//     while (currentTime + 3000 >= new Date().getTime());

//     console.log(`order processed for customer 1`);
// };

// console.log(`take order for customer 1`);     // code start from here
// processOrder();
// console.log(`completed order for customer 1`);


/* --------- output ------------

take order for customer 1
Processing order for customer 1
order processed for customer 1
completed order for customer 1

*/

/*
    -   Solve this problem use Asynchronous function setTimeout()

    setTimeout()  - Web API 
    - Eventloop er kaj hocche just simply callback-Queue and call-stack ke compare kora, jokhonei call-stack ke empty dekhbe 
      and callback queue te kisu dekhbe tokhonei tar kaj start korbe, and callback queue te thaka kaj ke call-stack e tule dibe.


*/

const processOrder1 = (customer) => {
    console.log(`Processing order for customer 1`);

    setTimeout(() =>{
        console.log(`cooking completed`);
    }, 3000);
    
    console.log(`order processed for customer 1`);
};

console.log(`take order for customer 1`);
processOrder1();
console.log(`competed order for customer 1`);
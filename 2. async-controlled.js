/*  ====================== Asynchronous Operation Control by Callback Function ==============


    -   Callback e problem hocche eitai ekta callback hell create hoy (nested block create hoye jai)

29
*/

/*
 - create  takeOrder, processOrder, completeOrder function

*/


   // synchronous function
const takeOrder = (customer, callback) => {     // 2 parameter
    console.log(`take order for ${customer}`);
    callback(customer)
};

    // synchronous function
const processOrder = (customer, callback) => {       // 2 parameter
    console.log(`processing order for ${customer}`);

    // asynchronous function
    setTimeout(() =>{
        console.log(`cooking completed`);
        console.log(`order processed for ${customer}`);
        callback(customer);   // all process sesh hobar por callback ke call korbe
    }, 3000);
};


     // synchronous function
const completedOrder = (customer) => {
    console.log(`completed order for ${customer}`);
};




// callback call 

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completedOrder(customer);
    })
})


// callback control kora chara, synchronous function er kaj sesh holei Hello print hobe,
// because asynchronous dekhle seta r wait korbe na, seta next step e chole jabe.
//

console.log('Hello')
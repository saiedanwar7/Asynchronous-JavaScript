// asynchronous function 

const hasMeeting = false;

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

// same thing we can do another way

// const addToCalendar = ((meetingDetails) => {
//      return new Promise((resolve, reject) => {
//         const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.Time}`;
//         resolve(calendar);
//      });
// })

// jodi sudu success/resolve ei hobe kono function tahole nicher ei vabe o korte pari 
//  meeting set final message 

const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.Time}`;
        return Promise.resolve(calendar);  
};




// step by step kontar por konta hocche seta buja jacche

// meeting
//     .then(addToCalendar)
//     .then((result) => {                    // successfull-resolve-then
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

  
  // kibave nibe output

  // output = wait for promise function finish
    
  // meetingDetails = await meeting;  // mane meetingDetails ta meeting function er kaj sesh hobar jonnow wait korteche, tarpor output pabe

async function myMeeting() {
    try{
    const meetingDetails = await meeting;
    const calendar = await addToCalendar(meetingDetails);
    console.log(calendar);
   } catch {
        console.log(`Something wrong happened`);
   }

}

myMeeting();

console.log("Hello");


/*
  - JavaScript er best performance er jonno sob somoy amra Asynchronous way te code lekhar try korbo.
  - jokhonei kono expensive operation korte hobe tokhonei sei operation ta ke asynchronous way te run korabo,
    jeno blocking behaviour ta na thake
  - choto choto asynchronous kaj gular order control korte amra callback function use korte pari,
  - Asynchronous task sob somoy Promise return kore, and sei Promise er sathe (then) othoba (catch) match kore amra
    promise execution korte pari,
  - Finally sob cheye convenient way te asynchronous task korar jonno, amra async-await ei code block use korte pari


*/
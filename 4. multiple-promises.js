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

meeting
    .then(addToCalendar)
    .then((result) => {                    // successfull-resolve-then
        console.log(result);
    })
    .catch((err) => {
        console.log(err.message);
    });


// synchronous

console.log("Hello Promise")
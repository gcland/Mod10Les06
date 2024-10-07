// Mod10Les06
// 2. Implementing Timers in JavaScript

// Task 1

let count = 10;
const timer = setInterval(function() {
    count--;
    console.log(count);
    const tickMessage = document.getElementById("tickMessage");
    tickMessage.textContent = `Remaining time: ${count}`
    if (count === 0) {
        clearInterval(timer);
        console.log("Time's up!");
        tickMessage.textContent = `Time's up!`
    }
}, 1000);

// Task 2

document.getElementById("delayMessage").textContent = "Message will display here:"
setTimeout(function() {
    document.getElementById("delayMessage").textContent = "Hello, I'm the delayed message! Sorry I'm late!"
}, 5000);

// Task 3
// 1. Display countdown timer until Christmas (2024). Timer must always be present
// 2. Display notification outside / next to countdown timer at specified interval


// Set the date 
let countDownDate = new Date("Dec 25, 2024 00:00:00").getTime();

// Update the count down every 1 second
let intervalfunc = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let time_distance = countDownDate - now;
    // console.log(`time distance: ${time_distance} ms`) // in milliseconds - must be broken into days and/or hours/minutes/seconds

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(time_distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_distance % (1000 * 60)) / 1000);
        
    document.getElementById("countdownTimer").innerHTML = `Countdown to Christmas (2024):<br> ${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    // If the count down is over, let user know
    if (time_distance < 0) {
    clearInterval(intervalfunc);
    document.getElementById("countdownTimer").innerHTML = "INPUT DATE HAS PAST";
    }
}, 1000);


const notificationMessage = document.getElementById("notifymessage"); // get element to append
let newMessage = document.createElement("p"); // create new element to add to previous element 
newMessage.textContent = ''; // set text to append to created element
notificationMessage.appendChild(newMessage) // append created element to the element we want to append

// get seconds until date specified above in 'countDownDate' (using same method as function above)
let now = new Date().getTime();
let time_distance = countDownDate - now;
// console.log(`time distance: ${time_distance} ms`) // in milliseconds - must be broken into seconds
let seconds = Math.floor((time_distance/1000));
let countNotification = seconds
const intervalNotification = setInterval(function() {
    countNotification--; // countdown timer (interval set at end of setInterval function)
    console.log(countNotification)
    if (countNotification <= 0) {
        document.getElementById("notifymessage").innerHTML = 'IT IS CHRISTMAS!';
    } else if (countNotification % 5 === 0) {
        document.getElementById("notifymessage").innerHTML = 'It is still not Christmas';
    } else {
        document.getElementById("notifymessage").innerHTML = '';
    }
    // would need functionality to remove 'IT IS CHRISTMAS' after x amount of time has past (1 day). Could manually update countDownDate by 1 year
}, 1000);
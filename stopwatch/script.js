// Select DOM elements
const play = document.querySelector(".Play");
const reset = document.querySelector(".Reset");
const lapsBtn = document.querySelector(".Lap");
const lap = document.querySelector(".laps");
const second = document.querySelector(".sec");
const msecond = document.querySelector(".msec");
const minute = document.querySelector(".min");

// Initialize variables
let isPlay = false; // Tracks if the stopwatch is running
let isReset = false; // Tracks if the stopwatch is reset
let lapsItem = 0; // Tracks the number of laps
let secCounter = 0; // Tracks seconds
let msecCounter = 0; // Tracks milliseconds
let minCounter = 0; // Tracks minutes
let sec; // Interval for seconds
let msec; // Interval for milliseconds
let min; // Interval for minutes

// Function to toggle visibility of Reset and Lap buttons
const toggleBtn = () => {
    lapsBtn.classList.remove("display-none");
    reset.classList.remove("display-none");
};

// Function to handle Play/Pause functionality
const plays = () => {
    if (!isPlay && !isReset) {
        // Start the stopwatch
        play.innerHTML = 'Pause';
        min = setInterval(() => {
            minute.innerHTML = `${++minCounter}: `;
        }, 60 * 1000); // Update minutes every 60 seconds
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp; ${++secCounter}: `;
        }, 1000); // Update seconds every second
        msec = setInterval(() => {
            if (msecCounter === 100) {
                msecCounter = 0;
            }
            msecond.innerHTML = `&nbsp; ${++msecCounter}`;
        }, 10); // Update milliseconds every 10ms
        isPlay = true;
        isReset = true;
    } else {
        // Pause the stopwatch
        play.innerHTML = 'Play';
        clearInterval(sec);
        clearInterval(msec);
        clearInterval(min);
        isPlay = false;
        isReset = false;
    }
    toggleBtn(); // Show/hide buttons
};

// Function to handle Reset functionality
const resets = () => {
    isReset = true;
    plays(); // Stop the stopwatch if running
    lap.classList.add("display-none"); // Hide lap list
    reset.classList.add("display-none"); // Hide Reset button
    lapsBtn.classList.add("display-none"); // Hide Lap button
    second.innerHTML = ' &nbsp; 0 :'; // Reset seconds display
    msecond.innerHTML = '&nbsp 0'; // Reset milliseconds display
    minute.innerHTML = ' 0 :'; // Reset minutes display
    secCounter = 0; // Reset seconds counter
    msecCounter = 0; // Reset milliseconds counter
    minCounter = 0; // Reset minutes counter
    isReset = false;
    laps.innerHTML = ''; // Clear all lap items
    lapsItem = 0; // Reset lap counter
};

// Function to handle Lap functionality
const laps = () => {
    // Create a new lap item
    const li = document.createElement('li');
    const number = document.createElement('span');
    const timeStamp = document.createElement('span');

    // Set attributes for the lap item
    li.setAttribute("class", "lap-items");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    // Set lap number and timestamp
    number.innerText = `#${++lapsItem}`;
    timeStamp.innerHTML = ` ${minCounter} : ${secCounter} : ${msecCounter}`;
    li.append(number, timeStamp); // Append elements to the lap item
    lap.append(li); // Append lap item to the lap list

    // Show Clear button if it's the first lap
    if (lapsItem === 1) {
        clear.classList.remove("display-none");
    }
};

// Add event listeners to buttons
play.addEventListener('click', plays);
reset.addEventListener('click', resets);
lapsBtn.addEventListener("click", laps);
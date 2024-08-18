const dayel = document.getElementById("day");
const hourel = document.getElementById("hour");
const minuteel = document.getElementById("minute");
const secondel = document.getElementById("second");
const newyeartime = new Date("Jan 1, 2025 00:00:00").getTime(); // Added space after the comma

function updatecountdown() {
    const now = new Date().getTime();
    const gap = newyeartime - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    dayel.innerHTML = days;
    hourel.innerHTML = hours;
    minuteel.innerHTML = minutes;
    secondel.innerHTML = seconds;

    setTimeout(updatecountdown, 1000); // Continue the countdown every second
}

updatecountdown(); // Initial call to start the countdown

const hoursArrow = document.querySelector('.hours');
const minutesArrow = document.querySelector('.minutes');
const secondsArrow = document.querySelector('.seconds');
const deg = 6;

setInterval(() => {
    const currentTime = new Date();

    const hours = currentTime.getHours() % 12;
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    const hoursDeg = (hours * 30) + (minutes / 2);
    const minutesDeg = minutes * deg;
    const secondsDeg = seconds * deg;


    hoursArrow.style.transform = `rotate(${hoursDeg}deg)`;
    minutesArrow.style.transform = `rotate(${minutesDeg}deg)`;
    secondsArrow.style.transform = `rotate(${secondsDeg}deg)`;

}, 0);



window.onload = function () {
    countUpFromTime("Feb 24,2022,03:20:00", 'countup1');
};

export function countUpFromTime(countFrom, id) {
    countFrom = new Date(countFrom).getTime();

    var now = new Date(),
        countFrom = new Date(countFrom),
        timeDifference = (now - countFrom);

    var secondsInADay = 60 * 60 * 1000 * 24,
        secondsInAHour = 60 * 60 * 1000;

    days = Math.floor(timeDifference / (secondsInADay) * 1);
    hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
    mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
    secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

    var idElement = document.getElementById(id);

    idElement.getElementsByClassName('days')[0].innerHTML = days;
    idElement.getElementsByClassName('hours')[0].innerHTML = hours;
    idElement.getElementsByClassName('minutes')[0].innerHTML = mins;
    idElement.getElementsByClassName('seconds')[0].innerHTML = secs;

    clearTimeout(countUpFromTime.interval);
    countUpFromTime.interval = setTimeout(function () { countUpFromTime(countFrom, id); }, 1000);
}
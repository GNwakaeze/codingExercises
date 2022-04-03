const leapYears = function(lYear) {
    const year = lYear;
    let y100 = year % 100;
    let y400 = year % 400;
    let y4 = year % 4;

    if (y100 == 0 && y400 == 0) {
        return true;
    } else if (y100 != 0 && y4 == 0) {
        return true;
    } else {
        return false;
    }
// ODIN Solution return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);
};

// Do not edit below this line
module.exports = leapYears;

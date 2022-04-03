const repeatString = function(hey, num) {
    let val = hey;
    if (num < 0) {
        return 'ERROR';
    } else if (num == 0) {
        return "";
    } else {for (let i=0; i<num; i++) 
        return hey.repeat(num)
    }
};

// Do not edit below this line
module.exports = repeatString;

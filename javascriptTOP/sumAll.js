const sumAll = function(p1, p2) {
    if (!Number.isInteger(p2)){
        return ('ERROR')
    }
    if (p1 < 0) {
        return ('ERROR')
    };

    let sum = 0;
    if (p1<p2) {
        for (i=p1; i<=p2; i++) {
            sum+= i;
        } 
    }if (p1>p2) {
            for (i=p2; i<=p1; i++) {
                sum+= i;
            }
    }
    
    return sum
};

// Do not edit below this line
module.exports = sumAll;

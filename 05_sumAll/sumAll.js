const sumAll = function(a, b) {
    if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        return "ERROR";
    }
    let res = 0;

    if (a < b){
        for (var i = a; i <=b; i++) {
            res = res + i;
        }
    } else if (b < a){
        for (var i = b; i <=a; i++) {
            res = res + i;
        }
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;

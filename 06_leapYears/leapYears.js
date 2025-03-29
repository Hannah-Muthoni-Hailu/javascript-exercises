const leapYears = function(year) {
    // Check if the year is divisible by four
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true
            } else {
                return false
            }
        }
        return true
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;

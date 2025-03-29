const reverseString = function(s) {
    let result = '';

    for (var i = s.length - 1; i >= 0; i--) {
        result = result.concat(s[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(s, t) {
    if (t < 0){
        return 'ERROR';
    }

    let final = ''
    for(var i = 0; i < t; i++){
        final = final.concat(s);
    }
    return final;
};

// Do not edit below this line
module.exports = repeatString;

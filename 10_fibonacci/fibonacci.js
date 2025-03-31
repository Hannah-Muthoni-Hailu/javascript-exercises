const fibonacci = function(val) {
    num = Number(val)
    
    if (num == 0) return 0;
    else if (num == 1) return 1;
    else if (num == 2) return 1;
    else if (num < 0) return "OOPS";

    let arr = [1, 1];

    for (var i = 2; i < num; i++) {
        arr.push(arr[i-1]+arr[i-2])
    }

    return arr[num-1]
};

// Do not edit below this line
module.exports = fibonacci;

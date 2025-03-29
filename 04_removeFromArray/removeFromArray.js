const removeFromArray = function(arr, rem) {
    for (var i = 0; i < arr.length; i++) {
        for(var i = 0; i < rem.length; i++){
            if (arr[i] == rem[i]){
                arr.splice(i, 1);
                rem.splice(i, 1);
            }
        }
    }
    console.log(arr)
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

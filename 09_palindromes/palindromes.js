const palindromes = function (s) {
    s = s.replace(/[\.,?!]/g, "").toLowerCase().replace(/ /g, "")
    let arr = s.split("");
    let rev = [];
    for (var i = arr.length - 1; i >= 0; i--){
        rev.push(arr[i]);
    }
    let s1 = arr.join("");
    let s2 = rev.join("")

    return s1 == s2;
};

// Do not edit below this line
module.exports = palindromes;

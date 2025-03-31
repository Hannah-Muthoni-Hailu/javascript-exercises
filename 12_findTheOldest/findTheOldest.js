const findTheOldest = function(arr) {
    let oldest = 0;
    let elem = {};

    let res = arr.forEach(element => {
        let age;
        if ('yearOfDeath' in element) {
            age = element['yearOfDeath'] - element['yearOfBirth']
        } else {
            age = 2025 - element['yearOfBirth']
        }

        if (age > oldest) {
            oldest = age
            elem = element
        }
    });
    return elem
};

// Do not edit below this line
module.exports = findTheOldest;

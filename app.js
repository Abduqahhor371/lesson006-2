// 1-masala
function filterPositiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log(filterPositiveNumbers([-1, 2, -3, 4, 5])); // [2, 4, 5]

// 2-masala
function capitalizeFirstLetters(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeFirstLetters("javascript coding rules")); // "Javascript Coding Rules"
// 3-masala
function reverseNumber(num) {
    const reversed = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    return reversed;
}
console.log(reverseNumber(12345)); // 54321
console.log(reverseNumber(-9876)); // -6789

// 4-masala
function filterFalseValues(arr) {
    return arr.filter(value => value === false);
}
console.log(filterFalseValues([true, false, 0, false, true])); // [false, false]

// 5-masala
function sumPositiveNumbers(arr) {
    return arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
}
console.log(sumPositiveNumbers([-1, 2, 3, -4, 5])); // 10
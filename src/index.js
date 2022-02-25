module.exports = function reverse(n) {
    let string = n.toString();
    return parseInt(string.split('').reverse().join(''));
}
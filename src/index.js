module.exports = function reverse (n) {
    
let nonMinus = Math.abs(n);
let number = String(nonMinus);
let array = [];

    array.push(number[2]);
    array.push(number[1]);
    array.push(number[0]);
 
return parseInt(array[0]+array[1]+array[2])

}

// run node reverse_String_ntegers

function reverseString(str) {
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join('');
    return reversedStr;
}

let originalStr = "Hello, world!";
let reversedStr = reverseString(originalStr);
console.log("Chuỗi gốc:", originalStr);
console.log("Chuỗi đảo ngược:", reversedStr);


function reverseInteger(num) {
    let str = num.toString();
    let arr = str.split('');
    let reversedArr = arr.reverse();
    let reversedStr = reversedArr.join('');
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
}

let originalNum = 12345;
let reversedNum = reverseInteger(originalNum);
console.log("Số nguyên gốc:", originalNum);
console.log("Số nguyên đảo ngược:", reversedNum);


function maxCharacter(string) {
    const charCount = {};

    for (let char of string) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let maxChar = '';
    let maxCount = 0;

    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxChar = char;
            maxCount = charCount[char];
        }
    }

    return maxChar;
}

const string = "Học java và javascript";
const maxChar = maxCharacter(string);
console.log(`Input: ${string}\nOutput: Ký tự xuất hiện nhiều nhất trong chuỗi '${string}' là: ${maxChar}`);

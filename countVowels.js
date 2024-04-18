function countVowels(str) {
    const matches = str.match(/[aeiou]/gi);

    return matches ? matches.length : 0;
}

const str1 = "Hello, how are you?";
const str2 = "The quick brown fox jumps over the lazy dog";

const vowelsCount1 = countVowels(str1);
const vowelsCount2 = countVowels(str2);

console.log(`\nSố lượng nguyên âm trong chuỗi "${str1}" là: ${vowelsCount1}`);
console.log(`\nSố lượng nguyên âm trong chuỗi "${str2}" là: ${vowelsCount2}\n`);


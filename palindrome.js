function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const palindromeResult = cleanStr === cleanStr.split('').reverse().join('');

    return `${str}, là Palindrome: ${palindromeResult ? 'Có' : 'Không'}`;
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

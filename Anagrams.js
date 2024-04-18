function areAnagrams(str1, str2) {

    const normalizedStr1 = str1.replace(/\s/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s/g, '').toLowerCase();

    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}


const str1 = "listen";
const str2 = "silent";
if (areAnagrams(str1, str2)) {
    console.log(`\n"${str1}" và "${str2}" là Anagrams.\n`);
} else {
    console.log(`"\n${str1}" và "${str2}" không phải là Anagrams.`);
}

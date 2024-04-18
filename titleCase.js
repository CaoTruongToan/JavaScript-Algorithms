function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Sử dụng hàm toTitleCase
let inputStr = "this is a longer string with multiple words";
let titleCaseStr = toTitleCase(inputStr);
console.log("\nChuỗi gốc:", inputStr);
console.log("\nChuỗi Title Case:", titleCaseStr ,"\n");

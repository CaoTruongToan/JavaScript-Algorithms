function chunk(array, size) {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        const chunk = array.slice(i, i + size);
        chunks.push(chunk);
    }
    return chunks;
}

// Ví dụ sử dụng hàm chunk
console.log("Output:", chunk([1, 2, 3, 4], 2)); 
console.log("Output:", chunk([1, 2, 3, 4, 5], 2));
console.log("Output:", chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

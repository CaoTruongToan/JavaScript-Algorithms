function fizzBuzz(limit) {
    let output = '';
    
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz ';
        }
        else if (i % 3 === 0) {
            output += 'Fizz ';
        }
        else if (i % 5 === 0) {
            output += 'Buzz ';
        }
        else {
            output += i + ' ';
        }
    }
    console.log(output);
}


fizzBuzz(15);

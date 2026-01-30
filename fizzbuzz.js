/**
 * FizzBuzz implementation
 * A human is adding this line
 * A simple example file that doesn't affect the main application.
 * Prints numbers from 1 to 100, but for multiples of 3 prints "Fizz",
 * for multiples of 5 prints "Buzz", and for multiples of both prints "FizzBuzz".
 */

function fizzbuzz(n = 100) {
    for (let i = 1; i <= n; i++) {
        let output = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        
        console.log(output || i);
    }
}

// Run FizzBuzz if executed directly
if (require.main === module) {
    fizzbuzz();
}

module.exports = fizzbuzz;
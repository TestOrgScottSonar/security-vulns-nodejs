/**
 * FizzBuzz implementation
 * A human is adding this line
 * A simple example file that doesn't affect the main application.
 * Prints numbers from 1 to 100, but for multiples of 3 prints "Fizz",
 * for multiples of 5 prints "Buzz", and for multiples of both prints "FizzBuzz".
 * 
 * Now supports extended functionality including statistics, custom divisors, and more!
 * Testing the updated hooks with explicit PATH configuration for cross-IDE compatibility.
 * 
 * @param {number} n - The upper limit for FizzBuzz (default: 100)
 * @param {boolean} returnArray - If true, returns results as array instead of logging
 * @returns {Array|undefined} Array of results if returnArray is true
 */

function fizzbuzz(n = 100, returnArray = false) {
    const results = [];
    
    for (let i = 1; i <= n; i++) {
        let output = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        
        const result = output || i;
        
        if (returnArray) {
            results.push(result);
        } else {
            console.log(result);
        }
    }
    
    return returnArray ? results : undefined;
}

// Run FizzBuzz if executed directly
if (require.main === module) {
    // Parse command line arguments
    const args = process.argv.slice(2);
    const limit = args[0] ? parseInt(args[0], 10) : 100;
    
    console.log(`Running FizzBuzz from 1 to ${limit}...`);
    fizzbuzz(limit);
}

/**
 * FizzBuzzBazz - Extended version with support for 7 (Bazz)
 * @param {number} n - The upper limit
 * @param {boolean} returnArray - If true, returns results as array
 * @returns {Array|undefined} Array of results if returnArray is true
 */
function fizzbuzzbazz(n = 100, returnArray = false) {
    const results = [];
    
    for (let i = 1; i <= n; i++) {
        let output = '';
        
        if (i % 3 === 0) output += 'Fizz';
        if (i % 5 === 0) output += 'Buzz';
        if (i % 7 === 0) output += 'Bazz';
        
        const result = output || i;
        
        if (returnArray) {
            results.push(result);
        } else {
            console.log(result);
        }
    }
    
    return returnArray ? results : undefined;
}

/**
 * Get statistics about FizzBuzz results
 * I added some of this
 * @param {number} n - The upper limit
 * @returns {Object} Statistics object with counts
 */
function getFizzBuzzStats(n = 100) {
    const results = fizzbuzz(n, true);
    
    const stats = {
        total: results.length,
        fizz: results.filter(r => r === 'Fizz').length,
        buzz: results.filter(r => r === 'Buzz').length,
        fizzbuzz: results.filter(r => r === 'FizzBuzz').length,
        numbers: results.filter(r => typeof r === 'number').length
    };
    
    // Calculate percentages
    stats.percentages = {
        fizz: ((stats.fizz / stats.total) * 100).toFixed(2) + '%',
        buzz: ((stats.buzz / stats.total) * 100).toFixed(2) + '%',
        fizzbuzz: ((stats.fizzbuzz / stats.total) * 100).toFixed(2) + '%',
        numbers: ((stats.numbers / stats.total) * 100).toFixed(2) + '%'
    };
    
    return stats;
}

module.exports = fizzbuzz;
module.exports.fizzbuzzbazz = fizzbuzzbazz;
module.exports.getFizzBuzzStats = getFizzBuzzStats;

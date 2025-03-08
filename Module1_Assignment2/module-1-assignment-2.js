/* 
2nd Live Assignment: Closure Demonstration
Create a function that returns a nested function and demonstrate closure behavior.
✅ Requirements: Create a function that returns a nested function. Demonstrate closure behavior by accessing outer function variables inside the nested function. Call the function and log the results.
*/

function createCounter(startValue) {
    let count = startValue; 
    
    return {
        increment: function() {
            count += 1;
            return count;
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}


const counter = createCounter(5);

console.log("Initial count:", counter.getCount()); // Should output 5
console.log("After increment:", counter.increment()); // Should output 6
console.log("After increment:", counter.increment()); // Should output 7
console.log("After decrement:", counter.decrement()); // Should output 6
console.log("Final count:", counter.getCount()); // Should output 6

/**
 * Function to calculate the sum of all elements in an array
 * @param {number[]} arr - The input array
 * @returns {number} The sum of all elements in the array
 */
function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(calculateSum(numbers)); // Expected Output?

/**
 * 🕒 Time Complexity: O(n)
 * 
 * ------------------------------
 * ❓ Explain why the time complexity is O(n):
 * 
 * The time complexity is O(n) because the function will iterate through the array once, and the number of iterations is directly proportional to the size of the array.
 * ------------------------------
 * 
 * 🔹 What is the time complexity if the array is empty?
 * 
 * The time complexity is O(1) because the function will not iterate through the array and will return 0 immediately.
 * ------------------------------
 * 
 * 🔹 What is the time complexity if all elements are negative?
 * 
 * O(n) - The value of the elements does not affect the number of iterations through the array.
 * ------------------------------
 * 
 * 🔹 What is the time complexity if the array contains only one element?
 * 
 * O(1) - The loop runs once, which is a constant operation.
 */
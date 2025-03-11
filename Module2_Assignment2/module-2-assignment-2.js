/**
 * Function to find the maximum number in an array
 * @param {number[]} arr - The input array
 * @returns {number|null} The maximum number in the array, or null if the array is empty
 */
function findMax(arr) {

    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}

// Example usage:
const numbers = [10, -5, 20, 0]; // Example array
console.log(findMax(numbers)); // Expected Output: 20

/**
 * 🕒 Time Complexity: O(n)
 * 
 * ------------------------------
 * ❓ Explain why the time complexity is O(n):
 * - The function iterates through each element in the array exactly once.
 * - Therefore, the number of operations increases linearly with the size of the input array.
 * 
 * ------------------------------
 * 
 * 💾 Space Complexity: O(1)
 * 
 * ------------------------------
 * ❓ Explain why the space complexity is O(1):
 * - The function uses a fixed number of variables (e.g., 'max' and the loop index).
 * - It does not allocate additional space that scales with the input size.
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if the array is empty?
 * - O(1) because the function still uses a fixed amount of memory regardless of the input.
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if all elements are negative?
 * - O(1) as the logic remains unchanged; it only keeps track of one variable ('max').
 * 
 * ------------------------------
 * 
 * 🔹 What is the space complexity if the array contains only one element?
 * - O(1) since only one element is processed and the same fixed amount of memory is used.
 */
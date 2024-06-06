// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
 

// Constraints:

// 1 <= nums.length <= 100
// 0 <= nums[i] <= 109

/**
 * @param {numbers[]} nums
 * @return {string}
 */
// const largestNumber = (numbers) => {

//     numbers.sort((a, b) => {
//         const ab = '' + a + b;
//         const ba = '' + b + a;
//         return ba.localeCompare(ab);
//     });

//     if (numbers[0] === 0) return '0';

//     return numbers.join('');
// }


// console.log("Brute -")
// console.log(largestNumber([10,2])); // "210" 
// console.log(largestNumber([3,30,34,5,9])); // "9534330"


const largestNumber = (nums) => {
nums.sort((a, b) => ('' + b + a).localeCompare('' + a + b));
    
    if (nums[0] === 0) {
        return '0';
    }
     
    return nums.join('');
}

console.log("Better -")
console.log(largestNumber([10,2])); // "210" 
console.log(largestNumber([3,30,34,5,9])); // "9534330"
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSums = (nums, target) => {
    if (nums.length === 0) return [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if ((nums[j] + nums[i]) === target) {
                return [i, j];
            }
        }
    }
}

const twoSumsOptimized = (nums, target) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    
    return [];
}

console.log("Brute - ")
console.log(twoSums([2,7,11,15], 9)); // [0,1]
console.log(twoSums([3,2,4], 6)); // [1,2]
console.log(twoSums([3,3], 6)); // [0,1]
console.log("Optimized - ");
console.log(twoSumsOptimized([2,7,11,15], 9)); // [0,1]
console.log(twoSumsOptimized([3,2,4], 6)); // [1,2]
console.log(twoSumsOptimized([3,3], 6)); // undefined - should be [0,1]
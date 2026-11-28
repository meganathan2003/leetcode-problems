/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {

    let results = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {

        for (let j = i + 1; j < nums.length; j++) {

            if (nums[i] % nums[j] === 0 || nums[j] % nums[i] === 0) {
                results.push(nums[i], nums[j]);
            }
        }
        
    }

    return results;

};
const nums = [1, 2, 4, 8];
console.log(largestDivisibleSubset(nums));

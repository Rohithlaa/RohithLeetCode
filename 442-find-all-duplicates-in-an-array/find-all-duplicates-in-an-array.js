/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]) // Index approach
        let idx = num - 1;
        if (nums[idx] < 0) {
            result.push(num)
        } else {
            nums[idx] *= -1
        }
    }
    return result;
};
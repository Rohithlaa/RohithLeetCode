/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {

    let i = 0;
    let j = 0;
    let result = 0;
    let obj = {}
    while (j < nums.length) {
        obj[nums[j]] = (obj[nums[j]] || 0) + 1;
        while (i < j && obj[nums[j]] > k) {
            obj[nums[i]]--;
            i++;
        }
        result = Math.max(result, j - i + 1);
        j++;
    }
    return result;

};
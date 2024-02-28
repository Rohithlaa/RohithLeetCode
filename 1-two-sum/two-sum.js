/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let eleObj ={}
    for(let i=0;i<nums.length;i++){
        let remaining = target - nums[i]
        if(eleObj[remaining] !== undefined){
            return [eleObj[remaining], i]
        }
        eleObj[nums[i]] = i
    }
};
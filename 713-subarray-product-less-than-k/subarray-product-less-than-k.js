/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {

    let i = 0; // initializing i slider point A
    let j = 0; // initializing j slider point B
    let product = 1; // we require product of subarray, so initializing product to 1
    let count = 0; // we need to return count, so for calculating count initializing the count 
    if(k <= 1) return 0; // if k is less than 0, then the product of any subarray is 0 and count is 0
    while(j< nums.length){ // we wil loop till slider point B ends i.e still length of array
        product *= nums[j] // calculating the product
        while( product >= k){ // catching the product greater equal 100
             product /= nums[i] // divding it with nums[i] cause we are deleting the i point so that i can move forward to next item
             i++; // incrementing i
        }
        count += j-i+1; /// calculating the subarray count
        j++; // incrementing j
    }
    return count;
};
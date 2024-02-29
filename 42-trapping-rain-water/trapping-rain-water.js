/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // finding the left Max elements
    function leftMax(nums){
        let leftMaxArray1 = []
        leftMaxArray1[0] = nums[0];
        for(let i=1;i<nums.length;i++){
            leftMaxArray1.push(Math.max(leftMaxArray1[i-1], nums[i]))
        }
        return leftMaxArray1;
    }
    // finding the right Max elements
    function rightMax(nums){
        let rightMaxArray1 = []
        rightMaxArray1[nums.length-1] = nums[nums.length-1];
        for(let i=nums.length-2;i>=0;i--){
            rightMaxArray1[i] = Math.max(rightMaxArray1[i+1], nums[i])
        }
        return rightMaxArray1;
    }
    // initialising the Sum
     let sum = 0
     let leftMaxArray = leftMax(height);
     let rightMaxArray = rightMax(height);
     //looping through the items to find out where tht water will get stored
    for(let i=0;i<height.length;i++){
        //fetching minimum left and right array index minus current height
         sum += Math.min(leftMaxArray[i], rightMaxArray[i]) - height[i]
    }
    return sum;
};
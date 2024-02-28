/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // n2+n3 = -n1 APPROACH
 let result = []
 // two pointer approach to find Two Sum 
    function twoSum(arr,target, i,j){
        while(i<j){
            if(arr[i]+arr[j] > target){
                j--;
            }else if( arr[i]+arr[j] < target){
                i++;
            }else{
                result.push([-target, arr[i], arr[j]])
                while(i<j && arr[i] === arr[i+1]) i++;
                while(i<j && arr[j] === arr[j-1]) j--;
                i++;
                j--;
            }
        }
    }

    // Sorting the Array since it's not Index based
    let numbers = nums.sort((a,b) => a-b)
    // length should be atleast 3 since we need atlesast Three numbers
    if(nums.length < 3){
        return []
    }
// Fixing one item and as n1 and finding Two. Sum for remaining 3 elements
    for(let i=0;i<numbers.length-2;i++){
        // since there should not be any duplicates... we are checking current number is equal to last number if yes then we are skipping iteration
        if(i !== 0 && numbers[i] === numbers[i-1]){
            continue;
        }
        let n1 = numbers[i]
        let target = -n1
        //calling two pointer approch with target as -n1
        twoSum(numbers, target, i+1, numbers.length-1)
    }
    return result;
};
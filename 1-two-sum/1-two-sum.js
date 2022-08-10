/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        secondI = -1;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                secondI = j;
                break;
            }
        }

        // console.log(num, i, secondI);

        if (secondI !== -1 && i !== secondI) {
            return [i, secondI];
        }
    }
};
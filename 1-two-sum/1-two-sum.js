/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const secondI = i + nums.slice(i + 1).indexOf(target - nums[i]) + 1;

        if (secondI !== -1 && i !== secondI) {
            return [i, secondI];
        }
    }
};
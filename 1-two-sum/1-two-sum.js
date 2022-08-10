/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for (const [i, num] of Object.entries(nums)) {
        const secondI = nums.indexOf(target - num);
        
        if (secondI !== -1 && Number(i) !== secondI) {
            return [Number(i), secondI]
        }
    }
};
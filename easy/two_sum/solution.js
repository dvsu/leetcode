var twoSum = function(nums, target) {
    var nums_sorted = [...nums].sort((a,b) => a - b);
    let cursor_l = 0
    let cursor_r = nums_sorted.length - 1

    while (true) {
        if (nums_sorted[cursor_l] + nums_sorted[cursor_r] > target) {
            cursor_r -= 1;
        } else if (nums_sorted[cursor_l] + nums_sorted[cursor_r] < target) {
            cursor_l += 1;
        } else {
            first_index = nums.indexOf(nums_sorted[cursor_l]);
            //console.log(nums, nums_sorted, cursor_l, cursor_r);

            return ((nums_sorted[cursor_l] !== nums_sorted[cursor_r]) || (first_index === nums.length - 1)) ? 
                [first_index, nums.indexOf(nums_sorted[cursor_r])] : 
                [first_index, nums.indexOf(nums_sorted[cursor_r], first_index+1)];
        }
    }
}


console.log(twoSum([3,3], 6))
console.log(twoSum([2,3,7,5,3,7,1,3,4], 8))
console.log(twoSum([-1, -2, -3, -4, -5], -8)) // [4, 2]
console.log(twoSum([-10, -1, -18, -19], -19)) // [2, 1]
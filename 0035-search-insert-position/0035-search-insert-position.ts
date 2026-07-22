function searchInsert(nums: number[], target: number): number {
    let high = nums.length - 1;
    let low = 0;

    while (high >= low) {
        let mid = low + Math.floor((high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) { // right half
            low = mid + 1;
        } else {                  // left half
            high = mid - 1;
        }
    }

    return low;
};
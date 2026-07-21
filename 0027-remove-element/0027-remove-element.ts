function removeElement(nums: number[], val: number): number {
    let n = nums.length
    let k = 0

    for (let i = 0; i < n; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
};
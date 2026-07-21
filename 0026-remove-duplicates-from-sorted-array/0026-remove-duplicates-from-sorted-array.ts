function removeDuplicates(nums: number[]): number {
    let n = nums.length - 1
    let j = 1

    for (let i = 0; i < n; i++){
        if(nums[i] !== nums[i+1]){
            nums[j] = nums[i+1]
            j++
        }
    }

    return j
};
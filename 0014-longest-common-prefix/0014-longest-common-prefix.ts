function longestCommonPrefix(strs: string[]): string {
    let result = "";
    for (let i = 0; i < strs[0].length; i++) {
        let word = strs[0][i] // f

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || word !== strs[j][i]) {
                return result
            }
        }
        result += word
    }

    return result
};
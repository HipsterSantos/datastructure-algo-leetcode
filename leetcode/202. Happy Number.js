var isHappy = function(n) {
    const seenSet = new Set()

    const helper = (num) => {
        if (num === 1) {
            return true
        }

        if (seenSet.has(num)) {
            return false
        }

        seenSet.add(num)

        const newNum = (num + '').split('').reduce((sum, digit) => sum + Math.pow(parseInt(digit), 2), 0)

        return helper(newNum)
    }

    return helper(n)
}

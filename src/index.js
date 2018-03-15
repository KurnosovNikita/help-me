module.exports = function count(s, pairs) {
    var numberForDivision = 1000000007,
        splitMask = s.split(""),
        result = 0,
        sumOfPairs = 1,
        lengthOfString = s.length,
        lengthOfPairs = pairs.length;
    if (lengthOfPairs > 7) {
        return 0;
    }
    for (let i = 0; i < lengthOfPairs; i++) {
        if (pairs[i][1] > 7) {
            return 0;
        }
        sumOfPairs *= Math.pow(pairs[i][0], pairs[i][1]);
    }
    for (let i = 0; i < sumOfPairs; i++) {
        for (let j = 0; j < lengthOfString; j++) {
            if (s[j] === "0") {
                if (division(sumOfPairs, i + j) !== 1 && j === (lengthOfString - 1)) {
                    result++;
                } else if (division(sumOfPairs, i + j) === 1) {
                    break;
                }
            } else if (s[j] === "1") {
                if (division(sumOfPairs, i + j) === 1 && j === (lengthOfString - 1)) {
                    result++;
                } else if (division(sumOfPairs, i + j) !== 1) {
                    break;
                }
            }
        }
    }
    result % numberForDivision;
    return result %= numberForDivision;
    // your implementation
}

function division(a, b) {
    if (b === 0) {
        return a;
    }
    return division(b, a % b);
}

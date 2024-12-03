function decisionLogic(a, b, c) {
    if ((a > 10 && b < 5) || c === 0) {
        return true;
    }
    return false;
}

module.exports = decisionLogic;

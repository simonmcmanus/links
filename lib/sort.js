
exports.byEpoch = (a, b) => {
    if (a.epoch > b.epoch) {
        return -1
    } else if (a.epoch < b.epoch) {
        return 1
    } else {
        return 0;
    }
};

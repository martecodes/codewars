function queue(queuers, pos) {
    let wait = 0;

    for (let i = 0; i < queuers.length; i++) {
        if (i <= pos) {
            wait += Math.min(queuers[i], queuers[pos]);
        } else {
            wait += Math.min(queuers[pos] - 1, queuers[i]);
        }
    }

    return wait;
}
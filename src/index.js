exports.min = function min(arr) {
    if (arr === undefined || arr.length === 0 || arguments.length === 0) {
        return 0;
    }
    return Math.min(...arr);
}

exports.max = function max(arr) {
    if (arr === undefined || arr.length === 0 || arguments.length === 0) {
        return 0;
    }
    return Math.max(...arr);
}

exports.avg = function avg(arr) {
    if (arr === undefined || arr.length === 0 || arguments.length === 0) {
        return 0;
    }
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        summa += arr[i];
    }
    return summa / arr.length;
}
var sum_to_n_a = function(n) {
    if (n == 1) {
        return n;
    } else {
        return n + function(n - 1);
    }
};

var sum_to_n_b = function(n) {
    let result = 0;
    for (let i = n; i > 0; i--) {
        result += i;
    }
    return result;
};

var sum_to_n_c = function(n) {
    return (n * (1 + n)) / 2;
};
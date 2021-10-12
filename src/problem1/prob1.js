var sum_to_n_a = function(n) {
    function sum(n) {
        if (n == 1) {
            return n;
        } else {
            return n + sum(n - 1);
        }
    }
    return sum(n);
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

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));
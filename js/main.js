function pow(n, x) {
    if (x == 0) {
        return n = 1;
    } else if (x == 1) {
        return n = n;
    } else return n * pow(n, x - 1); // n ** x;
}

let a = +prompt('Enter number');
let b = +prompt('Enter degree');

document.write(`Number ${a} to the power of ${b} = `, pow(a, b));

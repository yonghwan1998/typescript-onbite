type Operation = (
    a: number,
    b: number
) => number;

const add: (a: number, b: number) => number = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mulyiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

type Operation2 = {
    (a: number, b: number): number;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mulyiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
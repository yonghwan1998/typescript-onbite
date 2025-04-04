function func(a: number, b: number): number {
    return a + b;
}

const add = (a: number, b: number): number => {
    return a + b;
};

function introduce(name = '방용환', tall?: number) {
    console.log(`name: ${name}`);
    console.log(`tall: ${tall}`);
}

introduce('홍길동', 173);

introduce('홍길동');

function getSum(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);
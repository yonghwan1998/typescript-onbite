function func1(): string {
    return 'hello';
}

function func2(): void {
    console.log('hello');
}

function func3(): undefined {
    return undefined;
}

function func4(): null {
    return null;
}

let a: void;
a = undefined;

function func5(): never {
    while (true) {}
}

function func6(): never {
    throw new Error();
}
function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;

    let unknownVar: unknown;
}

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();
}

function voidExam() {
    function voidFunc(): void {
        console.log('hello');
    }

    let voidVar: void = undefined;
}

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;

    undefinedVar = anyVar;
}
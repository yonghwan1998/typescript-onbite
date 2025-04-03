let a: string | number | boolean;
a = 10;
a = 'string';
a = true;

let arr: (string | number | boolean)[] = [1, 'string', true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
    name: '',
    color: '',
};

let union2: Union1 = {
    name: '',
    language: '',
};

let union3: Union1 = {
    name: '',
    color: '',
    language: '',
};

// let union4: Union1 = {
//     name: '',
// };

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: '',
    color: '',
    language: '',
};
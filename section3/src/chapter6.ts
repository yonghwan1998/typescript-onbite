type Person = {
    name: string;
    age: number;
};

let person = {} as Person;

person.name = '방용환';
person.age = 28;

type Dog = {
    name: string;
    color: string;
};

let dog: Dog = {
    name: '똘이',
    color: 'brown',
    breed: '진도',
} as Dog;

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
let num3 = 10 as unknown as string;

let num4 = 10 as const;

let cat = {
    name: '마틴',
    color: 'black',
} as const;

type Post = {
    title: string;
    author?: string;
}

let post: Post = {
    title: 'post1',
    author: '방용환',
};

const len: number = post.author!.length;
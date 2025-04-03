type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: '기린',
    color: 'yellow',
};

let dog: Dog = {
    name: '또리',
    color: 'brown',
    breed: '진도',
};

animal = dog;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: 'JavaScript',
    price: 10000,
    skill: 'ES6',
};

book = programmingBook;

let book2: Book = {
    name: 'JavaScript',
    price: 10000,
    // skill: 'ES6',
};

let boo3: Book = programmingBook;

function func(book: Book) {}

func({
    name: 'JavaScript',
    price: 10000,
    // skill: 'ES6',
});

func(programmingBook);
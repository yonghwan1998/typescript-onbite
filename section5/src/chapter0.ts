interface Person {
  name: string;
  age?: number;
  sayHi: () => void;
};

const person: Person = { 
  name: '방용환',
  age: 28,
  sayHi() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
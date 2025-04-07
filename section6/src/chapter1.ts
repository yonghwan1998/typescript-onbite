const employee = {
  name: '방용환',
  age: 28,
  position: 'developer',
  work() {
    console.log('일하는 중');
  }
}

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일하는 중');
  }
}

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
};

const employeeB = new Employee('방용환', 28, 'developer');
console.log(employeeB);

const employeeC: Employee = {
  name: '방용환',
  age: 28,
  position: 'developer',
  work() {},
};
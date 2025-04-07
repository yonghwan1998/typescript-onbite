class Employee {
  private name: string;
  public age: number;
  public position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log('일하는 중');
  }
}

const employee = new Employee('방용환', 28, 'developer');
// employee.name = '홍길동';
employee.age = 30;
employee.position = 'designer';
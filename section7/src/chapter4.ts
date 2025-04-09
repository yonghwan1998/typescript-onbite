class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        this.list.pop();
    }

    print() {
        console.log(this.list);
    }

}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(5);
numberList.print();

const stringList = new List(['1', '2']);
stringList.push('3');
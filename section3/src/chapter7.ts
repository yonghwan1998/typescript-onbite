type Person = {
    name: string;
    age: number;
};

function func(value: number | string | Date | null | Person) {
    value;
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    // } else if (typeof value === 'object') {
    //     console.log(value.getTime());
    // }
    } else if (value instanceof Date) {
        console.log(value.getTime());
    // } else if (value instanceof Person) {
        
    // }
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
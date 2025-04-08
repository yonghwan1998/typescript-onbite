interface KeyPair<K, V> {
    key: K;
    value: V;
}

let KeyPair: KeyPair<string, number> = {
    key: 'key',
    value: 0,
};

let KeyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ['1'],
};

interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: -1231,
}

interface Map<V> {
    [key: string]: V
}

let stringMap: Map<string> = {
    key: 'string'
}

let booleanMap: Map<boolean> = {
    key: true
}

type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: '1'
}

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
    name: '방용환',
    profile: {
        type: 'developer',
        skill: 'TypeScript',
    }
}

const studentUser: User<Student> = {
    name: '김용환',
    profile: {
        type: 'student',
        school: '한국공학대학교',
    }
}
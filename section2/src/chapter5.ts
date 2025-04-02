enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

enum Language {
    korean = 'ko',
    english = 'en',
}

const user1 = {
    name: '방용환',
    role: Role.ADMIN,
    Language: Language.korean,
};
const user2 = {
    name: '김용환',
    role: Role.USER,
};
const user3 = {
    name: '이용환',
    role: Role.GUEST,
};
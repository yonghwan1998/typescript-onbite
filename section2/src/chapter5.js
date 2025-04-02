var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var user1 = {
    name: '방용환',
    role: Role.ADMIN,
};
var user2 = {
    name: '김용환',
    role: Role.USER,
};
var user3 = {
    name: '이용환',
    role: Role.GUEST,
};

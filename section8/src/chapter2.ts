type Person = typeof person;

function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person = {
  name: '방용환',
  age: 28,
};

getPropertyKey(person, 'name');
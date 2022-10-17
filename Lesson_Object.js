//Контейнер для набора свойсвтю состоит из набора ключей и значений (keys, value)
//           key = string
const obj = {a: 'a', b: 123, c: true, d: [1, 2, 3, 4]};

let newObj = new Object(); // - используеться с конструктором

newObj = {"ab": 'a', bb: 123, 'cb': true, db: {1: 1, 2: 2, 3: 3, 4: 4}};
const testObj = {};

Object.assign(testObj, obj, newObj);

console.log(testObj);





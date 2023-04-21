//OOP.js
// Наполнение объекта
//===========
//Variant 1//
//===========
// let obj = {};
let log = console.log;
// console.log(typeof log)

// obj.name = "Anna";
// obj.occupation = "Student";
// obj.introduction = function () {
//     log(`Hello, I'm ${this.name}`);
// }

// obj.introduction();

//Variant 2

// let o = {
//     name: "Anna",
//     occupation: "Student",
//     introduction() {
//         log(`Hello, I'm ${this.name}`)
//     }
// }

// o.introduction();

// Конструктор
function Person(name, occupation) {
    
    this.name = name;
    this.occupation = occupation;
    
    this.introduction = function () {
        log(`Hello, I'm ${this.name}`);
        log(`I'm a ${this.occupation}`);
    }
    Person.count++;
}
Person.count = 0;

let p1 = new Person("Anastasya", "Student");
// p1.introduction();
// log(typeof p1)

let p2 = {name: "Anna", occupation: "principal"};

// log(p1 instanceof Person) // проверяет если объект являеться объектом класса



log(Person.count);

//---------------------------------------


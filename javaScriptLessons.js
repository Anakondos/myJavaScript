//
//object.keys()
//object.values()
//object.entries()

const subjects = {js: "JavaScript", 2: "Java", sql: "SQL", eng: "English"};

console.log(Object.keys(subjects));
console.log(Object.values(subjects));

console.log(Object.keys(subjects).sort());

console.log(Object.entries(subjects));


const arr = Object.entries(subjects);
const newArr = arr.map(([key, value]) => [key, +(value*1.2).toFixed(2)]);

const finalFruits = Object.fromEntries(newArr)
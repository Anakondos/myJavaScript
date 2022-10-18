//Контейнер для набора свойсвтю состоит из набора ключей и значений (keys, value)
//           key = string
// const obj = {a: 'a', b: 123, c: true, d: [1, 2, 3, 4]};

// let newObj = new Object(); // - используеться с конструктором

// newObj = {"ab": 'a', bb: 123, 'cb': true, db: {1: 1, 2: 2, 3: 3, 4: 4}};
// const testObj = {};

// Object.assign(testObj, obj, newObj);

// console.log(testObj);

// for (let key in obj) {
//     console.log(`key ${key} ---${obj[key]}`);
// }

// ----------- Methods -----------

// Object.keys();
// Object.values();
// Object.entries();

// console.log(Object.keys(obj));

//--------------boredom-----------------------
let staff = {tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' };

  function boredom(staff){
  
    let arr = {
       accounts: 1,
       finance: 2,
       canteen: 10,
       regulation: 3,
       trading: 6,
       change: 6,
       IS: 8,
       retail: 5,
       cleaning: 4,
       'pissing about': 25,
    }
    
    let sum = Object.keys(staff).reduce((acc, el) => acc + arr[staff[el]],0 ); 
     console.log(sum);
    
    return sum <= 80 ? 'kill me now' : sum < 100 ? 'i can handle this' : 'party time!!'; 
   }

   console.log(boredom(staff));
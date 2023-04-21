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
//=================================

// var myCar = new Object();
// myCar["12"] = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969;

// console.log(myCar);
//==========================
// from UTF - > Char (ASCII)
//==========================
// function numObj(s){
//   const arr = []
//   const obj = {}
//   for(let i in s){
    
//     obj[s[i]] = String.fromCharCode(s[i])
    
//   }
//   arr.push(obj)
//   return arr
// }

// let arr = [120, 113, 114, 115];

// console.log(numObj(arr));


//===================================
//  from CHAR -> ASCII
//===================================

// function numObj(s){
//   const arr = []
 
//   for(let i in s){
//     const obj = {}
//     obj[s[i]] = s[i].charCodeAt(0);
//     arr.push(obj)
    
//   }
  
//   return arr
// }

// let arr1 = ["a", "b", "c", "d"];

// console.log(numObj(arr1));

//===================================================
//--------------boredom-----------------------
// let staff = {tim: 'change', jim: 'accounts',
//   randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
//   laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
//   mr: 'finance' };

//   function boredom(staff){
  
//     let arr = {
//        accounts: 1,
//        finance: 2,
//        canteen: 10,
//        regulation: 3,
//        trading: 6,
//        change: 6,
//        IS: 8,
//        retail: 5,
//        cleaning: 4,
//        'pissing about': 25,
//     }
    
//     let sum = Object.keys(staff).reduce((acc, el) => acc + arr[staff[el]],0 ); 
//      console.log(sum);
    
//     return sum <= 80 ? 'kill me now' : sum < 100 ? 'i can handle this' : 'party time!!'; 
//    }

//    console.log(boredom(staff));

   //--------------------------------------------------
   // 
   //==================================================

  //  function giveMeFive(obj){
  
  //   let arr = [];
    
  //   for(let key in obj) {
      
  //     if  (key.length == 5) {
  //       arr.push(key);
  //     }
  //     if (obj[key].length == 5){
  //       arr.push(obj[key]);
  //     }
      
      
  //   }
  //   return arr;
  // }

  //------------------------------------------


  // function nameScore(name){
  //   let obj = {};
  //   let score = 0;
  //   let arr = name.toUpperCase();
  //   for ( let i =0; i < arr.length; i++){
  //     for (let key in alpha){
  //       if (key.includes(arr[i])){
  //         score += alpha[key]
  //         break
  //       }
  //     }
      
  //   }
  //   return {[name]: score}
  // }
  //==============================
  // CodeWars
  //==========================

  // function isRubyComing(list) {
  // // arr = [];
  
  // return list.some(e => e.language === 'Ruby');  
    
  // }
  //   // return arr;

  //   // return list.map((el) => el, 0).Object.values(el).reduce((i) => el.language == 'Ruby' ? true : false,0);
  

  // var list1 = [
  //   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  //   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  //   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  // ];

  // console.log(isRubyComing(list1));

  //inheritance by prototyping

  let coffeeCup = {
    name: "",
    water: "",
    cupSize: "",
  }

  console.log(coffeeCup);

  let coffeeCup2 = {
        milk: '',
        __proto__: coffeeCup,}


// создание класса через обявление класса
class FirstClass {
  constructor (name,eyes) {
    this.name = name; // this - обращение  к текущему объекту
    this.eyes = eyes; 
  }
  getName() {
    return (`The name of the anilam is ${this.name}.`);
  }
}

class Mammals extends FirstClass {
  //overrides constructor
  constructor(name, eyes) {
      super(name, eyes)
      this.skin = skin

  }
}
 //================================
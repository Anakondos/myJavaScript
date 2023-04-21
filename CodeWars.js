

//This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

//My Solution

//   function timeConvert(num) { 

//     let hh = "00";
//     let mm = "00";
      
//     if (num <= 0) { 
    
//           return "00:00";
//       } else if (num < 10) {
        
//          return `00:0${num}`
     
//       } else if (num >= 10 && num < 60) {
        
//         return `00:${num}`
        
//       } else if (num >= 60) {
        
//         hh = Math.floor(num/60);
        
//         mm = num % 60 <= 9 ? `0${num % 60}` : String(num % 60) ;
        
//         return hh > 9 ? `${hh}:${mm}` : `0${hh}:${mm}`
//       }
     
//     }

    // Optimisation

    // function timeConvert(num) {
    //     let hh = Math.floor(num / 60);
    //     let mm = num % 60;
    //     if (num < 0) {
    //       return '00:00'
    //     }
    //     if (hh < 1) {
    //       hh = '00';
    //     } else if (hh >= 1 && hh < 10) {
    //       hh = '0' + hh;
    //     }
    //     if (mm < 10) {
    //       mm = '0' + mm;
    //     }
    //    return hh + ':' + mm
    //   }

  //-----------------------------------------------
  //---------Days in the year------------
//1. Если год делится на 4 без остатка, перейдите на шаг 2. В противном случае перейдите к выполнению действия 5.
// 2. Если год делится на 100 без остатка, перейдите на шаг 3. В противном случае перейдите к выполнению действия 4.
// 3. Если год делится на 400 без остатка, перейдите на шаг 4. В противном случае перейдите к выполнению действия 5.
// 4. Год високосный (366 дней).
// 5. Год не високосный год (365 дней).

// function yearDays(year){

//  year < 0 ? year * -1 : year;

// console.log(year % 4);
// console.log(year % 400);
// console.log(year % 100);

// if (year % 100 == 0) {
    
//     return year % 400 == 0 ? `${year} has 366 days` : `${year} has 365 days`;

// } else if (year % 4) {

//     return `${year} has 365 days`;
// } else {
//     return `${year} has 366 days`;
// }
// }

// function yearDays(year){
   
//     return (year % 100 == 0) ? year % 400 == 0 ? `${year} has 366 days` : `${year} has 365 days`: (year % 4) ? `${year} has 365 days` : `${year} has 366 days`;
// }

// console.log(yearDays(-64));

//---------revers number ----------

// const reversNum = (n) => {Math.sign(n) * parseInt(String(n).split('').reverse().join(''))};


// function reversNum(n){
//         return Math.sign(n) * parseInt(String(n).split('').reverse().join(''))}

// console.log(reversNum(-120));
//-----------------------------------------------------------
// function calculator(a,b,sign){

// let result = 0;  
// if (typeof a != 'number' || typeof b != 'number') {
//   return "unknown value";
// }
// if(sign.match(/\*\-\/\+/)) {
 
// return "unknown value";

// } else if (sign == "+")  {
//   console.log(a + b);  
//   return result = a + b;
// } else if (sign == "-") {
//   console.log(a - b);  
//   return a - b;
// } else if (sign == "/") {
//   console.log(a / b);   
//   return a / b;
// } else if (sign == "*") {
//   console.log(a * b);   
//   return a * b;
// } else {
//   return "unknown value";
// }

// }

//   console.log(calculator(1,2, "/"));

//=========================================================
  // let n = 5;
  
  // console.log(x = typeof n != 'number');

  // function outed(meet, boss){
  //   meet[boss] *= 2;
  //   let avgRating = (Object.values(meet).reduce((sum,el) => sum + el)) / (Object.values(meet).length);
  //   return (avgRating <= 5) ? 'Get Out Now!' : 'Nice Work Champ!';
  // }

  //=======================================================

//   function isSortedAndHow(array) {
//     let currentArr = array.join();
    
//     const isAscending = (array) => { 
//       console.log("currentArr in isAscending" + currentArr); //5,3
//       return (currentArr == array.sort((a,b) => a - b).join());
//       }


//       // console.log(array.sort((a,b) => a - b).join()); //3,5
// //-----------------------------------------------------
     
//       const isDescending = (array) => {
//         console.log("currentArr in isDescending" + currentArr);
//         return (currentArr == array.sort((a,b) => b - a).join());
//       }
     
//      return isAscending(array) ? "yes, ascending" : isDescending(array) ? "yes, descending" : "no";
  
//   }

//   const array = [6,3];
//   console.log(isSortedAndHow(array));


  // let newArr = array.join() == array.sort((a,b) => a - b).join();

  // console.log(newArr);

//============================

let s = 'abamdkoghbisjaodobe'

let target = 'adb'

//abamdkoghb
//amdkoghb
//aodobe
//  const arr = [];

//  let idx = s.indexOf(target[0]);

//  while(idx != -1) {
//     let idx2 = s.indexOf(target[1], idx + 1)
//     while (idx2 != -1) {
//         let idx3 = s.indexOf(target[2], idx2 + 1);

//        if(idx3 != -1) {
//           arr.push(s.substring(idx, idx3 + 1))
//         }
//         break;
//     }
//       idx = s.indexOf(target[0], idx + 1);
//  }

//  console.log(arr.sort((a,b) => a.length - b.length)[0]);
 //=========================================================
/*
Definition:- A word is an anagram of another word if they are using the same letters with the same quantity, but arranged differently. 
PROBLEM:- write a function that checks if two provided strings are anagrams of each other; letter casing shouldn’t matter. 
Also, consider only characters, not spaces or punctuation. For Example: anagram('fried','fired') 
// true; anagram('gainly', 'lying') //true; anagram('listen', 'bye')  // false;
*/
 function anagram(word1, word2) {
    let arr1 = word1.split('').sort().join();
    let arr2 = word2.split('').sort().join();

  return arr1 == arr2;
 }

 console.log(anagram('fried','fired'));


 

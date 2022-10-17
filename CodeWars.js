

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

const reversNum = (n) => {Math.sign(n) * parseInt(String(n).split('').reverse().join(''))};


// function reversNum(n){
//         return Math.sign(n) * parseInt(String(n).split('').reverse().join(''))}

console.log(reversNum(-120));
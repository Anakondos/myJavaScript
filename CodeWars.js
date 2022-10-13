

//This kata requires you to convert minutes (int) to hours and minutes in the format hh:mm (string).

//My Solution

  function timeConvert(num) { 

    let hh = "00";
    let mm = "00";
      
    if (num <= 0) { 
    
          return "00:00";
      } else if (num < 10) {
        
         return `00:0${num}`
     
      } else if (num >= 10 && num < 60) {
        
        return `00:${num}`
        
      } else if (num >= 60) {
        
        hh = Math.floor(num/60);
        
        mm = num % 60 <= 9 ? `0${num % 60}` : String(num % 60) ;
        
        return hh > 9 ? `${hh}:${mm}` : `0${hh}:${mm}`
      }
     
    }

    // Optimisation

    function timeConvert(num) {
        let hh = Math.floor(num / 60);
        let mm = num % 60;
        if (num < 0) {
          return '00:00'
        }
        if (hh < 1) {
          hh = '00';
        } else if (hh >= 1 && hh < 10) {
          hh = '0' + hh;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
       return hh + ':' + mm
      }

      
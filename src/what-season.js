const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

    if (!date) { return 'Unable to determine the time of year!'; }
 
    try { date.getTime(); } 
      catch(e) { throw new Error(e); }

    let month = date.getMonth();
    
    if(month == 0 ||month == 11 || month == 1){
      return "winter"
    }
    
    if(month < 5 && month > 1){
      return "spring"
    }
    
    if(month < 8 && month > 4){
      return "summer"
    }
    
    if(month < 11 && month > 7){
      return "fall"
    }  
  
};




const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  this.repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  this.separator = options.separator !== undefined ? options.separator : '+';
  this.addition = options.addition !== undefined ? options.addition : '';
  this.additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  this.additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '+';
    
  let newStr='';
    
    for (let i = 0; i < this.repeatTimes; i++) {
        newStr = newStr.concat(str);
        for (let j = 0; j < this.additionRepeatTimes; j++) {
            newStr = newStr.concat(this.addition);      
            j < (this.additionRepeatTimes-1) ? newStr = newStr.concat(additionSeparator) : 0;
        }
        i < (this.repeatTimes - 1) ? newStr = newStr.concat(this.separator) : 0;
    }

    return newStr;
};
  
const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for(var x = 0; x < matrix.length; x++){
    for(var j = 0; j < matrix[x].length; j++) {
      if(matrix[x][j]=="^^"){
        count++
      };
    }
  }
  return count;
};

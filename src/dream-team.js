const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  }

  let dreamTeam = "";
  members.map(name => {
    if(typeof name == 'string'){
      dreamTeam = dreamTeam.concat(name.trim().substr(0,1))
    }
  })

  if(dreamTeam===""){
    return false;
  }
  return dreamTeam.toUpperCase().split('').sort().join(''); 
};

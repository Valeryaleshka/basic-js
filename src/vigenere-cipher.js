const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direction = true) {
    (this.direction = direction) ? 'direct' : 'reverse'
  }

  encrypt(message, key) { 
      if (message === undefined || key === undefined) {
      throw new Error();
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charAt(i).match(/^[A-Z]$/)) {
        let letterNumber = ((message.charCodeAt(i)) + key.charCodeAt(j % key.length)-130) % 26;
        let letter = alphabet.charAt(letterNumber);
        result = result.concat(letter);
        j++;
      } else {
        result = result.concat(message.charAt(i));
        
      }
    }
  
    return this.direction === 'reverse'? result.split('').reverse().join(''): result;
  }


  decrypt(message, key) {    
    if (message === undefined || key === undefined) {
      throw new Error();
    };

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (message.charAt(i).match(/^[A-Z]$/)) {
        let letterNumber = (message.charCodeAt(i) - key.charCodeAt(j % key.length)+104) % 26;
        let letter = alphabet.charAt(letterNumber);
        result = result.concat(letter);
        j++;
      } else {
        result = result.concat(message.charAt(i));
        
      }
    }
    return this.direction === 'reverse'? result.split('').reverse().join(''): result;
  }
}

module.exports = VigenereCipheringMachine;

const CustomError = require("../extensions/custom-error");
debugger;
const chainMaker = {
  
  chain : [],

  getLength() {
   return this.chain.length;
  },

  addLink(value) {    
    (value === undefined) ? this.chain.push(`'(  )'`) : this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if(typeof position === 'number'  &&  position > 0 && position < this.chain.length){
    this.chain.splice((position - 1), 1);
    return this;
    } else {
        this.chain = [];
        throw new Error;
      }    
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let arr = this.chain.join('~~');
    this.chain = [];
    return arr;
  }
};

module.exports = chainMaker;
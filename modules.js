//console.log(arguments);
//console.log(require("module").wrapper);

//module.exports
const Calulator = require("./test-module-1");
const calc1 = new Calulator();
console.log(calc1.add(1, 2));

//exports
//const calc2 = require("./test-module-2");
const { add, multiply, divide } = require("./test-module-2");

console.log(add(1, 2));

//caching
require("./test-module-3")();

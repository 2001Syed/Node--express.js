const _ = require('lodash');

const items = [1, [2,[3, [4]]]];
const newItem = _.flattenDeep(items); // flattendeep() is used to completely flatten nested arrays
console.log(newItem);
console.log("helloworld");
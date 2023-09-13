// npm -Global command, comes with node.
// npm --version

// local dependancy - use it only in this partcular project
// npm -i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// Package.json - manifest file (Stores important info about project/package)
// manual approach (create package.json in a root, create properties etc. )
// npm init (step-by-step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2,[3, [4]]]];
const newItem = _.flattenDeep(items); // flattendeep() is used to completely flatten nested arrays
console.log(newItem);

// installing nodemon online free.
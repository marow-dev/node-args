var args = require('../index.js');

var allArgs = args.all();
console.log("Arguments:");
allArgs.forEach(function (arg) {
    console.log(arg + ' = ' + args.get(arg));
});

console.log("\nOptions:");
console.log(args.getOptions());

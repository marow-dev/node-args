var args = require('../index.js');

console.log(args.all());

var allArgs = args.all();
allArgs.forEach(function (arg) {
    console.log(arg + ' = ' + args.get(arg));
});

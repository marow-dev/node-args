/*
 * Run command : nodejs examples.js -x=10 -y=20 z=30
 */
var args = require('../index.js')
            .setDefault({v: 40});

/*
 * Displays all arguments
 */
console.log(args.all());    // [ 'x', 'y', 'z' ]

/*
 * Displays value of specified argument
 */
console.log(args.get('x'));             // 10
console.log(args.get('z'));             // 30
console.log(args.get('v'));             // 40
console.log(args.get('not_defined'));   // undefined

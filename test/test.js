// Fill process.argv with test values
process.argv[2] = '-x=10';
process.argv[3] = '-y';
process.argv[4] = 'z=10';

var args = require('../index.js');
var tap = require('tap');

tap.equal(args.get('x'), '10');
tap.equal(args.get('y'), true);
tap.equal(args.get('z'), '10');
tap.equal(args.get('v'), undefined);

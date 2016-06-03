# node-args
Light-weight command line arguments parser. No dependencies required.
## Usage
Module return object with methods:
### get
Reads the specified argument value.
Example:
Run with command: node example.js -x=10
var args = require('../index.js');
args.get('x'); // Reads value of argument x
### all
Return all arguments passed to script
Example:
Run with command: node example.js -x=10 -y=10
var args = require('../index.js');
args.all(); // Returns [ 'x', 'y' ]
### setDefault
Sets default values for parameters
Example:
Run with command: node example.js -x=10 -y=10
var args = require('../index.js').setDefault({z: 10});
args.get('z'); // Returns: 10

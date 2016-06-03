# node-args
Light-weight command line arguments parser. No dependencies required.

Available as npm module 'margs'
## Usage
Module return object with methods:
### get
Reads the specified argument value.

Example:
```javascript
var args = require('../index.js'); // node example.js -x=10
args.get('x'); // Reads value of argument x
```
### all
Return all arguments passed to script
Example:
```javascript
var args = require('../index.js'); // node example.js -x=10 -y=10
args.all(); // Returns [ 'x', 'y' ]
```
### setDefault
Sets default values for parameters
Example:
```javascript
var args = require('../index.js').setDefault({z: 10}); // node example.js -x=10 -y=10
args.get('z'); // Returns: 10
```

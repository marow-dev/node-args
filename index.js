var args = process.argv.slice(2);

var argv = (function () {
    var list = {},
        listDefault = {};

    function add(key, value) {
        list[key] = value;
    }

    function get(key) {
        if (list[key]) {
            return list[key];
        } else if (listDefault[key]) {
            return listDefault[key];
        } else {
            return undefined;
        }
    }

    function setDefault(values) {
        var i;
        if ((!!values) && (values.constructor === Object)) {
            for (i in values) {
                if (values.hasOwnProperty(i)) {
                    listDefault[i] = values[i];
                }
            }
        }
        return this;
    }

    function all() {
        var i;
        keys = [];
        for (i in list) {
            if (list.hasOwnProperty(i)) {
                keys.push(i);
            }
        }
        return keys;
    }

    return {
        add: add,
        get: get,
        all: all,
        setDefault: setDefault
    };
}());


function parseArg(arg) {
    if (arg.charAt(0) === '-') {
        if (arg.charAt(1) === '-') {
            arg = arg.slice(2);
        } else {
            arg = arg.slice(1);
        }
    }

    arg = arg.split('=');
    if (arg.length === 1) {
        argv.add(arg[0], true);
    } else {
        argv.add(arg[0], arg[1]);
    }
}

args.forEach(parseArg);

module.exports = argv;

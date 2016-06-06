'use strict';
var args = process.argv.slice(2);

var argvalues = (function () {
    var list = {},
        listDefault = {},
        options = [];

    function add(key, val) {
        list[key] = val;
    }

    function addOption(val) {
        options.push(val);
    }

    function getOptions() {
        return options;
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
        var i,
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
        addOption: addOption,
        getOptions: getOptions,
        get: get,
        all: all,
        setDefault: setDefault
    };
}());


(function () {
    var prevArg = false,
        isArg = false;
    function parseArg(arg) {
        isArg = false;
        if (arg.charAt(0) === '-') {
            arg = arg.slice(arg.charAt(1) === '-' ? 2 : 1);
            isArg = true;
        } else if (prevArg.length) {
            argvalues.add(prevArg, arg);
            prevArg = '';
            return;
        }

        arg = arg.split('=');
        if (arg.length > 1) {
            argvalues.add(arg[0], arg[1]);
            prevArg = '';
        } else {
            if (isArg) {
                argvalues.add(arg[0], true);
                prevArg = arg[0];
            } else {
                argvalues.addOption(arg[0]);
            }
        }
    }
    args.forEach(parseArg);
} ());

module.exports = argvalues;

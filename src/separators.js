'use strict';

function thousands_separators(num) {
    var stringNumber = toStringNumber(num);
    var result = getResult(stringNumber);

    return result;
}

function toStringNumber(num) {
    var stringNumber = '';

    stringNumber = (num || 0).toString();

    return stringNumber;
}

function splitNumber(stringNumber) {
    var num = stringNumber.split('.');

    return num;
}

function isFloat(stringNumber) {
    for (var i = 0; i < stringNumber.length; i++) {

        if (stringNumber.indexOf(".") != -1) {

            return true;
        }
        else {
            return false;
        }
    }
}

function getResult(stringNumber) {
    var num = splitNumber(stringNumber);
    var intNumber = num[0];
    var floatNumber = num[1];
    var count = 0;
    var string = '';
    var result = '';

    for (var i = intNumber.length - 1; i >= 0; i--) {

        count++;
        string = intNumber.charAt(i) + string;
        if (!(count % 3) && i != 0) {
            string = ',' + string;
        }
    }
    if (isFloat(stringNumber)) {
        result = string + '.' + floatNumber;
    }
    else {
        result = string;
    }

    return result;
}

module.exports = thousands_separators;

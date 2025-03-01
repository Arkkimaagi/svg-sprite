'use strict';

/**
 * Checks if value is a callable function.
 *
 * @param {any} value    The value to check.
 * @returns {boolean}    Returns true if value is correctly classified, else false.
 */
function isFunction(value) {
    return Boolean(value && typeof value === 'function');
}

/**
 * Checks if value is the language type of Object (e.g. objects, regexes, new Number(0),
 * and new String('')). Excluding arrays (new Array())
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns true if value is an object, else false.
 */
function isObject(value) {
    return typeof value === 'object' && value !== null;
}

/**
 * Checks if value is an Object
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns true if value is an plain object, else false.
 */
function isPlainObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * Checks if value is a String
 *
 * @param {any} value The value to check.
 * @returns {boolean} Returns true if value is a String, else false.
 */
function isString(value) {
    return Object.prototype.toString.call(value) === '[object String]';
}

module.exports = {
    isFunction,
    isObject,
    isPlainObject,
    isString
};

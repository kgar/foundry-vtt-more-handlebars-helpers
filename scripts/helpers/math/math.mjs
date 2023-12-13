import isNumber from '../is-number/isNumber.mjs';

/**
 * Return the magnitude of `a`.
 *
 * @param {Number} `a`
 * @return {Number}
 * @api public
 */
export function abs(num) {
  if (!isNumber(num)) {
    return num;
  }
  return Math.abs(num);
}

/**
 * Return the sum of `a` plus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */
export function add(a, b) {
  if (isNumber(a) && isNumber(b)) {
    return Number(a) + Number(b);
  }
  if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  return '';
}

/**
 * Returns the average of all numbers in the given array.
 *
 * ```handlebars
 * {{avg 1 2 3 4}}
 * <!-- results in: '2.5' -->
 * ```
 *
 * @param arguments {arguments array} one or more arguments
 * @return {Number}
 * @api public
 */

export function avg() {
  var args = [].concat.apply([], arguments);
  // remove handlebars options object
  args.pop();
  return sum(args) / args.length;
}

/**
 * Get the `Math.ceil()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

export function ceil(num) {
  if (!isNumber(num)) {
    return num;
  }
  return Math.ceil(Number(num));
}

/**
 * Divide `a` by `b`
 *
 * @param {Number} `a` numerator
 * @param {Number} `b` denominator
 * @api public
 */

export function divide(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return a;
  }
  return Number(a) / Number(b);
}

/**
 * Get the `Math.floor()` of the given value.
 *
 * @param {Number} `value`
 * @return {Number}
 * @api public
 */

export function floor(num) {
  if (!isNumber(num)) {
    return num;
  }
  return Math.floor(Number(num));
}

/**
 * Get the remainder of a division operation.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

export function modulo(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return a;
  }
  return Number(a) % Number(b);
}

/**
 * Return the product of `a` times `b`.
 *
 * @param {Number} `a` factor
 * @param {Number} `b` multiplier
 * @return {Number}
 * @api public
 */

export function multiply(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return a;
  }
  return Number(a) * Number(b);
}

/**
 * Generate a random number between two values
 *
 * @param {Number} `min`
 * @param {Number} `max`
 * @return {String}
 * @api public
 */

export function random(min, max) {
  if (!isNumber(min) || !isNumber(max)) {
    return '';
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

/**
 * Round the given number.
 *
 * @param {Number} `number`
 * @return {Number}
 * @api public
 */

export function round(num) {
  if (!isNumber(num)) {
    return num;
  }
  return Math.round(num);
}

/**
 * Return the product of `a` minus `b`.
 *
 * @param {Number} `a`
 * @param {Number} `b`
 * @return {Number}
 * @api public
 */

export function subtract(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    return a;
  }
  return Number(a) - Number(b);
}

/**
 * Returns the sum of all numbers in the given array.
 *
 * ```handlebars
 * {{sum 1 2 3 4 5}}
 * <!-- results in: '15' -->
 * ```
 * @param {Array} `array` Array of numbers to add up.
 * @return {Number}
 * @api public
 */

export function sum() {
  var args = [].concat.apply([], arguments);
  var len = args.length;
  var sum = 0;

  while (len--) {
    if (isNumber(args[len])) {
      sum += Number(args[len]);
    }
  }
  return sum;
}

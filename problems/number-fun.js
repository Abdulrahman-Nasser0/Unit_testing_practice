function returnsThree() {
  return 3;
}

function reciprocal(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Input must be a number');
  }
  if (num === 0) {
    throw new Error('Cannot calculate reciprocal of zero');
  }
  return 1 / num;
}

module.exports = {
  returnsThree,
  reciprocal
};
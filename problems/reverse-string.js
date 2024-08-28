module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw new Error('invalid input');
  }
  return string.split('').reverse().join('');
};
const add = function(x,y) {
	return x + y;
};

const subtract = function(x,y) {
	return x - y;
};

const sum = function(arr) {
  if (arr === undefined || arr.length == 0) {
    return 0;
  }
	return arr.reduce((total, curr) => total + curr);
};

const multiply = function(arr) {
  if (arr === undefined || arr.length == 0) {
    return 0;
  }
  return arr.reduce((total, curr) => { return total *= curr;}, 1);
};

const power = function(x, p) {
  let total = 1;
  for (let i = 0; i < p; i++) {
    total *= x;
  }
  return total;
};

const factorial = function(x) {
	let total = 1;
  for (let i = 1; i <= x; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

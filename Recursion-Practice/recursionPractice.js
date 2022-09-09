let range = 0;
function sumRange(n) {
  if (n <= 0) {
    return range;
  }
  range += n;
  console.log(range);
  sumRange(n - 1)
}

let exponentSave = 0, i = 0, value = 0;

function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}

let factorialSum = 0;
function factorial(n) {
  if (n == 1) {
    return factorialSum;
  } else if (factorialSum == 0) {
    factorialSum = (n * (n - 1));
    return factorial(n - 1);
  }
  factorialSum = factorialSum * (n - 1);
  return factorial(n - 1);
}

//going to come back to this since this section ("a bit of computer science") of the curriculum was added after i had started TOP
//todays date 9/8/22

//sumRange(3), console.log(power(2, 4)), console.log(factorial(5));
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

  if (i == 0) {
    exponentSave = exponent;
    value = 1;
    i++
  } else if (i == exponentSave) {
    value = base ** i;
    return value, console.log(value);
  }

  value = base ** i;
  i++;
  console.log(value);
  power(base, i);
}
//sumRange(3), power(2, 4);
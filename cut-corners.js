/*
Create a function for each rounding math functions:

round (like Math.round)
ceil (like Math.ceil)
floor (like Math.floor)
trunc (like Math.trunc)

Some restrictions apply:

You may not use strings conversion to do it
No bitwise operator
*/


/*
If the fractional portion of the argument is greater than 0.5, the argument is rounded to the integer with the next higher absolute value. 
If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. 
If the fractional portion is exactly 0.5, the argument is rounded to the next integer in the direction of +∞. 
Note that this differs from many languages' round() functions, which often round this case to the next integer away from zero, 
instead giving a different result in the case of negative numbers with a fractional part of exactly 0.5.
*/

const round = (value) => {
  let toRound = 0;
  toRound = value + 0.5;
  return parseInt(toRound)
}

const ceil = (value) => {
  let toCeil = parseInt(value);
  if(toCeil < value) {
    toCeil += 1;
  }
  return toCeil
}

const floor = (value) => {
  let toCeil = parseInt(value);
  if(toCeil > value) {
    toCeil -= 1;
  }
  return toCeil
}

const trunc = (value) => {
  return parseInt(value)
}

console.log(trunc(13.37)) //Expected output: 13
console.log(trunc(42.84)) //Expected output: 42
console.log(trunc(0.123)) //Expected output: 0
console.log(trunc(-0.123)) //Expected output: -0
console.log(trunc(-1.123)) //Expected output: -1
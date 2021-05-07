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
  let answer = 0;
  let toRound = value % 1;
  let negativeCheck = false;
  if (value < 0) {
    value= -value
    negativeCheck = true
  }
  if (toRound > 0.5) {
    answer = value + 1 - toRound
  } else {
    answer = value - toRound
  }
  if (negativeCheck === true) {
    answer = -answer
  }
  return answer
}

const ceil = (value) => {
  let answer = 0;
  let toCeil = value % 1;
  if (value > 0 && toCeil != 0) {
    answer = value + 1 - toCeil
  } else {
    answer = value - toCeil
  }
  return answer
}

const floor = (value) => {
  let answer = 0;
  let toFloor = value % 1;
  if (toFloor === 0) {
    answer = value 
  } else if (value > 0 && toFloor != 0) {
    answer = value + 1 - toFloor
  } else {
    answer = value - (1 + toFloor)
  }
  return answer
}

const trunc = (value) => {
  let answer = 0;
  let toTrunc = value % 1;
  return answer = value - toTrunc
}

console.log(round(-3)) //Expected output: 13
console.log(trunc(-0.123)) //Expected output: 43
console.log(trunc(42.84)) //Expected output: 0

/*
Create the sign function that takes one number argument and return 1 if the number is positive, 
-1 if the number is negative and 0 if the number is exactly 0 You must not just use Math.sign, make your own.

Create the sameSign function that takes 2 numbers as arguments and return true if they both have the same sign, or false otherwise.
*/

const sign = (a) => {
  if (a > 0) { return 1 }
  else if (a < 0) { return -1 }
  else if (a === 0) { return 0 }
  //return a > 0 ? 1 : a < 0 ? -1 : a === 0 ? 0
}

const sameSign = (a, b) => {
  if (a > 0 && b > 0 || a < 0 && b < 0 || a === 0 && b === 0) { return true }
  else return false
}

//console.log(sameSign(-0, -0))

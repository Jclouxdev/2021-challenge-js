/*
Create a isPositive function that takes a number as parameter and return true if the given number is stricly positive, or false otherwise

Create the abs function that takes one number argument and returns its absolute value. You are not allowed to use Math.abs, make your own.
*/

const isPositive = (n) => {
  if(n > 0) {
    return true;
  }
  else return false;
}

const abs = (m) => {
  if(m > 0) {
    return m
  }
  else if (m < 0) {
    return m * (-1)
  }
  else if (m == 0) {
    return 0
  }
}
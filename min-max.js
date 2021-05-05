/*
Create the max function that takes 2 number as arguments and returns the greatest

You must not just use Math.max, make your own.

Create the min function that takes 2 number as arguments and returns the lowest

You must not just use Math.min, make your own.
*/

const max = (a, b) => {
  if(a - b > 0){
    return a
  } else return b
}

const min = (a, b) => {
  if(a - b < 0){
    return a
  } else return b
}

//console.log(min(4,8))
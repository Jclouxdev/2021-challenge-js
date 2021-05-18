/*
Create three functions :

adder that receives an array and adds its elements.

sumOrMul that receives an array and adds or multiplies its elements depending on whether the element is an odd or an even number.

funcExec that receives an array of functions and executes them.

All functions may or may not receive an extra argument that should be the initial value for the functions execution.

Example:

sumOrMul([1, 2, 3, 4], 5)
  // -> (((5 + 1) * 2) + 3) * 4
  // -> 60
*/

//adder that receives an array and adds its elements.
const adder = (el, init=0) => {
  return el.reduce((accumulateur, e) => {
    return accumulateur + e
  }, init)
}

//sumOrMul that receives an array and adds or multiplies its elements depending on 
//whether the element is an odd or an even number.
const sumOrMul = (el, init=0) => {
  return el.reduce((accumulateur, e) => {
    let answer = 0
    if(e % 2 === 0){
      answer = accumulateur * e
    } else {
      answer = accumulateur + e
    }
    return answer
  }, init)
}

//funcExec that receives an array of functions and executes them.
const funcExec = (el, init) =>
  el.reduce((accumulateur, e) => e(accumulateur), init)

//TEST//
console.log('----Adder----')
console.log(adder([1, 2, 3, 4], 10))
console.log('----sumOrMul----')
console.log(sumOrMul([29, 23, 3, 2, 25]), '->', 135)
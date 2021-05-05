/*
Create 3 functions:

a first function that takes an array or a string and return the first element.

a last function that takes an array or a string and return the last element.

a kiss function that returns an array of 2 elements the last and the first element, in that order
*/

const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  'Fromage'
]

const first = (n) => n[0]
const last = (m) => m[m.length - 1]
const kiss = (e) => [e[e.length - 1] ,e[0]]

//console.log(kiss(arr))

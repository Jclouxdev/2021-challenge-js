/*
Create a repeat function that takes a string and a number as parameters and return the repeated string by the 
given number Like the method developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat 
Of course you may not use the method directly
*/

var str = ''
const repeat = (text, size) => {
  for (let i = 0; i < size; i++) {
    str = str + text
  } return str
}

//console.log(repeat('a', 3))
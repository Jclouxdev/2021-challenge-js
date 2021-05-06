/*
Create 3 functions:

indexOf that returns the index of the first occurence of a value
lastIndexOf that returns the index of the last occurence of a value
includes that returns true if the value was found in the array
If a value is not found, the returned index is -1

functions should have an array element as first argument, both indexOf and lastIndexOf take an additional 
fromIndex argument that allows you to begin searching from a specific index.
*/

const indexOf = (el, index) => {
  for(let i = 0; i < el.length; i++) {
    if(el[i] === index) {
      return i
    }
  }
}

const lastIndexOf = (el, index) => {
  for(let i = el.length; i > 0; i--) {
    if(el[i] === index) {
      return i
    }
  }
}

const includes = (el, index) => {
  let answer = -1
  for(let i = 0; i < el.length; i++) {
    if(el[i] === index) {
      answer = true
    }
  }
  return answer
}

console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))

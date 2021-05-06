/*
Create 3 functions:

indexOf that returns the index of the first occurence of a value
lastIndexOf that returns the index of the last occurence of a value
includes that returns true if the value was found in the array
If a value is not found, the returned index is -1

functions should have an array element as first argument, both indexOf and lastIndexOf take an additional 
fromIndex argument that allows you to begin searching from a specific index.
*/

const indexOf = (el, index, fromIndex) => {
  for(let i = 0 + fromIndex; i < el.length; i++) {
    if(el[i] === index) {
      return i
    }
  }
}

const lastIndexOf = (el, index, fromIndex) => {
  for(let i = el.length + fromIndex; i > 0; i--) {
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

console.log(indexOf(["t", 0, 0, "t"], "t", 1))

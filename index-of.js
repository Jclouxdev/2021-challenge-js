/*
Create 3 functions:

indexOf that returns the index of the first occurence of a value
lastIndexOf that returns the index of the last occurence of a value
includes that returns true if the value was found in the array
If a value is not found, the returned index is -1

functions should have an array element as first argument, both indexOf and lastIndexOf take an additional 
fromIndex argument that allows you to begin searching from a specific index.
*/

const indexOf = (el) => {
  let arr = ["Rouge", "Jaune", "Noir", "Bleu", "Vert", "Gris", "Marron", "Gris", "Vert", "Rouge"];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === el) {
      return i+1
    }
  }
}

const lastIndexOf = (el) => {
  let arr = ["Rouge", "Jaune", "Noir", "Bleu", "Vert", "Gris", "Marron", "Gris", "Vert", "Rouge"];
  for(let i = arr.length; i > 0; i--) {
    if(arr[i] === el) {
      return i+1
    }
  }
}

const includes = (el) => {
  let arr = ["Rouge", "Jaune", "Noir", "Bleu", "Vert", "Gris", "Marron", "Gris", "Vert", "Rouge"];
  let answer = -1
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === el) {
      answer = true
    }
  }
  return answer
}

console.log(includes("Vert"))

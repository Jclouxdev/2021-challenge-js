/*
Create the chunk function that returns an array of elements split into groups the length of the given size.

If array can't be split evenly, the final chunk will be the remaining elements.

== Research : ==
The array.slice method can extract a slice from the 
beginning, middle, or end of an array for whatever 
purposes you require, without changing the 
original array.
*/

const chunk = (arr, size) => {
  let answer = [];
  for(let i = 0; i<arr.length; i++) {
    answer.push(arr.slice(0, size))
    arr = arr.slice(size)
    if(arr.length<size && arr.length != 0) {
      return answer.push(arr)
    }
  }
  return answer
}

console.log(chunk(['el1', 'el2', 'el3', 'el4'], 3)) //EO : 
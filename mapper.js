//Instructions
/* <!> Code provided <!>
all code provided will be added to your solution and doesn't need to be submited.

Array.prototype.map = undefined
Array.prototype.flatMap = undefined
Array.prototype.flat = undefined */

//Create a map function that takes an array as first argument, a function as second, 
//and that works like the method .map
const map = (array, myFunction) => {
  let answer = []
  let i = 0
  while(i < array.length){
    let stock = 0
    stock = myFunction(array[i], i, array)
    answer.push(stock)
    i++
  }
  return answer
}

//Create a flatMap function that takes an array as first argument, 
//a function as second, and that works like the method .flatMap
const flatMap = (array, myFunction) => {
  let answer = []
  let mapResult = map(array, myFunction)
  for(let map of mapResult) {
    if(Array.isArray(map)) {
      for(let el of map) {
        answer.push(el)
      }
    } else {
      answer.push(map)
    }
  }
  return answer
}

//Oskur je sais pas comment tester donc je croise les doigts//
const testFunction = (x) => x * 2
const testArray = [1,2,3,4,5]
console.log('----Map----')
console.log(map(testArray, testFunction))
console.log('----flatMap----')
console.log(flatMap(testArray, testFunction))
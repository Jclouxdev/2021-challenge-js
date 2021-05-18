/*
Create a forEach function that takes an array as first argument, a function as second, 
and that works like the method .forEach

<!> Code provided <!>
all code provided will be added to your solution and doesn't need to be submited.

Array.prototype.forEach = undefined
*/

const forEach = (array, myFunction) => {
  let answer = []
  for (let i = 0; i < array.length; i++){
    answer.push(myFunction(array[i], i, array))
  }
  return answer
}

//TEST//
const testFunction = (x) => x * 2
const testArray = [1,2,3,4,5]
console.log(forEach(testArray, testFunction))

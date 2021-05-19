/*
Create three functions that receive an array and a function each:
<!> The use of [].every and [].some is forbidden for this exercise. <!>
*/
//every that returns true if every element of the array respects the condition of 
//the received function and false otherwise.
const every = (array, myFunction) => {
  for(let i = 0; i < array.length; i++) {
    if(!myFunction(array[i], i, array)){
      return false
    }
  }
  return true
}

//some that returns true if at least one element of the array respects the condition of 
//the received function and false otherwise.
const some = (array, myFunction) => {
  for(let i = 0; i < array.length; i++){
    if(myFunction(array[i], i, array)){
      return true
    }
  }
  return false
}

//none that returns true if none of the elements of the array respects the condition 
//of the received function and false otherwise.
const none = (array, myFunction) => {
  for(let i = 0; i < array.length; i++){
    if(myFunction(array[i], i, array)){
      return false
    }
  }
  return true
}

//TEST//
const testsTest = []
const tTest = (f) => testsTest.push(f)
const greaterEq10Test = (n) => n >= 10
const smallTest = [3, 6, 1, 7, 2]
const mixedTest = [23, 4, 10, 25, 6]
const bigTest = [43, 30, 16, 57, 10]
console.log('----every----')
console.log(every(smallTest, greaterEq10Test),'->', false)
console.log(every(mixedTest, greaterEq10Test),'->', false)
console.log(every(bigTest, greaterEq10Test),'->', true)
console.log('----some----')
console.log(some(smallTest, greaterEq10Test),'->', false)
console.log(some(mixedTest, greaterEq10Test),'->', true)
console.log(some(bigTest, greaterEq10Test),'->', true)
console.log('----none----')
console.log(none(smallTest, greaterEq10Test),'->', true)
console.log(none(mixedTest, greaterEq10Test),'->', false)
console.log(none(bigTest, greaterEq10Test),'->', false)
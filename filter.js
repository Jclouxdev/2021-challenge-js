// <!> Code provided : Array.prototype.filter = undefined <!>
//Create a filter function that takes an array as first argument, a function as second, 
//and that works like the method [].filter
const filter = (array, myFunction) => {
  let answer = []
  for(let i = 0; i < array.length; i++){
      if(myFunction(array[i], i, array)){
          answer.push(array[i])
      }
  }
  return answer
}

//Create a reject function that takes an array as first argument, a function as second, 
//and that works like the reject function from lodash.
const reject = (array, myFunction) => {
  let answer = []
  for(let i = 0; i < array.length; i++){
      if(!myFunction(array[i], i, array)){
          answer.push(array[i])
      }
  }
  return answer
}

//Create a partition function that takes an array as first argument, a function as second, 
//and that works like the partition function from lodash.
const partition = (array, myFunction) => {
  let isTrue = []
  let isFalse = []
  for(let i = 0; i < array.length; i++){
    if(myFunction(array[i], i, array)){
      isTrue.push(array[i])
    } else if(!myFunction(array[i], i, array)){
      isFalse.push(array[i])
    }
  }
  return [isTrue, isFalse]
}

//TEST//
const testFunction = (x) => x * 2
const testArray = [1,2,3,4,5]
console.log('----Ca casse ou pas ?----')
console.log(filter(testArray, testFunction))
console.log(reject(testArray, testFunction))
console.log(partition(testArray, testFunction))
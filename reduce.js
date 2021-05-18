//Franchement c'est plus marrant de refaire des fonctions
//Create three functions: (Du coup c'est quatres en fait mais np)

//fold that receives an array, a function and an accumulator, in this order, 
//and applies the function in the elements of the array starting on the left.
const fold = (array, myFunction, accumulateur = 0) => {
  for(let i = 0; i < array.length; i++){
    accumulateur = (myFunction(accumulateur, array[i]))
  }
  return accumulateur
}

//foldRight that receives an array, a function and an accumulator, in this order, 
//and applies the function in the elements of the array starting on the right.
const foldRight = (array, myFunction, accumulateur = 0 ) => {
  for(let i = array.length - 1; i >= 0; i--){
    accumulateur = (myFunction(accumulateur, array[i]))
  }
  return accumulateur
}
//reduce that works just like the method [].reduce when you don't specify an accumulator. 
//The arguments should be an array and a function. The starting value of your accumulator 
//must be the first value of the array. If your array is less than 1 argument you should 
//throw an error.
const reduce = (array, myFunction, accumulateur) => {
  if(array.length === null) {
    throw 'Array isn\'t valid'
  }
  accumulateur = typeof array[0] === 'number' ? 0 : '';
  for(let i = 0; i < array.length; i++){
    accumulateur = (myFunction(accumulateur, array[i]))
  }
  return accumulateur
}

//reduceRight like reduce, from the last value to the first
const reduceRight = (array, myFunction, accumulateur) => {
  if(array.length === null) {
    throw 'Array isn\'t valid'
  }
  accumulateur = typeof array[0] === 'number' ? 0 : '';
  for(let i = array.length - 1; i >= 0; i--){
    accumulateur = (myFunction(accumulateur, array[i]))
  }
  return accumulateur
}

//TEST// 
//Je commence à prendre plus de temps à faire des jolis tests qu'a faire des jolies fonctions
//Mais toujours debout, toujours la banane, rassurez vous.
let numTest1 = [3, 10, 26, 0]
let numTest2 = [4, 24, 10, 25]
let strTest1 = ['This ', 'is ', 'a ', 'simple ', 'example']
let strTest2 = 'The quick brown fox jumped over the lazy dog'
let objTest = [{ a: 12 }, { b: 6, c: { d: 2, e: 3 } }, { f: 'hello' }]
const adderTest = (a, b) => a + b
const ifOddTest = (a, b) => (b % 2 === 0 ? a + 2 : a * 2)
const concatenateTest = (a = '', b) => a.concat(b)
const mergerTest = (a, b) => ({ ...a, ...b })
console.log('----fold----')
console.log(fold(numTest1, adderTest, 0), '=', 39)
console.log('----foldRight----')
console.log(foldRight(numTest1, adderTest, 0), '=', 39)
console.log('----reduce----')
console.log(reduce(numTest1, adderTest),'=', 39)
console.log(reduce(numTest2, adderTest),'=', 63)
console.log('----reduceRight----')
console.log(reduceRight(numTest1, adderTest),'=', 39)
console.log(reduceRight(numTest2, adderTest),'=', 63)
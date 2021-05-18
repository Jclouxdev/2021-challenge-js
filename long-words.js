//Create three functions that take as argument an array each:

//longWords that returns true if every element of the array is a string of at least 5 characters.
const longWords = (array) => array.every((e) => e.length > 5)

//oneLongWord that returns true if at least one element of the array is a string of at least 10 characters.
const oneLongWord = (array) => array.some((e) => e.length > 10)

//noLongWords that returns true if there are no elements in the array that are a string with at least 7 characters
const noLongWords = (array) => array.every((e) => e.length < 7)

//TEST//
let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

console.log('----longWords----')
console.log(longWords(arr1))
console.log(longWords(arr2))
console.log(longWords(arr3))
console.log(longWords(arr4))
console.log('----oneLongWord----')
console.log(oneLongWord(arr1))
console.log(oneLongWord(arr2))
console.log(oneLongWord(arr3))
console.log(oneLongWord(arr4))
console.log('----noLongWords----')
console.log(noLongWords(arr1))
console.log(noLongWords(arr2))
console.log(noLongWords(arr3))
console.log(noLongWords(arr4))
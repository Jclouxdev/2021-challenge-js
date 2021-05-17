/*
Create a function filterShortStateName that takes an array of strings and that returns the ones with less than 7 characters.
Example: 'Iowa' only contains 4 characters
*/

const filterShortStateName = (el) => el.filter((e) => e.length < 7)

console.log(filterShortStateName([
  '12345678910',
  '1234',
  '1234567',
  ''
]))

/*
Create a function filterStartVowel that takes an array of strings and that returns only the ones that start with a vowel (a,e,i,o,u).
Example: 'Alabama' starts with a vowel
*/

const filterStartVowel = (el) => 
  el.filter((e) => {
    const regex = /^[aeiouAEIOU]/g
    const resRegex = new RegExp(regex)
    let isVowel = e.match(resRegex)
    if (isVowel !== null) {
      return e
    }
  })


console.log(filterStartVowel([
  'Alabama',
  'South Africa',
  'North Corea',
  ''
]))

/*
Create a function filter5Vowels that takes an array of strings and that returns only the ones which contain at least 5 vowels (a,e,i,o,u).
Example: 'California' contains at least 5 vowels
*/

const filter5Vowels = (el) => {
  return el.filter((e) => {
    const regex = /[aeiouAEIOU]/g
    const resRegex = new RegExp(regex)
    let isVowel = e.match(resRegex)
    if (isVowel.length >= 5) {
      return e
    }
  })
}

console.log(filter5Vowels([
  'Alabama',
  'South Africa',
  'North Corea',
  'California',
  'Alabama',
  'Alaska',
]))

/* 
Create a function filter1DistinctVowel that takes an array of strings and that returns only the ones which vowels are of only one distinct one (a,e,i,o,u).
Example: 'Alabama' only contains 1 distinct vowels 'a'.
*/

const filter1DistinctVowel = (el) => {
  return el.filter((e) => {
    const regex = /[aeiouAEIOU]/g
    const resRegex = new RegExp(regex)
    let isVowel = e.match(resRegex)
    const isEvery = (n) => n.toLowerCase() === isVowel[0].toLowerCase()
    if(isVowel.every(isEvery) === true) {
      return e
    }
  })
}

console.log(filter1DistinctVowel([
  'Alabama',
  'South Africa',
  'North Corea',
  'California',
  'Alabama',
  'Alaska',
]))

/*
Create a function multiFilter that takes an array of objects and that returns only the ones which:

the key capital contains at least 8 characters.

the key name does not start with a vowel

the key tag has at least one vowel.

the key region is not 'South'
*/

const multiFilter = (el) => {
  return el.filter((e) => {
    const regex = /^[aeiouAEIOU]/g
    const resRegex = new RegExp(regex)
    let isVowel = e.name.match(resRegex)
    const regex2 = /[aeiouAEIOU]/g
    const resRegex2 = new RegExp(regex2)
    let countVowel = e.tag.match(resRegex2)
    if(
      e.capital.length >= 8 &&
      isVowel === null &&
      countVowel !== null &&
      e.region !== 'South'
    ){
      return e
    }
  })
}

console.log(multiFilter(
  [
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'PA', name: 'Pennsylvania', capital: 'Harrisburg', region: 'Northeast' },
    { tag: 'CA', name: 'California', capital: 'Sacramento', region: 'West' },
    { tag: 'AL', name: 'Alabama', capital: 'Montgomery', region: 'South' },
    { tag: 'NW', name: 'New York', capital: 'Montgomery', region: 'West' }
  ]
))
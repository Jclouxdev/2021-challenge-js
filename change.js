/* 
Create 2 functions:

get: a function that takes a key and return the corresponding value from the sourceObject

set: a function that takes a key and a value update the value for the corresponding property of the sourceObject and return the set value 
*/

const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}
const get = (key) => sourceObject[key]
const set = (key2, update) => sourceObject[key2] = update





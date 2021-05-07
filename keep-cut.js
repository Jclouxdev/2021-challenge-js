/*Create the cutFirst function that takes a string and remove the 2 first characters.

Create the cutLast function that takes a string and remove the 2 last characters.

Create the cutFirstLast function that takes a string as parameter and remove the 2 first characters and 2 last characters.

Create a keepFirst function that takes a string as parameter and return the string only keeping the 2 first characters.

Create a keepLast function that takes a string as parameter and return the string only keeping the 2 last characters.

Create a keepFirstLast function that takes a string as parameter and only keep 2 first characters and 2 last characters.*/

const cutFirst = (str) => {
  const toSlice = str.slice(2)
  return toSlice
}

const cutLast = (str) => {
  const toSlice = str.slice(0, -2)
  return toSlice
}

const cutFirstLast = (str) => {
  let toSlice = str.slice(2)
  toSlice = toSlice.slice(0, -2)
  return toSlice
}

const keepFirst = (str) => {
  const toSlice = str.slice(0 , 2)
  return toSlice
}

const keepLast = (str) => {
  const toSlice = str.slice(str.length - 2)
  return toSlice
}

const keepFirstLast = (str) => {
  let toSlice = str.slice(0 , 2)
  toSlice = toSlice + str.slice(str.length - 2)
  return toSlice
}

console.log(keepFirstLast('Bonjour à tous'))
//console.log(str.length)
/*
Write 5 functions:

words that takes a string and split it into an array of strings on spaces
sentence that takes an array of strings and join them with spaces
yell that take a string and return it in upper case
whisper that take a string and return it in lower case and surround it with *
Create a capitalize function that takes a string and transforms it to upper case only for the first letter, and in lowercase for the rest of the string
*/

const words = (n) => n.split(' ')
const sentence = (m) => m.join(' ')
const yell = (e) => e.toUpperCase()
const whisper = (f) => '*' + f.toLowerCase() + '*'
const capitalize = (g) => g[0].toUpperCase() + g.slice(1).toLowerCase()
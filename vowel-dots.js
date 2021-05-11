/*
Create a function called vowelDots that receives a 
string and adds a . after every vowel 
('y' is not considered a vowel here) using a regex 
called vowels.
*/

const vowelDots = (str) => {
  const vowels = /[aeiouAEIOU]/g
  const answer = str.match(vowels)
  let stock = ''
  let j = 0
  if(answer === null) {
    return str
  }
  for (let i = 0; i<str.length; i++) {
    if(str[i] !== answer[j]) {
      stock += str[i]
    }
    if(str[i] === answer[j]) {
      stock += str[i] + '.'
      j++
    }
    if(j === answer.length) {
      stock += str.slice(i + 1)
      return stock
    }
  }
  return stock
}

console.log(vowelDots('ae')) //EO : a.e.
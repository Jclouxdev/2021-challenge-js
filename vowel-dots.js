/*
Create a function called vowelDots that receives a 
string and adds a . after every vowel 
('y' is not considered a vowel here) using a regex 
called vowels.
*/

const vowels = /[aeiouAEIOU]/g
const vowelDots = (str) => {
  const stock = str.match(vowels)
  let answer = ''
  let j = 0
  if(stock === null){
    return str
  }
  for(let i = 0;i<str.length;i++){
    if(str[i]!==stock[j]){
      answer += str[i]
    }
    if(str[i]===stock[j]){
      answer += str[i]+'.'
      j++
    }
    if(j === stock.length){
      answer += str.slice(i+1)
      return answer
    }
  }    
  return answer
}

console.log(vowelDots('ae')) //EO : a.e.
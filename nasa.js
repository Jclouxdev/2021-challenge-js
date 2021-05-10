/*Create a nasa function that takes a number N 
as a parameter and returns a string with all numbers 
from 1 to the N separated by whitespace, 
with three exceptions:

For numbers divisible by 3, add 'NA'.
For numbers divisible by 5, add 'SA'.
For the number that are divisible by 3 and 5 add 'NASA'.

i%3 = 0 Pour les multiples de 3
i%5 = 0 Pour les multiples de 5
*/

const nasa = (n) => {
  let answer = '';
  for(let i = 1; i <= n; i++) {
    if(i%3 === 0 && i%5 === 0) {
      answer += 'NASA' + ' '
    } else if(i%5 === 0 && i%3 != 0) {
      answer += 'SA' + ' '
    } else if (i%3 === 0 && i%5 != 0) {
      answer += 'NA' + ' '
    } else {
      answer += String(i) + ' '
    }
  }
  answer = answer.slice(0, answer.length - 1)
  return answer
} 

console.log(nasa(20))
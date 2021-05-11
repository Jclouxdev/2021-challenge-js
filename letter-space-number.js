/*
Make a function called letterSpaceNumber that receives 
a string and returns an array with every instance of a 
letter, followed by a space, followed by a number only 
if that number has only one digit and is not followed 
by any letter.
*/

function letterSpaceNumber(str){
  const regex = /[a-zA-Z]\s\d\b/g
  const answer = str.match(regex)
  if (answer != null){
      for(let i = 0;i<answer.length;i++){
          // res[i] = res[i].slice(0,res[i].length-1)
      }
  }else {
      const answer = []
      return answer
  }
  return answer
}
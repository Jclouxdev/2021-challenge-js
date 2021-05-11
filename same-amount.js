/*
Create a sameAmount function that takes three parameter, 
a data string and 2 regexes.

The objective is to confirm that the second and the 
third parameter matched the same amount of times in the 
first parameter.


The "g" after the regular expression is an option or 
flag that performs a global search, 
looking in the whole string and returning all matches.
*/

const sameAmount = (str,regex1, regex2) => {
  const toRegex1 = new RegExp(regex1, 'g')
  const toRegex2 = new RegExp(regex2,'g')
  const answer1 = str.match(toRegex1)
  const answer2 = str.match(toRegex2)
  if((answer1 != null && answer2 != null) && (answer1.length === answer2.length)) {
    return true
  }
  return false
}
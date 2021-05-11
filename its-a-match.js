/*
Create 4 regular expression in variables:

normal matches with the expression 'hi'.

begin matches with the expression 'hi', only when it is in the beginning.

end matches with the expression 'hi', only when it is in the end.

beginEnd matches with the expression 'hi', only when it is in the beginning and the end.


In regular expressions, we use anchors to check if the 
matching symbol is the starting symbol or ending symbol 
of the input string. Anchors are of two types: 
The first type is the caret ^ that checks if the 
matching character is the first character of the 
input and the second type is the dollar sign $ which 
checks if a matching character is the last character 
of the input string.
*/

const normal = /hi/
const begin = /^hi/
const end = /hi$/
const beginEnd = /^hi$/
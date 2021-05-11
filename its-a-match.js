/*
Create 4 regular expression in variables:

normal matches with the expression 'hi'.

begin matches with the expression 'hi', only when it is in the beginning.

end matches with the expression 'hi', only when it is in the end.

beginEnd matches with the expression 'hi', only when it is in the beginning and the end.
*/

const normal = /hi/
const begin = /^hi/
const end = /hi$/
const beginEnd = /^hi$/
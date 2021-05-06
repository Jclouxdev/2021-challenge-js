/*
Add new function properties to the object is to check a value type

is.num value is a number
is.nan value is NaN
is.str value is a string
is.bool value is a boolean
is.undef value is undefined
is.def value is defined
is.arr value is an array
is.obj value is a simple object or null objects
is.fun value is a function
is.truthy value is truthy
is.falsy value is falsy
*/

const properties = (n) => typeof n

//console.log(properties('Test'))
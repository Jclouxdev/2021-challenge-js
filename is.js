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

/*const type = undefined
const is = undefined
const properties = (is, type) => {
  if(typeof is === 'number'){
    type = 'is.num'
  }
  else if(typeof is === "NaN"){
    
  }
}*/
//const num = (n) => { if(typeof n === 'number') {return true} else return false }

/*const is = {}
const element = is
is.num = (element) => {
  if(typeof element === 'number'){return true} 
  else return false
}

is.nan = (element) => {
  if(typeof element === 'number'){return true} 
  else return false
}

is.srt = (element) => {
  if(typeof element === 'string'){return true} 
  else return false
}

is.bool = (element) => {
  if(typeof element === 'boolean'){ return true }
  else return false
}

is.undef = (element) => {
  if(typeof element === 'undefined'){ return true }
  else return false
}

is.def = (element) => {
  if(typeof element === 'defined'){ return true }
  else return false
}

is.arr = (element) => {
  if(typeof element === 'array'){ return true }
  else return false
}

is.obj = (element) => {
  if(typeof element === 'object'){ return true }
  else return false
}

is.fun = (element) => {
  if(typeof element === 'function'){ return true }
  else return false
}

is.truthy = (element) => {
  if(typeof element === 'truthy'){ return true }
  else return false
}

is.falsy = (element) => {
  if(typeof element === 'falsy'){ return true }
  else return false
}*/

const is = {}
is.num = (el) => typeof el === 'number';
is.nan = (el) => isNaN(el);
is.str = (el) => typeof el === 'string';
is.bool = (el) => typeof el === 'boolean';
is.undef = (el) => typeof el === 'undefined';
is.def = (el) => !!el;
is.arr = (el) => Array.isArray(el);
is.obj = (el) => typeof el === 'object';
is.fun = (el) => typeof el === 'function';
is.truthy = (el) => typeof el === 'truthy';
is.falsy = (el) => typeof el === 'falsy';

console.log(is)
console.log(is.arr([1,2]))
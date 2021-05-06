/*
Create the slice function that works like Array.slice and String.slice

It takes an additional first argument which is the string or the array
*/

const slice = (arg ,cut, maxCut) => {
  if(Array.isArray(arg)) {
    for(let i = 0; i < cut; i++) {
      delete arg[i]
    }
    return arg
  }
  else if (typeof arg === 'string' && cut > 0) {
    const argSplit = arg.split('');
    argSplit.splice(0, cut);
    return argSplit.join(''); 
  }
  else if (typeof arg === 'string' && cut < 0) {
    const argSplit = arg.split('')
    argSplit.splice(0, argSplit.length + cut);
    return argSplit.join('');
  }
}

console.log(slice('abcdef', -2))

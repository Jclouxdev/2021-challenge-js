/*
Create the slice function that works like Array.slice and String.slice

It takes an additional first argument which is the string or the array
*/

/*const slice = (arg, index, cut) => {
  let result = ""
  let trash = ""
  if(Array.isArray(arg)) {
    for(let i = 0; i < index; i++) {
      delete arg[i]
    }
    return arg
  }
  else if (typeof arg === 'string' && index > 0) {
    const argSplit = arg.split('');
    result = argSplit.splice(0, index);
    trash = argSplit.splice(0, argSplit.length);
    return result.join('');
  }
  else if (typeof arg === 'string' && index < 0) {
    const argSplit = arg.split('')
    argSplit.splice(0, argSplit.length + index);
    return argSplit.join('');
  }
}*/

const slice = (arg, start, end) => {
  const isStringArg = typeof arg === "string";
  const toSlice = isStringArg ? arg.split('') : arg;

  start = start || 0;
  const sliceStart = start < 0 ? arg.length + start : start;
  const sliceEnd = end === undefined ? arg.length : end;

  if (end < start) {
    throw new Error('la frerot cest pas censÃ©️ arriver')
  }

  let chunk = [];
  for (let i = sliceStart; i < sliceEnd; i++) {
    chunk.push(toSlice[i]);
  }

  return isStringArg ? chunk.join('') : chunk;
}


console.log(slice([1,2,3,4,5], 0, 2))

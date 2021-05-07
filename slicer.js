/*
Create the slice function that works like Array.slice and String.slice

It takes an additional first argument which is the string or the array
*/

const slice = (arg, start, end) => {
  const isStringArg = typeof arg === "string";
  const toSlice = isStringArg ? arg.split('') : arg;

  start = start || 0;
  const sliceStart = start < 0 ? arg.length + start : start;
  end = end === undefined ? arg.length : end;
  const sliceEnd = end < 0 ? arg.length + end : end;

  if (sliceEnd < sliceStart) {
    throw new Error('la frerot cest pas censÃ©️ arriver')
  }

  let chunk = [];
  for (let i = sliceStart; i < sliceEnd; i++) {
    chunk.push(toSlice[i]);
  }

  return isStringArg ? chunk.join('') : chunk;
}

console.log(slice('abcdef', 2))

const escapeStr = '`'+"\\"+'/'+'"'+"'"
const arr = [4,'2']
const obj = {
  str: 'String',
  num: 1234,
  bool: true,
  undef: undefined
}
const nested = {
  arr: [4, undefined, '2'], 
  obj: {str, num, bool}
}
Object.freeze(nested)
Object.freeze(arr)
Object.freeze(obj)
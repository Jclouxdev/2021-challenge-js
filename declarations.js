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
  obj: {str: "String", num: 1, bool: true}
}
Object.freeze(nested)
Object.freeze(nested.arg)
Object.freeze(nested.obj)
Object.freeze(arr)
Object.freeze(obj)
//<!>Those functions are pure and must not modify the given object<!>

//Create a pick function that takes an object and keys. 
//This function create a new object that pick only the keys, in the second argument, 
//from the object passed as argument.
const pick = (obj, keys) => {
  const myObject = {}
  let getKeys = Object.keys(obj)
  getKeys.forEach(key => {
    if(key == keys){
      myObject[key] = obj[key]
    }
  })
  return myObject
}

//Create a omit function that takes an object and keys. 
//This function create a new object that omit only the keys, in the second argument, 
//from the object passed as argument.
const omit = (obj, keys) => {
  const myObject = {}
  let getKeys = Object.keys(obj)
  getKeys.forEach(key => {
    if(key != keys){
      myObject[key] = obj[key]
    }
  })
  return myObject
}
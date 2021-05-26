const invert = (el) => {
  let myObject = {}
  let keys = Object.keys(el)
  console.log(keys)
  keys.forEach(e => {
    let stock = el[e]
    myObject[stock] = e
  })
  return myObject
}

console.log(invert({ brand: 'ford', motor: 'v8', year: 2000, fast: true, eco: true }))
/*EO : {
  ford: 'brand',
  v8: 'motor',
  2000: 'year',
  true: 'eco',
}*/

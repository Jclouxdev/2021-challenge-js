/*
Create a function named citiesOnly which takes an array of objects and which return an array of strings from the key city.

Create a function named upperCasingStates which takes an array of strings and which Upper Case each words of a string.
The function returns then an array of strings.

Create a function named fahrenheitToCelsius which takes an array of fahrenheit temperatures which converts them to Celsius. Round down the result.

Create a function named trimTemp which takes an array of objects and which removes the spaces from the string in the key temperature.
The function then returns an array of objects with the modification.

Create a tempForecasts function which will take an array of objects, and which will return an array of strings formatted as below:

Special instruction
The goal of this exercise is to learn to use map, as such all your solution MUST use map
*/

const citiesOnly = (el) => {
  let array = el.map(cites => {
      return cites.city //City est la clé, on la retourne dans l'array si elle est présente
  })
  return array
}

const upperCasingStates = (el) => {
  return el.map((e) => {
    return e
      .split(" ")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ") 
    }
  );
}

//Pour convertir des Fahrenheit en Celsius : (Fahrenheit - 32) * 5/9;
const fahrenheitToCelsius = (el) => 
  el.map((e) => {
    e = parseInt(e)
    return Math.floor((e - 32) * 5/9) + '°C'
  })

const trimTemp = (el) =>
  el.map((e) => {
    return {
      //Spread operateur pour pouvoir prévoir un max de propriétés
      //Le spread operator re-appel toutes les prop. de l'objet donné.
      ...e, 
      temperature : e.temperature.split(" ").join("")
    }
  })

const tempForecasts = (el) =>
  el.map((e) => {
    let toCelcius = parseInt(e.temperature)
    toCelcius = Math.floor((toCelcius - 32) * 5/9)
    let toUpper = 
      e.state
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    return `${toCelcius}°Celsius in ${e.city}, ${toUpper}`
  })

//TEST//
console.log(citiesOnly([
  {
    city: 'Los Angeles',
    temperature: '  101 °F   ',
  },
  {
    city: 'San Francisco',
    temperature: ' 84 ° F   ',
  },
])) // -> ['Los Angeles', 'San Francisco']
console.log(upperCasingStates(['alabama', 'new jersey'])) // -> ['Alabama', 'New Jersey']
//F to C
console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']
//TrimTemp
console.log(trimTemp([
  { city: 'Los Angeles', temperature: '  101 °F   ' },
  { city: 'San Francisco', temperature: ' 84 ° F   ' },
])) 
/* -> [
  { city: 'Los Angeles', temperature: '101°F' },
  { city: 'San Francisco', temperature: '84°F' },
] */
//tempForecasts
console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  },
  {
    city: 'Pasadena',
    temperature: ' -101 °F',
    state: 'new jersey',
    region: 'West',
  },
])) // -> ['38°Celsius in Pasadena, California']
/*Create a function hasCity that takes a country and an array of cities of that country 
and it returns a new function.
The new function takes a city parameter which returns whether a city is part of that 
country or not.

If it is, it should be returned <city> is a city from <country>, otherwise <city> is not 
a city from <country>.*/
const hasCity = (country, array) => (city) => {
    for(let i = 0; i < array.length; i++){
      if(array[i] === city){
        return `${city} is a city from ${country}`
      }
    }
    return `${city} is not a city from ${country}`
  }
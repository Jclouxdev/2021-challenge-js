/*
Create the following functions:

isValid, this function must return false if it's an Invalid Date
isAfter, this function will receive two valid dates and 
  return true if the first date is bigger then the second date
isBefore, this function will receive two valid dates and 
  return true if the first date is lesser then the second date
isFuture, will return true if the date given as parameter 
  is valid and higher than the present date
isPast, will return true if the date given as parameter is valid 
  and less than the present date
*/

const isValid = (date) => {
  if(isNaN(date) || date == 0) {
    return false
  } else {
    return true
  }
}

const isAfter = (date1, date2) => {
  //On test nos dates avec la fonction au dessus
  if(isValid(date1) === false || isValid(date2) === false) {
    return false //'erreur : la date est invalide'
  }
  let answer = date1 - date2
  //On obtient l'écart de temps en ms des deux dates, on se base dessus pour les if
  //Si answer est négatif alors la date est avant
  //Si answer est positif alors la date est après 
  if(answer > 0) {
    return true 
  } else {
    return false
  }
}

const isBefore = (date1, date2) => {
  if(isValid(date1) === false || isValid(date2) === false) {
    return false //'erreur : la date est invalide'
  }
  let answer = date1 - date2
  if(answer < 0) {
    return true
  } else {
    return false
  }
}

const isFuture = (date) => {
  if(isValid(date) === false) {
    return false //'erreur : la date est invalide'
  }
  const currDate = new Date();
  let answer = date - currDate;
  if(answer > 0) {
    return true
  } else {
    return false
  }
}

const isPast = (date) => {
  if(isValid(date) === false) {
    return false //'erreur : la date est invalide'
  }
  const currDate = new Date();
  let answer = date - currDate;
  if(answer < 0) {
    return true
  } else {
    return false
  }
}

//TEST//
//isAfter
console.log(isAfter(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(isAfter(new Date('1992-01-02'), new Date('1992-01-02')))
console.log(isAfter(new Date('1992-01-03'), new Date('1992-01-02')))
console.log(isAfter(new Date('199a-01-03'), new Date('199a-01-02')))
//isBefore
console.log(isBefore(new Date('1992-01-01'), new Date('1992-01-02')))
console.log(isBefore(new Date('1992-01-02'), new Date('1992-01-02')))
console.log(isBefore(new Date('1992-01-03'), new Date('1992-01-02')))
//IsFuture
console.log(isFuture(new Date('1992-01-01')))
console.log(isFuture(new Date()))
console.log(isFuture(new Date('2300-01-01')))
//isPast
console.log(isPast(new Date('1992-01-01')))
console.log(isPast(new Date()))
console.log(isPast(new Date('2300-01-01')))


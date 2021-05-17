/*Create the following functions:

isFriday returns true if the date is a friday
isWeekend returns true if the date is a day of the weekend
isLeapYear returns true if the year is a leap year
isLastDayOfMonth returns true if the date is the last day of the month*/

//On créer une fonction pour récupérer le jour de la semaine, sur le principe de celle dans get-some-time.js
const getWeekDay = (date)  => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

const isFriday = (date) => {
    if(getWeekDay(date) === 'Friday') {
        return true
    } else {
        return false 
    }
}

const isWeekend = (date) => {
    if(getWeekDay(date) === 'Saturday' || getWeekDay(date) ==='Sunday') {
        return true
    } else {
        return false
    }
}

//Leap year = année bisextile
/* Wikipedia : 
Règle actuelle
Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile (comportant 366 jours)1 que dans l’un des deux cas suivants :

si l'année est divisible par 4 et non divisible par 100 ;
si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).
Sinon, l'année n'est pas bissextile : elle a la durée habituelle de 365 jours (elle est dite année commune).*/
const isLeapYear = (date) => {
    let year = date.getFullYear()
    //console.log(year)
    let answer = false
    if(year % 4 === 0){
        answer = true
    }
    if(year % 100 === 0){
        answer = false
    }
    if(year % 400 === 0){
        answer = true
    }
    return answer
}

const isLastDayOfMonth = (date) => {
    let month = date.getMonth()
    date.setHours(30) //On passe la date au jour suivant pour voir si le mois à bien changé
    let monthNextDay = date.getMonth()
    if(month != monthNextDay){
        return true
    } else {
        return false
    }
}

//TEST//
//isFriday
console.log(isFriday(new Date('2014-08-29')))
console.log(isFriday(new Date('2020-07-17')))
//isWeekend
console.log(isWeekend(new Date('2014-09-06')))
console.log(isWeekend(new Date('2020-05-30')))
//isLeapYear
console.log(isLeapYear(new Date('1804-02-01')))
//isLastDayOfMonth
console.log(isLastDayOfMonth(new Date('2020-12-31')))
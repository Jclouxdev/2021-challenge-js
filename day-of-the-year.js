/*
Make a dayOfTheYear functions that takes a date and returns the number of days since the first day of that year
*/

const dayOfTheYear = (date) => {
    let newDate = date.getFullYear()
    let time = new Date('0001-01-01')
    time.setFullYear(newDate)
    let count = 0
    for(let i = 0; 1 < 10000; i++) {
        count = i
        if((time.getMonth() === date.getMonth()) && (time.getDate === date.getDate)) {
            return count + date.getDate()
        }
        time.setHours(30)
    }
}

//TEST//
console.log(dayOfTheYear(new Date('0001-01-01'))) //EO === 1)
console.log(dayOfTheYear(new Date('1664-08-09'))) //EO === 222)
console.log(dayOfTheYear(new Date('1600-12-31'))) //EO === 366)
console.log(dayOfTheYear(new Date('2020-06-22'))) //EO === 174)
console.log(dayOfTheYear(new Date('2048-12-08'))) //EO === 343)
console.log(dayOfTheYear(new Date('2048-11-08'))) //EO === 313)
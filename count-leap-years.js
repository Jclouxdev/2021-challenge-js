//Make a countLeapYears functions that takes a date and returns the number of leap years since year 1
const countLeapYears = (date) => {
    let count = 0
    const year = date.getFullYear();
    for(let i = year - 1; i > 3; i--) {
        if (((i % 4 == 0) && (i % 100 != 0)) || (i % 400 == 0)) {
            count++
        }
    }
    return count
}
//TEST//
console.log(countLeapYears(new Date('0001-12-01'))) // EO : 0
console.log(countLeapYears(new Date('1664-08-09'))) // EO : 403
console.log(countLeapYears(new Date('2020-01-01'))) // EO : 489
console.log(countLeapYears(new Date('2048-12-08'))) //EO : 496
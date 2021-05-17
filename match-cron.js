/*
Create a function called matchCron it takes a valid cron schedule string and a valid date.
It returns true if the date match the pattern

You only have to implement numbers and *.
other complex patterns are not required.

Only valid pattern will be tested.*/

//Tips Cron :
//Tip 1: If the day-of-month or day-of-week part starts with a *, they form an intersection. Otherwise they form a union. * * 3 * 1 runs on the 3rd day of the month and on Monday (union), whereas * * */2 * 1 runs on every second day of the month only if it's also a Monday (intersection). The manpage is incorrect about this detail. More info.

//Tip 2: Run your servers including the cron process in UTC timezone. Why?

//Tip 3: Some cron implementations allow to specify years and seconds. However, cron is not the best tool if you need to operate at those levels, which is also why crontab.guru doesn't support them.

//Tip 4: Don't use @reboot because it has too many issues.

//Tip 5: More difficult schedules can be realized by combining multiple cron expressions. For example, if you need to run X every 90 minutes, create one crontab entry that runs X every 3 hours on the hour (0 */3 * * *), and a second crontab entry that runs X every 3 hours with an offset (30 1/3 * * *).

//Tip 6: Another alternative for complicated schedules is Mcron.

const matchCron = (cron, date) => {
    let arr = cron.split(' ')
    let minute = arr[0]
    let hour = arr[1]
    let dayMonth = arr[2]
    let month = arr[3]
    let dayWeek = arr[4]
    let answer = false

    if(minute === '*' || minute == date.getMinutes()) {
        answer = true
    } else {
        return false
    }
    if(hour === '*' || hour == date.getHours()) {
        answer = true
    } else {
        return false
    }
    if(dayMonth === '*' || dayMonth == date.getDate()) {
        answer = true
    } else {
        return false
    }
    if(month === '*' || month == date.getMonth() + 1) {
        answer = true
    } else {
        return false
    }
    if(dayWeek === '*') {
        answer = true
    } else if(dayWeek === 7 && date.getDay === 0) {
        answer = true
    } else if(date.getDay !== 0 && Number(dayWeek) === date.getDay()) {
        answer = true
    } else {
        return false
    }
    return answer
}

//TEST//
//Expected : True
console.log(matchCron('* * * 2 *', new Date('2021-02-01 00:00:00')))
console.log(matchCron('3 3 * 3 3', new Date('2021-03-03 03:03:00')))
console.log(matchCron('* * * * *', new Date()))
//Expected : False
console.log(matchCron('* * * 2 *', new Date('2021-03-01 00:00:00')))
console.log(matchCron('3 3 * 3 3', new Date('2021-03-02 03:03:00')))
/*
Create a function firstDayWeek that receives a week of the year (from 1 to 53) 
and a year (as a string), and returns the first day of that week, 
in the format: 'dd-mm-yyyy'. By beginning of the week we mean the monday of that week.

If the first week is requested and it starts on the previous year of the presented 
one, it should return the first day of the year.
*/

const formatDate = (el) => {
  let month = String(el.getMonth() + 1)
  let day = String(el.getDate() - 1)
  let year = String(el.getFullYear());

  if(month.length < 2) { month = '0' + month }
  if(day.length < 2 ) { day = '0' + day }
  if(year.length === 1) { year = '000' + year }
  if(year.length === 2) { year = '00' + year }
  if(year.length === 3) { year = '0' + year }

  return `${day}-${month}-${year}`;
} 

const getWeekDay = (el) => {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[el.getDay() - 1];
}

const firstDayWeek = (week, year) => {
  let time = new Date(year)
  if(week === 1) {
    time.setHours(24)
    return formatDate(time)
  }
  let dayPlus = week * 7 * 24 //Transforme en H
  time.setHours(dayPlus-123)

  for(let i = 0; i < 7; i++) {
    let today = getWeekDay(time);
    if (today === 'Monday') {
      let answer = formatDate(time)
      return answer
    }
    time.setHours(-24)
  }
  return time
}

//TEST//
console.log(firstDayWeek(1, '1000')) //EO : '01-01-1000'
console.log(firstDayWeek(2, '0001')) //EO : '08-01-0001'

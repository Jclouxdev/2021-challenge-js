/*
You have been given the mission to create a new sense 
of time. Instead of a normal week having only 7 days, 
you will have 14 days. Your mission is to create an 
addWeek function with one parameter of Date type. 
So now, a week is 14 days from Monday to Sunday 
then secondMonday to secondSunday. 
Week number should be count from 0001-01-01

Now imagine you have a doctor appointment and you have 
to wait some hours. But you do not want to wait, 
so what you need to do is create a function timeTravel 
that allows you to change the time according to your 
needs, this function it can go backwards or forwards 
in time. You will have a function that takes a date 
and you will pass 3 more parameters to change the hour,
 minute and seconds.


Example
timeTravel({ date, hour, minute, second })

timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
})

// Output: Date { 2020-05-29T21:22:22.000Z }
*/

const addWeek = (date) => {
  const day0 = new Date("0001-01-01")
  //Différence entre day0 et la date en ms
  const msDiff = date - day0;
  const daysDiff =
  msDiff / 
  (1000 * //Conversion vers secondes
    60 * //Conversion vers minutes
    60 * //Conversion vers heures
    24 ); //Conversion vers jours
  
    //Divide par 7 pour avoir en semaine
    //et reste de la division par 2
    //Si le reste > 1 on est au dela des 7 jours donc on passe sur la nouvelle semaine
    //Si le reste < 1 on est dans une semaine classique
    const diffMod = (daysDiff / 7) % 2;
    
    if(diffMod > 1) {
      return "second" + date.toLocaleDateString("en-GB", {weekday: 'long'});
    }
    return date.toLocaleDateString("en-GB", { weekday: 'long' });
};

function timeTravel({date,hour,minute,second}) {
  date.setHours(hour)
  date.setMinutes(minute)
  date.setSeconds(second)
  return date
}

console.log(addWeek(new Date('0001-01-01'))) //=== 'Monday')
console.log(addWeek(new Date('0001-01-02'))) //=== 'Tuesday')
console.log(addWeek(new Date('0001-01-03'))) //=== 'Wednesday')
console.log(addWeek(new Date('0001-01-10'))) //=== 'secondWednesday')
console.log(addWeek(new Date('0001-01-11'))) //=== 'secondThursday')
console.log(addWeek(new Date('0001-01-12'))) //=== 'secondFriday')

console.log(timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}))

/*const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
  'secondMonday',
  'secondTuesday',
  'secondWednesday',
  'secondThursday',
  'secondFriday',
  'secondSaturday',
  'secondSunday'
]

const day = 86400000
const firstDay = new Date('0001-01-01').getTime()

function addWeek(date) {
  return dayNames[(date - firstDay) / day % 14]
}*/

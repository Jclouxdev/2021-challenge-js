/*
Create a reverse function that works on both arrays and strings.

Like [].reverse() but working also for strings (without using the actual method)
*/

const reverse = (el) => {
  if(typeof el === 'string') {
    let answer = '';
    for(let i = el.length -1; i >= 0; i--) {
      answer += el[i]
    }
    return answer
  }
  else if (typeof el === 'object' || typeof el === 'array') {
    let answer = [];
    for(let i = el.length - 1; i >= 0; i--) {
      answer.push(el[i])
    }
    return answer
  }
}

console.log(reverse('Bonjour')) //Expected output : ruojnoB
console.log(reverse([1,2,3,4,5])) //Expected outpur : 5 4 3 2 1
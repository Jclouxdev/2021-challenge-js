/*
Implement 2 functions:

split that works like the string method .split but take the string as it's first argument.

join that works like the string method .join but take the array as it's first argument.

<!> Code Provided <!>
<!> String.prototype.split = undefined
<!> String.prototype.match = undefined
<!> RegExp.prototype.exec = undefined
<!> Array.prototype.join = undefined
*/

const split = (str, el) => {
  let answer = [];
  for(let i = 0; i < str.length - el.length + 1; i++) {
    if(str.slice(i,i+el.length) == el) {
      answer.push(str.slice(0, i))
      str = str.slice(i + el.length)
      i = 0
    }
  }
  answer.push(str)
  return answer
}

const join = (str, el) => {
  let answer = '';
  for(let i = 0; i < str.length; i++) {
    if(el.length === 0) {
      answer += str[i]
    } else {
      answer += str[i] + el
    }
  }
  //console.log(answer)
  answer = answer.slice(0, answer.length - el.length)
  return answer
}

console.log(split('Lorem Ipsum Tucoco', ' ')) //EO : ["Lorem", "Ipsum", "Tucoco"]
console.log(split('Lorem Ipsum Tucoco', '')) //EO : ["L", "o", "r", "e" ... "o"]
console.log(join(['Oui', 'Bonjour', 'a', 'Totus'], '')) //EO : "OuiBonjouraTotus"


const multiply = (a, b) => {
  //let result = 0
  //for (let i = 0; i < a; i++) {
  //  result = result + b
  //}
  //return result
  return Math.imul(a, b)
}

const divide = (a, b) => {
  let negResult = false;
  if (a < 0)
    {
      a = -a ;
      if (b < 0)
        b = - b ;
      else
        negResult = true;
    }
    else if (b < 0)
  {
    b = - b ;
    negResult = true;
  }

  let quotient = 0;
  while (a >= b)
    {
      a = a - b ;
      quotient++ ;
    }
    if (negResult)
        quotient = - quotient ;
    return quotient ;
}

const modulo = (a, b) => {
  let c = a - b;
  let d = parseInt(a / b);
  let t = Math.imul(c, d)
  return t;
}

console.log(modulo(100, 7))

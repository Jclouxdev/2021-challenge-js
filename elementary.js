const multiply = (a, b) => {
  if(b == 0)
  return 0;
 
  if(b > 0 )
  return (a + multiply(a, b-1));
 
  if(b < 0 )
  return -multiply(a, -b);
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
  let result = a - multiply(divide(a, b), b)
  return result;
}

console.log(modulo(100, 7))

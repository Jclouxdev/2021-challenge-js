export const generateLetters = () => {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for(let i = 1; i <= 120; i++){
    let stock = ''
    stock += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
    let answer = document.createElement('div')
    answer.innerHTML = stock
    answer.style.fontSize = `${(i + 10)}px`
    if(i <= 40){
      answer.style.fontWeight = '300'
    } else if (i <= 80){
      answer.style.fontWeight = '400'
    } else{
      answer.style.fontWeight = '600'
    }
    document.body.append(answer)
  }
}
import {colors} from './fifty-shades-of-cold.data.js';

export const generateClasses = () => {
  let style = document.createElement('style')
  style.innerHTML = ''
  for(let i = 0; i < colors.length; i++){
    style.innerHTML += `.${colors[i]}{background:${colors[i]};}`
  }
  document.getElementsByTagName('head')[0].appendChild(style);
}

export const generateColdShades = () => {
  let contains = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
  for(let i = 0; i < colors.length; i++){
    for(let j = 0; j < contains.length; j++){
      let regex = new RegExp(contains[j])
      if(colors[i].match(regex) !== null){
        let div = document.createElement('div')
        div.textContent = colors[i]
        div.className = colors[i]
        document.body.append(div)
      }
    }
  }
}

export const choseShade = (data) => {
  let el = document.querySelectorAll('div')
  for(let i = 0; i < colors.length; i++){
    let style = el[i].className
    if(!el[i].classList.contains(data)){
      el[i].classList.remove(style)
      el[i].classList.add(data)
    }
  }
}
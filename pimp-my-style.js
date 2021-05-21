import {styles} from './pimp-my-style.data.js'
let i = 0
let j = 14
let k = 0
export const pimp = () => {
  let el = document.querySelector('button')
  let calc = Math.floor(i / styles.length)
  if(calc % 2 === 0){
    j = 14
    el.classList.add(styles[k])
    i++
    k++
    if(k === 15){
      el.classList.add('unpimp')
    }
  }
  if(calc % 2 != 0){
    k = 0
    el.classList.add('unpimp')
    el.classList.remove(styles[j])
    i++
    j--
    if(j == -1){
      el.classList.remove('unpimp')
    }
  }
}
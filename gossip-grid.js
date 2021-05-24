import { gossips } from './gossip-grid.data.js'
export const grid = () => {
  let every = document.createElement('div')
  every.className = 'ranges'
  //Width input setup
  let width = document.createElement('input')
  width.className = 'range'
  width.id = 'width'
  width.type = 'range'
  width.value = ''
  width.min = '200'
  width.max = '800'
  width.addEventListener('input', () => {
      let el = document.querySelectorAll('.gossip')
      el.forEach(e => {
          e.style.width = `${width.value}px`
      })
  })
  //Font input setup
  let fontSize = document.createElement('input')
  fontSize.className = 'range'
  fontSize.id = 'fontSize'
  fontSize.type = 'range'
  fontSize.min = '20'
  fontSize.max = '40'
  fontSize.value = ''
  fontSize.addEventListener('input', () => {
      let el = document.querySelectorAll('.gossip')
      el.forEach(e => {
          e.style.fontSize = `${fontSize.value}px`
      })
  })
  //Background input setup
  let background = document.createElement('input')
  background.className = 'range'
  background.id = 'background'
  background.type = 'range'
  background.min = '20'
  background.max = '75'
  background.value = ''
  background.addEventListener('input', () => {
      let el = document.querySelectorAll('.gossip')
      el.forEach(e => {
          e.style.background = `hsl(280, 50%, ${background.value}%)`
      })
  })
  //Append states
  every.appendChild(width)
  every.appendChild(fontSize)
  every.appendChild(background)
  document.body.appendChild(every)
  //Build elements
  let share = document.createElement("form")
  share.className = "gossip"
  document.body.appendChild(share)
  let textarea = document.createElement("textarea")
  textarea.setAttribute("placeholder", "Share your gossip")
  share.appendChild(textarea)
  let button = document.createElement("button")
  button.innerHTML = "Share gossip!"
  share.appendChild(button)
  //Eventlistener on Click
  button.addEventListener("click", () => {
      let el = textarea.value
      let submit = document.createElement('div')
      submit.className = "gossip"
      submit.textContent = el
      document.body.insertBefore(submit, document.querySelectorAll('.gossip')[1])
      textarea.value = ""
      event.preventDefault()
  })
  addGross(gossips)
}

const addGross = (el) => {
  el.forEach(e => {
      let el = document.createElement('div')
      el.className = "gossip"
      el.innerHTML = e
      document.body.appendChild(el)
  })
}
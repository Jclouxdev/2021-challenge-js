//Key Spacebar = 32
//Key Return = 8
export const compose = () => {
  document.addEventListener('keydown', (event) => {
    if(event.keyCode === 32){
      document.querySelectorAll('div').forEach((e) => {
        e.remove()
      })
    } else if(event.keyCode === 8){
      let removeNote = document.querySelectorAll('div')
      removeNote[removeNote.length - 1].remove()
    } else {
      let myKey = event.key
      let div = document.createElement('div')
      div.classList.add('note')
      console.log(event.keyCode, event.key)
      div.style.background = `#${99}${event.keyCode}${event.keyCode}`
      document.body.appendChild(div)
      div.innerHTML = myKey
    }
  })
}
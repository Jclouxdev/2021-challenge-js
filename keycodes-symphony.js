/*export function compose(){
  document.addEventListener("keydown", (event)=>{
      let eventCode = event.keyCode
      if(eventCode === 27){
          document.querySelectorAll("div").forEach((item) => {
              item.remove()
          })
      }else if(eventCode === 8){
          let removeLastChar = document.querySelectorAll("div")
          removeLastChar[removeLastChar.length-1].remove()
      }else{
          let eventKey = event.key
          let block = document.createElement("div")
          block.classList.add("note")
          let color = "#"+99+eventCode+eventCode
          block.style.background = color
          document.body.appendChild(block)
          block.innerHTML = eventKey
      }
  })
}*/

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
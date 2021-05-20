export const build = (el) => {
  let i = 1
  let block = ''
  let countStep = 2 //pour commencer au milieu
  let interval = setInterval(() => {
    block = document.createElement('div')
    document.body.append(block)
    block.innerHTML = i
    block.id = `brick-${i}`
    i++
    if(countStep === 3){
      block.dataset.foundation = true
      countStep = 0
    }
    countStep++
    if(i === el + 1){
      clearInterval(interval)
    }
  }, 100, i)
  return block
}

export const repair = (...repairs) => {
  for(let i = 0; i < repairs.length; i++){
    let el = document.getElementById(repairs[i])
    let count = repairs[i].replace('brick-', '')
    if(count % 3 === 2){
      el.setAttribute('data-repaired', 'in progress')
      el.innerHTML = count
    } else {
      el.setAttribute('data-repaired', 'true')
      el.innerHTML = count
    }
  }
}

export const destroy = () => {
  let el = document.querySelectorAll('div[id^="brick"]')
  el[el.length - 1].remove()
}
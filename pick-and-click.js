export const pick = () => {
  let div = document.createElement('div')
  div.className = 'text'
  div.classList.add('hsl')
  document.body.appendChild(div)
  //SVG init
  let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttributeNS(null, 'height', window.innerHeight)
  svg.setAttributeNS(null, 'width', window.innerWidth)
  //init Object : Horizontal Line
  let lineX = document.createElementNS('http://www.w3.org/2000/svg', 'line')
  lineX.setAttributeNS(null, 'id', 'axisY')
  lineX.setAttributeNS(null, 'x1', 0)
  lineX.setAttributeNS(null, 'y1', 0)
  lineX.setAttributeNS(null, 'x2', 0)
  lineX.setAttributeNS(null, 'y2', 0)
  lineX.style.stroke = 'white';
  lineX.style.strokeWidth = 1;
  //init Object : Vertical Line
  let lineY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  lineY.setAttributeNS(null, 'id', 'axisX')
  lineY.setAttributeNS(null, 'x1', 0)
  lineY.setAttributeNS(null, 'y1', 0)
  lineY.setAttributeNS(null, 'x2', 0)
  lineY.setAttributeNS(null, 'y2', 0)
  lineY.style.stroke = 'white';
  lineY.style.strokeWidth = 1;
  //Draw Objects
  svg.appendChild(lineX)
  svg.appendChild(lineY)
  document.body.appendChild(svg)
  //Event Listener Mouse movement
  addEventListener('mousemove', e => {
    //Data reset for updates using remove
    document.querySelectorAll('.hue', '.hsl').forEach(e => {
      e.remove()
    })
    document.querySelectorAll('.hsl').forEach(e => {
      e.remove()
    })
    document.querySelectorAll('.luminosity').forEach(e => {
      e.remove()
    })
    //Set lines
    let lineX = document.getElementById('axisY')
    let lineY = document.getElementById('axisX')
    //set Object : Horizontal Line
    lineX.setAttributeNS(null, 'x1', 0)
    lineX.setAttributeNS(null, 'y1', e.clientY)
    lineX.setAttributeNS(null, 'x2', window.innerWidth)
    lineX.setAttributeNS(null, 'y2', e.clientY)
    //set Object : Vertical Line
    lineY.setAttributeNS(null, 'x1', e.clientX)
    lineY.setAttributeNS(null, 'y1', 0)
    lineY.setAttributeNS(null, 'x2', e.clientX)
    lineY.setAttributeNS(null, 'y2', window.innerHeight)
    //Set Background Color
    let x = e.clientX / window.innerWidth * 360
    let y = e.clientY / window.innerHeight * 100
    document.body.style.background = `hsl(${x},50%,${y}%)`
    //Wrote HUE + Value
    let hue = document.createElement('div')
    hue.className = 'hue'
    hue.classList.add('text')
    hue.innerHTML = `Hue<br>${Math.round(x)}`
    document.body.appendChild(hue)
    //Wrote HSL + Value
    let hsl = document.createElement('div')
    hsl.className = 'hsl'
    hsl.classList.add('text')
    hsl.innerHTML = `hsl(${Math.round(x)},50%,${Math.round(y)}%)`
    document.body.appendChild(hsl)
    //Worte Luminosity + Value
    let luminosity = document.createElement('div')
    luminosity.className = 'luminosity'
    luminosity.classList.add('text')
    luminosity.innerHTML = `${Math.round(y)}<br>Luminosity`
    document.body.appendChild(luminosity)
  })
  //Copy on Click Event
  addEventListener('click', e => {
    let el = document.getElementsByClassName('hsl')[0].innerHTML
    let input = document.createElement('input')
    document.body.appendChild(input)
    input.value = el
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  })
}
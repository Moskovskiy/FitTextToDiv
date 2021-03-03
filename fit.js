function fitTextInsideDiv(container, str, min, max) {  
  container.innerHTML = str
  
  let x = container.clientWidth
  let y = container.clientHeight
  
  container.style.fontSize = max + 'px'
  container.style.padding = 0 + 'px'
  container.style.whiteSpace = 'nowrap'
  container.style.width = 'auto'
  container.style.height = 'auto'
  
  let a = container.clientWidth
  let b = container.clientHeight
  
  let sqScale = (a*b)/(x*y) // rough approximation with area
  let fontSize = max / sqScale
  
  container.style.whiteSpace = 'normal'
  
  container.style.width = x + 'px'
  container.style.height = y + 'px'
  
  for (let t = Math.round(fontSize); t >= min; t--) {
    container.style.fontSize = t + 'px' // remove if no need to apply
    let ia = container.scrollWidth
    let ib = container.scrollHeight
    
    if ((ia <= x) && (ib <= y)) {
      return t // returns calculated font size
    }
  }
  
  return null // if unable to fit
}

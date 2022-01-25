const state = {}
state.current = 'off'
state.randomColorValue = []
state.colorsAvailable = ['purple', 'blue', 'orange', 'yellow']
function get (id) {
  return document.getElementById(id)
}

function getRGBColor (color, index) {
  let random
  if (state.randomColorValue[index]) {
    random = state.randomColorValue[index]
  } else {
    random = Math.floor(Math.random() * 245) + 10
    state.randomColorValue.push(random)
  }
  if (color === 'blue') {
    const r = 25
    const g = 190
    const res = r.toString(16) + g.toString(16) + random.toString(16)
    return res
  } else if (color === 'orange') {
    const r = 250
    const b = 110
    let g = random + 50
    let res =
      random.toString(16).length == 1
        ? random.toString(16) + 0 + b.toString(16)
        : random.toString(16) + b.toString(16)

    return r.toString(16) + res
  } else if (color === 'purple') {
    const r = random
    const g = 102
    const b = 168
    return r.toString(16) + g.toString(16) + b.toString(16)
  } else if (color === 'yellow') {
    const r = random
    const g = 204
    const b = 115
    return r.toString(16) + g.toString(16) + b.toString(16)
  }
}
function createDiv (color, index) {
  const div = document.createElement('div')
  div.className = 'color'
  div.id = getRGBColor(color, index)
  div.style.backgroundColor = '#' + div.id
  return div
}

function generateDivs (num, loc, color) {
  for (let i = 0; i < num; i++) {
    loc.appendChild(createDiv(color, i))
  }
}
function createDuplicates (checked, num) {
  checked.forEach((algo, i) => {
    const div = document.createElement('article')
    div.id = algo + '-container'
    get('main').appendChild(div)
    const random = Math.round(Math.random() * 2)
    generateDivs(num, div, state.colorsAvailable[i])
  })
}
function checkSelected () {
  let algoArray = []
  if (get('insert-sort').checked) algoArray.push('insert-sort')
  if (get('bubble-sort').checked) algoArray.push('bubble-sort')
  if (get('merge-sort').checked) algoArray.push('merge-sort')
  if (get('quick-sort').checked) algoArray.push('quick-sort')
  return algoArray
}

function play () {
  if (state.current == 'running') {
  } else {
    state.current = 'running'
    const loc = get('main')
    const num = get('num').value
    const checked = checkSelected()
    if (num) {
      createDuplicates(checked, num)
    }
  }
}

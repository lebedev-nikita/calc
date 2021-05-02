const [btnPanel_first, btnPanel_second] = document.querySelectorAll('.btn-panel')
const bp1 = [...btnPanel_first.children]
const bp2 = [...btnPanel_second.children]

const expression = document.getElementById('expression')
const result = document.getElementById('result')

const selectPanel = (className) => () => {
  document.querySelectorAll('.btn-panel').forEach((panel) => {
    if (panel.classList.contains(className)) {
      panel.style.display = 'flex'
    } else {
      panel.style.display = 'none'
    }
  })
}

const isParensBalanced = (str) => {
  let count = 0;
  for (c of str) {
    if (c === '(') count++
    if (c === ')') count--
    if (count < 0) return false
  }
  console.log(count === 0)
  return count === 0
}

const setExprVal = (str) => {
  const last = str[str.length - 1]
  const lastChars = {
    '0': undefined,
    '1': undefined,
    '2': undefined,
    '3': undefined,
    '4': undefined,
    '5': undefined,
    '6': undefined,
    '7': undefined,
    '8': undefined,
    '9': undefined,
    '(': undefined,
    ')': undefined,
  }
  expression.value = str
  if ((last in lastChars) && isParensBalanced(expression.value))
    result.value = eval(expression.value)
}

const pushChar = (char) => () => {
  setExprVal(expression.value + char)
}


// bp1[0].onclick = pushChar('7')
bp1[1].onclick = pushChar('(')
bp1[2].onclick = pushChar(')')
bp1[3].onclick = () => setExprVal('')
// bp1[4].onclick = pushChar('7')
bp1[5].onclick = pushChar('7')
bp1[6].onclick = pushChar('8')
bp1[7].onclick = pushChar('9')
bp1[8].onclick = pushChar('/')
// bp1[9].onclick = pushChar('7')
bp1[10].onclick = pushChar('4')
bp1[11].onclick = pushChar('5')
bp1[12].onclick = pushChar('6')
bp1[13].onclick = pushChar('*')
// bp1[14].onclick = pushChar('7')
bp1[15].onclick = pushChar('1')
bp1[16].onclick = pushChar('2')
bp1[17].onclick = pushChar('3')
bp1[18].onclick = pushChar('-')
bp1[19].onclick = selectPanel('btn-panel_second')
bp1[20].onclick = pushChar('0')
bp1[21].onclick = pushChar('.')
bp1[22].onclick = pushChar('%')
bp1[23].onclick = pushChar('+')
// bp1[24].onclick = pushChar('7')



bp2[19].onclick = selectPanel('btn-panel_first')

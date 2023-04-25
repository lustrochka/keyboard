import values from "./values.js"

const keyValues = values;
const page = document.querySelector('body');

let isCapsEntered = false;

function render() {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  page.appendChild(wrapper);

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerText = 'Virtual keyboard';
  wrapper.appendChild(title);

  const enter = document.createElement('textarea');
  enter.setAttribute('rows', 10);
  enter.setAttribute('cols', 60);
  enter.classList.add('textarea');
  wrapper.appendChild(enter);

  const keyboard = document.createElement('ul'); 
  keyboard.classList.add('keyboard');
  wrapper.appendChild(keyboard);

  for (let i = 0; i < keyValues.length; i++) {
    const key = document.createElement('li');
    key.classList.add('key');
    key.classList.add(keyValues[i]["code"]);
    key.addEventListener('click', () => {
      enterSingleSymbol(key)
    })
    keyboard.appendChild(key);
    for (let j = 1; j < 5; j++) {
      const symbol = document.createElement('span');
      symbol.classList.add('symbol');
      symbol.classList.add(`${Object.keys(keyValues[i])[j]}`);
      symbol.innerText = keyValues[i][Object.keys(keyValues[i])[j]];
      key.appendChild(symbol);
      if (j != 3) {
        symbol.classList.add('hidden');
      }
    }
    if (keyValues[i]["special"]==="True") key.classList.add('special-key')
  }
}

render()

function enterSingleSymbol(key) {
  const textarea = document.querySelector('.textarea');
  if (!key.classList.contains('special-key')) {
    textarea.value += key.innerText
  } else if (key.classList.contains('Backspace')) {
    textarea.value = textarea.value.slice(0, textarea.value.length - 1)
  } else if (key.classList.contains('Space')) {                                    //Delete
    textarea.value += ' '
  } else if (key.classList.contains('Enter')) {
    textarea.value += '\n'
  } else if (key.classList.contains('Tab')) {
    textarea.value += '    '
  } else if (key.classList.contains('CapsLock')) {
    changeSymbols()
  }
}

function changeSymbols() {
  let littleSymbols = document.querySelectorAll('.eng');
  let bigSymbols = document.querySelectorAll('.engCaps');
  if (isCapsEntered) {
    isCapsEntered = false;
  } else {
    isCapsEntered = true;
  }
  toggleSymbols(littleSymbols);
  toggleSymbols(bigSymbols);
}

function toggleSymbols(symbols) {
  symbols.forEach(symbol => {
    if (symbol.classList.contains('hidden')) {
      symbol.classList.remove('hidden')
    } else {
      symbol.classList.add('hidden')
    }
    })
}

let specialKeys = ['ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight'];

document.addEventListener('keydown', (event) => {
  let key = document.querySelector(`.${event.code}`);
  key.classList.add('active');
  enterSingleSymbol(key)
  document.addEventListener('keyup', (event) => {
    let keyUp = document.querySelector(`.${event.code}`);
    keyUp.classList.remove('active');
  })
 }
);
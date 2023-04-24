import values from "./values.js"

const keyValues = values;
const page = document.querySelector('body');

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
  enter.setAttribute('cols', 90);
  enter.classList.add('textarea');
  wrapper.appendChild(enter);
  enter.addEventListener('keydown', keycode)

  const keyboard = document.createElement('ul'); 
  keyboard.classList.add('keyboard');
  wrapper.appendChild(keyboard);

  /*for (let i = 0; i < 5; i++) {
    const row = document.createElement('div');
    row.classList.add('keyboard-row');
    keyboard.appendChild(row);
  }*/

  for (let i = 0; i < keyValues.length; i++) {
    const key = document.createElement('li');
    key.classList.add('key');
    key.classList.add(keyValues[i]["code"]);
    keyboard.appendChild(key);
    for (let j = 1; j < Object.keys(keyValues[i]).length; j++) {
      const symbol = document.createElement('span');
      symbol.classList.add('symbol');
      symbol.innerText = keyValues[i][Object.keys(keyValues[i])[j]];
      key.appendChild(symbol);
      if (j != 3) {
        symbol.classList.add('hidden');
      }
    }
  }
}

render()

function keycode(e) {
  console.log(e.code)
}


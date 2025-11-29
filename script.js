let display = document.getElementById('display');
let history = document.getElementById('history');
let current = '';

function append(value) {
  if (display.innerText === '0') display.innerText = '';
  display.innerText += value;
  current += value;
}

function clearDisplay() {
  display.innerText = '0';
  current = '';
}

function calculate() {
  try {
    let result = eval(current.replace('^', '**').replace('%', '/100'));
    history.innerHTML += current + ' = ' + result + '<br>';
    display.innerText = result;
    current = result.toString();
  } catch (e) {
    display.innerText = 'خطا';
    current = '';
  }
}

function sqrt() {
  try {
    let result = Math.sqrt(eval(current));
    history.innerHTML += `√(${current}) = ${result}<br>`;
    display.innerText = result;
    current = result.toString();
  } catch {
    display.innerText = 'خطا';
  }
}

function power() {
  current += '**';
  display.innerText += '^';
}

// پشتیبانی از کیبورد
document.addEventListener('keydown', function(e) {
  const allowedKeys = '0123456789+-*/.=()%^';
  if (allowedKeys.includes(e.key)) append(e.key);
  if (e.key === 'Enter') calculate();
  if (e.key === 'Backspace') {
    current = current.slice(0, -1);
    display.innerText = display.innerText.slice(0, -1) || '0';
  }
  if (e.key === 'c' || e.key === 'C') clearDisplay();
});


// Produce by AmirHossein Taghizadeh
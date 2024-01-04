document.getElementById('calculateLuas').addEventListener('click', calculateLuas);
document.getElementById('calculateKeliling').addEventListener('click', calculateKeliling);
document.getElementById('resetButton').addEventListener('click', resetForm);

function calculateLuas() {
  const base = parseFloat(document.getElementById('base').value);
  const height = parseFloat(document.getElementById('height').value);

  if (!validateInput(base, height)) {
    alert('Please enter valid base and height.');
    return;
  }

  const luas = 0.5 * base * height;
  displayLuasResult(luas);
}

function calculateKeliling() {
  const side1 = parseFloat(document.getElementById('side1').value);
  const side2 = parseFloat(document.getElementById('side2').value);
  const side3 = parseFloat(document.getElementById('side3').value);

  if (!validateInput(side1, side2, side3)) {
    alert('Please enter valid side lengths.');
    return;
  }

  const keliling = side1 + side2 + side3;
  displayKelilingResult(keliling);
}

function validateInput(...values) {
  return values.every(value => value > 0);
}

function displayLuasResult(result) {
  document.getElementById('luasResult').innerText = `Area: ${result.toFixed(2)}`;
}

function displayKelilingResult(result) {
  document.getElementById('kelilingResult').innerText = `Perimeter: ${result.toFixed(2)}`;
}

function resetForm() {
  document.getElementById('luasForm').reset();
  document.getElementById('kelilingForm').reset();
  document.getElementById('luasResult').innerText = '';
  document.getElementById('kelilingResult').innerText = '';
}

function switchMode(mode) {
  const luasMode = document.getElementById('luasMode');
  const kelilingMode = document.getElementById('kelilingMode');

  if (mode === 'luas') {
    luasMode.style.display = 'block';
    kelilingMode.style.display = 'none';
  } else if (mode === 'keliling') {
    luasMode.style.display = 'none';
    kelilingMode.style.display = 'block';
  }
}

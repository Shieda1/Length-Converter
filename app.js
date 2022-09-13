//https://www.omnicalculator.com/conversion/length-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const metricRadio = document.getElementById('metricRadio');
const imperialUSRadio = document.getElementById('imperialUSRadio');
const othersRadio = document.getElementById('othersRadio');

let meters;
let feet = v;

// labels of the inpust
const variable = document.getElementById('variable');

metricRadio.addEventListener('click', function() {
  variable.textContent = 'Feet';
  feet = v;
  result.textContent = '';
});

imperialUSRadio.addEventListener('click', function() {
  variable.textContent = 'Meters';
  meters = v;
  result.textContent = '';
});

othersRadio.addEventListener('click', function() {
  variable.textContent = 'Meters';
  meters = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(metricRadio.checked)
    result.textContent = `Metric = ${computemetric().toFixed(2)}`;

  else if(imperialUSRadio.checked)
    result.textContent = `Imperial/US = ${computeimperialUS().toFixed(2)}`;

  else if(othersRadio.checked)
    result.textContent = `Others = ${computeothers().toFixed(2)}`;
})

// calculation

function computemetric() {
  return Number(feet.value) / 3.281;
}

function computeimperialUS() {
  return Number(meters.value) * 3.281;
}

function computeothers() {
  return Number(meters.value) / 1852;
}
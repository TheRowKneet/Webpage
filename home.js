const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});


const modeSwitch = document.querySelector(".toggle-switch");
const body = document.querySelector("body");
const modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText ="Light Mode"
    }
    else{
        modeText.innerText ="Dark Mode"
    }
});


// JavaScript code for controlling the lights, door, and fan

// Light control

const lightToggle1 = document.getElementById('lightToggle1');
const lightToggle2 = document.getElementById('lightToggle2');
const light1Status = document.getElementById('light1Status');
const light2Status = document.getElementById('light2Status');

lightToggle1.addEventListener('change', () => {
  const lightOn1 = lightToggle1.checked;
  if (lightOn1) {
    // Code to turn on Light 1
    light1Status.textContent = 'ON';
  } else {
    // Code to turn off Light 1
    light1Status.textContent = 'OFF';
  }
});

lightToggle2.addEventListener('change', () => {
  const lightOn2 = lightToggle2.checked;
  if (lightOn2) {
    // Code to turn on Light 2
    light2Status.textContent = 'ON';
  } else {
    // Code to turn off Light 2
    light2Status.textContent = 'OFF';
  }
});

// Door control
const doorToggle = document.getElementById('doorToggle');
const doorStatus = document.getElementById('doorStatus');

doorToggle.addEventListener('change', () => {
  const doorOpen = doorToggle.checked;
  if (doorOpen) {
    // Code to open the door
    doorStatus.textContent = 'OPEN';
  } else {
    // Code to close the door
    doorStatus.textContent = 'CLOSED';
  }
});

// Fan control
const fanToggle = document.getElementById('fanToggle');
const fanStatus = document.getElementById('fanStatus');

fanToggle.addEventListener('change', () => {
  const fanOn = fanToggle.checked;
  if (fanOn) {
    // Code to turn on the fan
    fanStatus.textContent = 'ON';
  } else {
    // Code to turn off the fan
    fanStatus.textContent = 'OFF';
  }
});



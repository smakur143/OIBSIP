let display = document.getElementById("display");
let powerButton = document.querySelectorAll(".btn")[1];
let numericButtons = document.querySelectorAll(
  ".btn:not(:first-child):not(:nth-child(2))"
);

let isOn = false;

window.onload = function () {
  togglePower();
};

function togglePower() {
  isOn = !isOn;
  if (isOn) {
    powerButton.textContent = "off";
    display.removeAttribute("disabled");
    display.value = "0"; 
  } else {
    powerButton.textContent = "on";
    display.setAttribute("disabled", "true");
    clearDisplay();
  }
}

function clearDisplay() {
  if (!isOn) {
    display.value = "";
  } else {
    display.value = "0";
  }
}

function appendToDisplay(value) {
  if (!isOn) return;
  if (display.value === "0" && value !== "C") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function calculate() {
  if (!isOn) return;
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function backspace() {
    const display = document.getElementById("display");
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}




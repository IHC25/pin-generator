function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinCheck = pin + "";
  if (pinCheck.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const pinMatched = document.getElementById("pin-success");
  const pinNotMatched = document.getElementById("pin-fail");
  if (pin == typedNumbers) {
    pinMatched.style.display = "block";
    pinNotMatched.style.display = "none";
  } else {
    pinNotMatched.style.display = "block";
    pinMatched.style.display = "none";
  }
}

// random pin generator handler
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
});

// calculator handler
document.getElementById("key-pad").addEventListener("click", function (event) {
  const numbers = event.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(numbers)) {
    if (numbers == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + numbers;
    calcInput.value = newNumber;
  }
});

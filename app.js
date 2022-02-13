function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinCheck = pin + "";
  if (pinCheck.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}
document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
});

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

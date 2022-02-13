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

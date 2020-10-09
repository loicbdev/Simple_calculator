const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  let numberOneInput = document.getElementById("number1");
  numberOneInput.value = "";
  let numberTwoInput = document.getElementById("number2");
  numberTwoInput.value = "";
  let operand = document.getElementById("operator");
  operand.value = "+";
});

const processButton = document.getElementById("process");
processButton.addEventListener("click", function (event) {
  let firstValue = document.getElementById("number1").value;
  let secondValue = document.getElementById("number2").value;
  let operand = document.getElementById("operator").value;
  firstValue = parseInt(firstValue);
  secondValue = parseInt(secondValue);

  const resultDiv = document.getElementById("result");
  switch (operand) {
    case "+":
      resultDiv.innerHTML = firstValue + secondValue;
      break;
    case "-":
      resultDiv.innerHTML = firstValue - secondValue;
      break;
    case "*":
      resultDiv.innerHTML = firstValue * secondValue;
      break;
    case "/":
      if (secondValue === 0) {
        resultDiv.innerHTML = "Can't divide by 0";
      } else {
        resultDiv.innerHTML = firstValue / secondValue;
      }
      break;
    default:
      resultDiv.innerHTML = "Invalid operator";
  }
});

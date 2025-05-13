function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case "add":
        result = `Result: ${num1 + num2}`;
        break;
      case "subtract":
        result = `Result: ${num1 - num2}`;
        break;
      case "multiply":
        result = `Result: ${num1 * num2}`;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = `Result: ${num1 / num2}`;
        }
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById("result").textContent = result;
}

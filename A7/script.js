function calculateAll() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let output = "";

  if (isNaN(num1) || isNaN(num2)) {
    output = "Please enter valid numbers.";
  } else {
    output += `Addition: ${num1 + num2}<br/>`;
    output += `Subtraction: ${num1 - num2}<br/>`;
    output += `Multiplication: ${num1 * num2}<br/>`;
    if (num2 === 0) {
      output += `Division: Cannot divide by zero.`;
    } else {
      output += `Division: ${num1 / num2}`;
    }
  }

  document.getElementById("result").innerHTML = output;
}

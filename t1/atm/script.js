const customers = [
  { card: "1234567890", pin: "1234", name: "Ashfaq", balance: 0 },
  { card: "1234567891", pin: "12345", name: "Nithish", balance: 0 },
];

const login = () => {
  const card = document.getElementById("card").value;
  const pin = document.getElementById("pin").value;
  const msg = document.getElementById("msg");
  const box = document.getElementById("login-box");

  const customer = customers.find(c => c.card === card && c.pin === pin); // <-- Use c.card

  if (customer) {
    box.innerHTML = `<h2>Welcome, ${customer.name}!</h2>`;
  } else {
    msg.textContent = "Invalid card number or PIN!";
  }
};

const products = [
  { id: 1, name: "Product 1", price: 34 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const cart = {};

const addToCart = (id) => {
  if (!cart[id]) {
    cart[id] = 1;
  }
  dispCart();
};

const increment = (id) => {
  cart[id] += 1;
  dispCart();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart[id] -= 1;
  } else {
    delete cart[id];
  }
  dispCart();
};

const dispCart = () => {
  let str = "<h2>Cart</h2>";
  products.forEach((product) => {
    if (cart[product.id]) {
      str += `
        <div class="cart-item">
          <strong>${product.name}</strong> - $${product.price}<br/>
          <button onclick='decrement(${product.id})'>-</button>
          ${cart[product.id]}
          <button onclick='increment(${product.id})'>+</button>
          <br/>Subtotal: $${product.price * cart[product.id]}
        </div>
      `;
    }
  });

  const total = products.reduce(
    (sum, p) => sum + p.price * (cart[p.id] || 0), 0
  );

  str += `<h3>Total: $${total}</h3>`;
  document.getElementById("root").innerHTML = str;
};

const showProducts = () => {
  let str = "";
  products.forEach((product) => {
    str += `
      <div class="product">
        <h3>${product.name}</h3>
        <h4>Price: $${product.price}</h4>
        <button onclick='addToCart(${product.id})'>Add to Cart</button>
      </div>
    `;
  });

  document.getElementById("root").innerHTML = "<div class='row'>" + str + "</div>";
};

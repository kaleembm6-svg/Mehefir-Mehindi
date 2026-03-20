let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  alert(name + " added");
}

function checkout() {
  let message = "Order:%0A";

  cart.forEach(item => {
    message += `${item.name} - ₹${item.price}%0A`;
  });

  window.open(`https://wa.me/9963152996?text=${message}`);
}

function sendToWhatsApp(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let msg = document.getElementById("msg").value;

  let url = `https://wa.me/91XXXXXXXXXX?text=Name:${name}%0APhone:${phone}%0AMessage:${msg}`;

  window.open(url);
}
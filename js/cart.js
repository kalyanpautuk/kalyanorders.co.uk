document.addEventListener('DOMContentLoaded', function () {
  let cartCount = 0;
  window.addToCart = function (itemName) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert(`Order for "${itemName}" submitted. You will receive updates at +44 7450480241.`);
  };
});

document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.product button');
  const cartCount = document.getElementById('cart-count');

  // Load existing cart from localStorage or empty if none
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Update the cart count display on page load
  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  // Function to handle Add to Cart
  function addToCart(event) {
    const productElement = event.target.closest('.product');
    const productName = productElement.querySelector('h3').innerText;
    const productPrice = parseFloat(productElement.querySelector('p').innerText.replace('$', ''));
    const productImage = productElement.querySelector('img').src;

    // Create an object for the product
    const product = {
      name: productName,
      price: productPrice,
      image: productImage,
    };

    // Add to cart array
    cart.push(product);
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Update cart count
    if (cartCount) {
      cartCount.textContent = cart.length;
    }

    alert(`${productName} added to cart!`);
  }

  // Attach event listeners
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', addToCart);
  });
});

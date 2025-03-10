document.addEventListener('DOMContentLoaded', function () {
  // Load the cart array from localStorage or empty if none
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Grab DOM elements
  const cartItemsContainer = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  const cartCountElement = document.getElementById('cart-count');
  // If you want to display item count in the nav

  // Display the cart items & total
  function displayCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      // Create container for each cart item
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');

      // Product image
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;

      // Info container
      const infoDiv = document.createElement('div');
      infoDiv.innerHTML = `
          <h4>${item.name}</h4>
          <p>$${item.price.toFixed(2)}</p>
        `;

      // Remove button
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        removeItem(index);
      });

      // Build the item row
      itemDiv.appendChild(img);
      itemDiv.appendChild(infoDiv);
      itemDiv.appendChild(removeBtn);

      // Add to container
      cartItemsContainer.appendChild(itemDiv);

      // Update total
      total += item.price;
    });

    // Update total display
    cartTotalElement.textContent = total.toFixed(2);

    // Update nav count
    if (cartCountElement) {
      cartCountElement.textContent = cart.length;
    }
  }

  // Remove an item by its index in array
  function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }

  // On page load
  displayCart();
});

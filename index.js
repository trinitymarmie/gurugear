document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".product button");
    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Function to add item to cart
    function addToCart(event) {
        const productElement = event.target.closest(".product");
        const productName = productElement.querySelector("h3").innerText;
        const productPrice = parseFloat(productElement.querySelector("p").innerText.replace("$", ""));
        const productImage = productElement.querySelector("img").src;

        // Create an object for the product
        const product = { name: productName, price: productPrice, image: productImage };

        // Add to cart array
        cart.push(product);

        // Save to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update cart count display
        cartCount.textContent = cart.length;

        alert(`${productName} added to cart!`);
    }

    // Attach event listeners to all "Add to Cart" buttons
    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // Update the cart count on page load
    cartCount.textContent = cart.length;
});



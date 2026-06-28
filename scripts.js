// Add to Cart Button
const cartBtn = document.querySelector(".cart");

cartBtn.addEventListener("click", function () {
    alert("Product added to cart successfully!");
});

// Buy Now Button
const buyBtn = document.querySelector(".buy");

buyBtn.addEventListener("click", function () {
    alert("Proceeding to Checkout...");
});

// Search Box
const searchInput = document.querySelector(".search input");

searchInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        alert("Searching for: " + searchInput.value);
    }
});
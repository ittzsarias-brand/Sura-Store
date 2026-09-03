const defaultProducts = [
    {
        id: 1,
        name: "Example Product",
        description: "Product description goes here.",
        price: 0.00,
        image: ""
    }
];

function getProducts() {
    const savedProducts = localStorage.getItem("suraStoreProducts");

    if (savedProducts) {
        try {
            return JSON.parse(savedProducts);
        } catch (error) {
            console.error("Could not load products:", error);
        }
    }

    localStorage.setItem(
        "suraStoreProducts",
        JSON.stringify(defaultProducts)
    );

    return defaultProducts;
}

function displayProducts() {
    const productsContainer = document.querySelector(".products");

    if (!productsContainer) {
        return;
    }

    const products = getProducts();

    productsContainer.innerHTML = "";

    if (products.length === 0) {
        productsContainer.innerHTML = `
            <p>No products available yet.</p>
        `;
        return;
    }

    products.forEach(product => {
        const productElement = document.createElement("div");

        productElement.className = "product";

        productElement.innerHTML = `
            <div class="product-image">
                ${
                    product.image
                        ? `<img src="${product.image}" alt="${product.name}">`
                        : "Product Image"
                }
            </div>

            <div class="product-info">
                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">
                    $${Number(product.price).toFixed(2)}
                </div>
            </div>
        `;

        productsContainer.appendChild(productElement);
    });
}

document.addEventListener("DOMContentLoaded", displayProducts);

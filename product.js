document.addEventListener('DOMContentLoaded', () => {
    const refreshButton = document.getElementById('refresh');
    const productList = document.getElementById('product-list');

    // Event listener for the refresh button click
    refreshButton.addEventListener('click', async () => {
        try {
            // Fetch products from the Fake Store API
            const products = await fetchProducts();
            // Clear the existing product list
            productList.innerHTML = '';
            // Display the refreshed products
            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error.message);
            alert('Failed to fetch products. Please try again later.');
        }
    });

    // Function to fetch products from the Fake Store API
    async function fetchProducts() {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    }

    // Function to display products in the product list
    function displayProducts(products) {
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');

            const image = document.createElement('img');
            image.src = product.image;
            image.alt = product.title;

            const title = document.createElement('div');
            title.classList.add('product-title');
            title.textContent = product.title;

            const price = document.createElement('div');
            price.classList.add('product-price');
            price.textContent = `$${product.price}`;

            productItem.appendChild(image);
            productItem.appendChild(title);
            productItem.appendChild(price);

            productList.appendChild(productItem);
        });
    }
});

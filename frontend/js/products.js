// Fetch all products and display in table
async function fetchProducts() {
    try {
        const response = await fetch('http://localhost:9800/products/getAll');
        const products = await response.json();
        const tableBody = document.querySelector('#product-table tbody');
        tableBody.innerHTML = '';  // Clear existing rows

        products.forEach((product) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.quantity}</td>
                <td>${product.description}</td>
                <td>
                    <button onclick="updateProduct(${product.id})">Update</button>
                    <button onclick="deleteProduct(${product.id})">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Update product by ID
async function updateProduct(id) {
    const updatedProduct = {
        name: prompt('Enter new name:'),
        price: prompt('Enter new price:'),
        quantity: prompt('Enter new quantity:'),
        description: prompt('Enter new description:'),
    };

    try {
        const response = await fetch(`http://localhost:9800/products/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedProduct),
        });

        const result = await response.json();
        alert(result.message);
        fetchProducts();  // Refresh the product list
    } catch (error) {
        console.error('Error updating product:', error);
    }
}

// Delete product by ID
async function deleteProduct(id) {
    try {
        const response = await fetch(`http://localhost:9800/products/delete/${id}`, {
            method: 'DELETE',
        });

        const result = await response.json();
        alert(result.message);
        fetchProducts();  // Refresh the product list
    } catch (error) {
        console.error('Error deleting product:', error);
    }
}

// Initialize
fetchProducts();

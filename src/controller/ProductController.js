import { createConnectionObject } from '../config/DbConfig.js';

const connection = createConnectionObject();

export function saveProduct(request, response) {
    try {
        const { id, name, price, quantity, description } = request.body;
        const insertQuery = `INSERT INTO product (id, name, price, quantity, description) VALUES (?, ?, ?, ?, ?)`;
        connection.query(insertQuery, [id, name, price, quantity, description], (error) => {
            if (error) {
                response.status(500).send({ message: 'Something went wrong' });
            } else {
                response.status(201).send({ message: 'Product saved successfully' });
            }
        });
    } catch (error) {
        response.status(500).send({ message: 'Something went wrong' });
    }
}

export function getAllProduct(request, response) {
    try {
        const fetchQuery = 'SELECT * FROM product';
        connection.query(fetchQuery, (error, result) => {
            if (error) {
                response.status(500).send({ message: 'Something went wrong' });
            } else {
                response.status(200).send(result);
            }
        });
    } catch (error) {
        response.status(500).send({ message: 'Something went wrong' });
    }
}

export function updateProduct(request, response) {
    const id = request.params.id;
    const { name, price, quantity, description } = request.body;
    const updateQuery = 'UPDATE product SET name = ?, price = ?, quantity = ?, description = ? WHERE id = ?';
    connection.query(updateQuery, [name, price, quantity, description, id], (error, result) => {
        if (error) {
            console.error(error);
            response.status(500).send({ message: 'Error updating product' });
        } else {
            if (result.affectedRows === 0) {
                response.status(404).send({ message: 'Product not found' });
            } else {
                response.status(200).send({ message: 'Product updated successfully' });
            }
        }
    });
}

export function deleteProduct(request, response) {
    const id = request.params.id;
    const deleteQuery = 'DELETE FROM product WHERE id = ?';
    connection.query(deleteQuery, [id], (error, result) => {
        if (error) {
            console.error(error);
            response.status(500).send({ message: 'Error deleting product' });
        } else {
            response.status(200).send({ message: 'Product deleted successfully' });
        }
    });
}

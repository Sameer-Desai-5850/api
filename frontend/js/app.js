// frontend/app.js
$(document).ready(function() {
    $('#productForm').submit(function(e) {
        e.preventDefault();

        const productData = {
            id: $('#id').val(),
            name: $('#name').val(),
            price: $('#price').val(),
            quantity: $('#quantity').val(),
            description: $('#description').val(),
        };

        $.ajax({
            url: 'http://localhost:9800/products/save',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(productData),
            success: function(response) {
                $('#message').text('Product added successfully!');
                $('#productForm')[0].reset();
            },
            error: function(xhr, status, error) {
                $('#message').text('Error adding product: ' + error);
            }
        });
    });
});
 
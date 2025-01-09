$(document).ready(function () {

    $('.add-to-cart').click(function () {
        var productName = $(this).closest('.product').find('h3').text()
        var productPrice = $(this).closest('.product').find('p').text()
        var productImage = $(this).closest('.product').find('img').attr('src')

        var cartItem = '<li class="cart-item">' +
            '<img src="' + productImage + '" alt="' + productName + '" width="50px">' +
            '<span>' + productName + '</span>' +
            '<span>' + productPrice + '</span>' +
            '<button class="remove-from-cart">Remove</button>' +
            '</li>'

        $('#cart-items').append(cartItem)
    })

    $(document).on('click', '.remove-from-cart', function () {
        $(this).closest('.cart-item').remove()
    })

    $('#search').keyup(function () {
        var searchQuery = $(this).val().toLowerCase()
        $('.product').each(function () {
            var productName = $(this).data('name').toLowerCase()
            if (productName.indexOf(searchQuery) !== -1) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })
    })

})

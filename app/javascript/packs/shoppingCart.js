// Set values + misc
// var promoCode;
// var promoPrice;
// var fadeTime = 300;
//
// // Assign actions
document.addEventListener('DOMContentLoaded', function() {
    let quantityInputs = document.querySelectorAll('.quantity input');
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            console.log(this);
            // updateQuantity(this);
        });
    });
});

//     let removeButtons = document.querySelectorAll('.remove button');
//     removeButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             removeItem(this);
//         });
//     });
// //
//     let promoCodeCTA = document.querySelector('.promo-code-cta');
//     promoCodeCTA.addEventListener('click', function() {
//         promoCode = document.getElementById('promo-code').value;
//
//         if (promoCode == '10off' || promoCode == '10OFF') {
//             if (!promoPrice) {
//                 promoPrice = 10;
//             } else if (promoCode) {
//                 promoPrice = promoPrice * 1;
//             }
//         } else if (promoCode !== '') {
//             alert("Invalid Promo Code");
//             promoPrice = 0;
//         }
//
//         if (promoPrice) {
//             document.querySelector('.summary-promo').classList.remove('hide');
//             document.querySelector('.promo-value').textContent = promoPrice.toFixed(2);
//             recalculateCart(true);
//         }
//     });
//
//     updateSumItems();
// });
//
// // Other functions remain largely the same but with jQuery replaced by vanilla JS.
//
// function recalculateCart(onlyTotal) {
//     var subtotal = 0;
//
//     let basketProducts = document.querySelectorAll('.basket-product');
//     basketProducts.forEach(product => {
//         subtotal += parseFloat(product.querySelector('.subtotal').textContent);
//     });
//
//     var total = subtotal;
//
//     var promoPrice = parseFloat(document.querySelector('.promo-value').textContent);
//     if (promoPrice) {
//         if (subtotal >= 10) {
//             total -= promoPrice;
//         } else {
//             alert('Order must be more than £10 for Promo code to apply.');
//             document.querySelector('.summary-promo').classList.add('hide');
//         }
//     }
//
//     let totalValueElem = document.querySelector('.total-value');
//     if (onlyTotal) {
//         totalValueElem.style.display = 'none';
//         setTimeout(function() {
//             document.getElementById('basket-total').textContent = total.toFixed(2);
//             totalValueElem.style.display = '';
//         }, fadeTime);
//     } else {
//         // similar method for '.final-value'
//     }
// }
//
// function updateQuantity(quantityInput) {
//     let productRow = quantityInput.closest('.basket-product');
//     let price = parseFloat(productRow.querySelector('.price').textContent);
//     let quantity = quantityInput.value;
//     let linePrice = price * quantity;
//
//     let subtotalElem = productRow.querySelector('.subtotal');
//     subtotalElem.style.display = 'none';
//     setTimeout(function() {
//         subtotalElem.textContent = linePrice.toFixed(2);
//         recalculateCart();
//         subtotalElem.style.display = '';
//     }, fadeTime);
//
//     productRow.querySelector('.item-quantity').textContent = quantity;
//     updateSumItems();
// }
//
// function updateSumItems() {
//     let sumItems = 0;
//     let quantityInputs = document.querySelectorAll('.quantity input');
//     quantityInputs.forEach(input => {
//         sumItems += parseInt(input.value);
//     });
//     document.querySelector('.total-items').textContent = sumItems;
// }

// console.log("I'm here in shoppingCart.js");
//
// function removeItem(removeButton) {
//     let productRow = removeButton.closest('.basket-product');
//     productRow.style.display = 'none';
//     setTimeout(function() {
//         productRow.parentNode.removeChild(productRow);
//         recalculateCart();
//         updateSumItems();
//     }, fadeTime);
// }

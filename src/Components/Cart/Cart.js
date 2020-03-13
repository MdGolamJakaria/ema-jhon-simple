import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

///// total price

    let total = 0;
    for(let i=0; i< cart.length; i++){
        const product = cart[i];
        total = (total + product.price);
    }

////Shipping cost condition
    let shipping= 0;

    if (total > 35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }
///// tax Amount 
    const tax= (total / 10).toFixed(2);
    const taxAmount = Number(tax);

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Order: {cart.length} </p>
            <p>Product Price: {total} </p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + Vat : {taxAmount}</p>
            <p>Total Price: {total + shipping + taxAmount}</p>
        </div>
    );
};

export default Cart;
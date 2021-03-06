import React, { useEffect, useState } from 'react';
import "../Review/Review.css";
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import Reviewitem from '../Reviewitem/Reviewitem';
import Cart from '../Cart/Cart';
import happyImage from '../../images/giphy.gif'

const Review = () => {
    
    const[cart, setCart] = useState([])
    const [orderPlaced, setOrderPlaced]= useState(false);
    const handlePlaceOrder =() =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }

    const RemoveProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart (newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(()=>{
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts= productKeys.map(key => {    
        const product = fakeData.find(pd =>pd.key === key);
        product.quantity = savedCart[key];
        return product;
        });
        setCart(cartProducts);
    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }
    return (
        <div className="review-container">
            <div className=" product-container">
            <h1>Cart items: {cart.length}</h1>
            {
                cart.map(pd=><Reviewitem 
                    key={pd.key}
                    removeProduct={RemoveProduct}
                    product={pd}></Reviewitem>)
            }

            {
               thankYou

            }

            </div>


            <div className=" cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="main-button">
                        Place Order
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
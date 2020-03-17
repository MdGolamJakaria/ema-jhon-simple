import React from 'react';
import './Reviewitem.css';
const Reviewitem = (props) => {
    //console.log(props);
    const {name,quantity,key,price}=props.product;
    return (
        <div  className='review-item'>
            <h4>{name}</h4>
            <p>Quantity:{quantity} </p> 
            <br/>
            <p> Price:{price} </p>
            <button className='main-button'
            onClick={()=>props.removeProduct(key)}>
                remove</button>

        </div>
    );
};

export default Reviewitem;
import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {name,img,seller,price,stock} = props.product;
    return (
        <div className='product'>
          <div className='image-sec'>
              <img src={img} alt="" />
          </div>
          <div className='data-sec'>
                <h5>{name}</h5> 
                <p><small>-by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left in stock, order soon</small></p>
                <button className='cart-button' onClick={() => props.handleAddProduct(props.product)} > <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>
          </div>
        </div>
    );
};

export default Product;
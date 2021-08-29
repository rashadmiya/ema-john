import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
   const firstTenData = fakeData.slice(0,10);
  const [products, setProduct] = useState(firstTenData);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) =>{
      const newCart = [...cart,product];
      setCart(newCart);
  }
    return (
        <div className="main-container">
            <div className="product-container">
                <h3>products found : {products.length}</h3>
                    {
                        products.map(item => <Product product={item} handleAddProduct={handleAddProduct}key={item.key}></Product>)
                    }
            </div>
            <div className="cart-container">
                <Cart product={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
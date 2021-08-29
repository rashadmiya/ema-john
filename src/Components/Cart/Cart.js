import React from 'react';

const Cart = (props) => {
    const cartedProduct = props.product;
    const totall =  cartedProduct.reduce((total,product) => total + product.price,0);
    let monys = totall;
    let shiping = 0
    if(monys>100){
        shiping = 0
    }else if(monys>50){
        shiping=5.99;
    }else if(monys>0){
        shiping = 12.99;
    }
   
    monys = (monys+shiping).toFixed(2)
    return (
        <div>
            
            <h4>Item Ordered: {props.product.length}</h4>
            <p><small>shipping: {shiping}</small></p>
            <p>Totall Price : {monys}</p>
        </div>
    );
};

export default Cart;
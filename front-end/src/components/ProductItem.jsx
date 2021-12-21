import React from 'react';
import './ProductItem.css';
    
    
const ProductItem = (props) => {
    return (
            <div className='productCard' >
                <input className='Cardcheckbox' type='checkbox' onChange={props.onChange} key={props.post.id} id={props.post.id} value={'id'}></input>
                {console.log(props.post.id)}
                <div className='productCardItems'>
                    <div>{props.post.sku}</div>
                    <div>{props.post.name}</div>
                    <div>{props.post.price + '$'}</div>
                    <div>{props.post.attribute}</div>
                </div>
            </div>
    );
};

export default ProductItem;
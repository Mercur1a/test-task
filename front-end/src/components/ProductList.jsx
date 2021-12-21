import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({onChange, posts, revome}) => {
    return (
        <div className='product_list'>
            {posts.map((post) => (
                <ProductItem onChange={onChange} post={post} key={post.id} />))}
            {console.log(posts)}
        </div>
    );
};

export default ProductList;
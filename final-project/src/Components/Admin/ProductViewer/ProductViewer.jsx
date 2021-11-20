import React from 'react';
import Product from './Product/Product';
import SearchBar from './SearchBar/SearchBar';

const ProductViewer = () => {
    return (
        <div className='flex flex-col w-1/2'>
            <SearchBar />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default ProductViewer;
import React, { useState, useEffect } from 'react';
import { useAdminServices } from '../../../Services/Admin.services';
import Product from './Product/Product';
import SearchBar from './SearchBar/SearchBar';

const ProductViewer = () => {
    const [ adminPosts, setAdminPosts ] = useState([]);

    useEffect(() => {
        const fetchAdminPosts = async () => {
            try {
                const loginInfo = await useAdminServices.tempLogin();

                const token = loginInfo['token'];

                const response = await useAdminServices.getAdminPosts(token, 15, 0);

                setAdminPosts( response['data'] );
            } catch (error) {
                console.log(error);
            };
        }

        fetchAdminPosts();
    }, []);

    return (
        <div className='flex flex-col w-1/2'>
            <SearchBar />
            { adminPosts.map(post => {
                return <Product
                key={post.title}
                title={post.title}/>
            })}
        </div>
    );
}

export default ProductViewer;
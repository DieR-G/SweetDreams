import React, { useState, useEffect } from 'react';
import { useAdminContext } from '../../../Contexts/AdminContext';
import { useAdminServices } from '../../../Services/Admin.services';
import PaginationButton from './PaginationButton/PaginationButton';
import Product from './Product/Product';
import SearchBar from './SearchBar/SearchBar';

const ProductViewer = () => {
    const { formState } = useAdminContext();
    const [ adminPosts, setAdminPosts ] = useState([]);
    const [ page, setPage] = useState(0);

    useEffect(() => {
        const fetchAdminPosts = async () => {
            try {
                const loginInfo = await useAdminServices.tempLogin();

                const token = loginInfo['token'];

                const response = await useAdminServices.getAdminPosts( token, 10, page );

                setAdminPosts( response['data'] );
            } catch (error) {
                console.log(error);
            };
        }

        fetchAdminPosts();
    }, [ page, formState ]);

    const onPrevPagination = () => {
        let newPage = page;
        
        if ( newPage === 0 ) {
            return;
        } else {
            newPage -= 1;
            setPage( newPage);
        }
    }

    const onNextPagination = () => {
        let newPage = page;
        
        newPage += 1;
        setPage( newPage );
    }

    return (
        <div className='flex flex-col w-1/2'>
            <SearchBar />
            
            { adminPosts.map(post => {
                return <Product
                key={post._id}
                id={post._id}
                title={post.title} 
                active={post.active} />
            })}
            
            <div className='flex items-center justify-center mt-6'>
                <PaginationButton actionText='Previus' onPagination={ onPrevPagination }/>
                <PaginationButton actionText='Next' onPagination={ onNextPagination }/>
            </div>
        </div>
    );
}

export default ProductViewer;
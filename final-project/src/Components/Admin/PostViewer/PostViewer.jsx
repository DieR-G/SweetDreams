import React, { useState, useEffect } from 'react';
import { useAdminContext } from '../../../Contexts/AdminContext';
import { useAdminServices } from '../../../Services/Admin.services';
import PaginationButton from './PaginationButton/PaginationButton';
import Post from './Post/Post';
import SearchBar from './SearchBar/SearchBar';

const PostViewer = () => {
    const { formState, postState } = useAdminContext();
    const [ adminPosts, setAdminPosts ] = useState([]);
    const [clear, setClear] = useState(false);
    const [ page, setPage ] = useState(0);

    useEffect(() => {
        const fetchAdminPosts = async () => {
            try {
                const loginInfo = await useAdminServices.tempLogin();

                const token = loginInfo['token'];

                const response = await useAdminServices.getAdminPosts( token, 10, page );

                console.log('renderizando');

                setAdminPosts( response['data'] );
            } catch (error) {
                console.log(error);
            };
        }

        fetchAdminPosts();
    }, [ page, formState, postState, clear ]);

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
            <SearchBar searchFunction={ setAdminPosts } clearFunction={ setClear } />
            
            { adminPosts.map(post => {
                return <Post
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

export default PostViewer;
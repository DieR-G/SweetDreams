import React, { useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/all'
import { useAdminServices } from '../../../../Services/Admin.services';

const SearchBar = ( { searchFunction = () => { }, clearFunction = () => { } } ) => {
    const [search, setSearch] = useState('');

    //function created to find one specific post, according to user input
    const searchPost = async ( searchText, setter = () => {} ) => {
        try {
            //token shall be added when login is incorporated
            //const token = 
            let found = false;

            //number of page to query
            let page = 0;
            let response;
            const loginInfo = await useAdminServices.tempLogin();

            const token = loginInfo['token'];

            console.log(token);

            do {
                response = await useAdminServices.getAdminPosts( token, 100, page );

                console.log( response.data );

                if (response['data'].some(post => post.title === searchText))
                    found = true;
                else
                    page += 1;
            } while (found === false);

            if (found) {   //retriving the post needed 
                const searchedPost = response['data'].filter(post => post.title === searchText)
                setter(searchedPost);
            }
            else {
                console.log("error: Data not found");
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex justify-center mt-5'>
            <input 
                type='text' 
                placeholder='Search a post by its title here' 
                className='border-2 border-gray-300 font-normal px-3 py-1 rounded-l-lg text-base w-1/2'
                onChange={ (e) => { setSearch(e.target.value) } }
                value={ search }
            />
            <div 
                onClick={ (e) => { e.preventDefault(); searchPost(search, searchFunction); clearFunction(true); setSearch('') } }
                className='bg-purple-600 hover:bg-purple-800 border-2 border-gray-400 cursor-pointer flex items-center justify-center px-3 py-1 rounded-r-lg text-lg text-white'>
                <BiSearchAlt2 />
            </div>
        </div>
    );
}

export default SearchBar;
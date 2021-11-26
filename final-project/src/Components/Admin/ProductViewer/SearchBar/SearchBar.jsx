import React from 'react';
import { BiSearchAlt2 } from 'react-icons/all'

const SearchBar = () => {
    return (
        <div className='flex justify-center mt-5'>
            <input type='text' placeholder='Search a post by its title here' 
                className='border-2 border-gray-300 font-normal px-3 py-1 rounded-l-lg text-base w-1/2'
            />
            <div onClick={ ()=> {} }
                className='bg-purple-900 hover:bg-purple-600 border-2 border-gray-400 cursor-pointer flex items-center justify-center px-3 py-1 rounded-r-lg text-lg text-white'>
                <BiSearchAlt2 />
            </div>
        </div>
    );
}

export default SearchBar;
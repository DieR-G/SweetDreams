import React from 'react';
import { BiSearchAlt2 } from 'react-icons/all'

const SearchBar = () => {
    return (
        <div className='flex justify-center mt-5'>
            <input type='text' placeholder='Search a post by its title here' 
                className='font-normal border-2 border-gray-300 px-3 py-1 rounded-l-lg text-base w-1/2'
            />
            <div onClick={ ()=> {} }
                className='flex justify-center items-center cursor-pointer border-gray-400 border-2 bg-purple-900 hover:bg-purple-600 text-white px-3 py-1 rounded-r-lg text-lg'>
                <BiSearchAlt2 />
            </div>
        </div>
    );
}

export default SearchBar;
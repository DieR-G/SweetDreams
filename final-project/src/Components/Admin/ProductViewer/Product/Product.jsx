import React from 'react';
import { AiOutlineEye, BiEditAlt, FiTrash2 } from 'react-icons/all';

const Product = ( {title } ) => {
    return (
        <div className='border-2 border-purple-900 flex h-12 items-center justify-between mx-4 mt-5 rounded'>
            <div className='ml-4 w-9/12'>
                <h2 className='font-round text-base'>{ title }</h2>
            </div>

            <div className='flex h-full justify-between text-white text-2xl w-3/12 '>
                <div onClick={ ()=> {} }
                    className='bg-green-600 hover:bg-green-700 cursor-pointer flex h-full items-center justify-center w-4/12 '>
                    <AiOutlineEye />
                </div>

                <div onClick={ ()=> {} }
                    className='bg-yellow-500 hover:bg-yellow-700 cursor-pointer flex h-full justify-center items-center w-4/12'>
                    <BiEditAlt />
                </div>

                <div onClick={ ()=> {} }
                    className='bg-red-500 hover:bg-red-800 cursor-pointer flex h-full items-center justify-center w-4/12'>
                    <FiTrash2 />
                </div>
            </div>
        </div>
    );
}

export default Product;

import React from 'react';
import { AiOutlineEye, BiEditAlt, FiTrash2 } from 'react-icons/all';

const Product = () => {
    return (
        <div className='flex justify-between items-center border-2 border-purple-900 rounded mt-5 mx-4 h-12'>
            <div className='ml-4 w-9/12'>
                <h2 className='font-round text-base'> Title: Programación web </h2>
            </div>

            <div className='flex justify-between w-3/12 h-full text-white text-3xl'>
                <div onClick={ ()=> {} }
                    className='flex justify-center items-center bg-green-600 hover:bg-green-700 w-4/12 h-full cursor-pointer'>
                    <AiOutlineEye />
                </div>

                <div onClick={ ()=> {} }
                    className='flex justify-center items-center bg-yellow-500 hover:bg-yellow-700 w-4/12 h-full items-center cursor-pointer'>
                    <BiEditAlt />
                </div>

                <div onClick={ ()=> {} }
                    className='flex justify-center items-center bg-red-500 hover:bg-red-800 w-4/12 h-full items-center cursor-pointer'>
                    <FiTrash2 />
                </div>
            </div>
        </div>
    );
}

export default Product;

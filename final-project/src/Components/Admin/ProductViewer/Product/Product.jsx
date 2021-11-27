import React from 'react';
import { AiOutlineEye, BiEditAlt, FiTrash2 } from 'react-icons/all';
import { useAdminServices } from '../../../../Services/Admin.services';

const Product = ( { id, title, active } ) => {

    const toggleActive = async () => {
        try {
            const loginInfo = await useAdminServices.tempLogin();
            const token = loginInfo['token'];

            const response = await useAdminServices.toggleActive( token, id );
            
            if( response ) {
                console.log( response );
            } else {
                console.log('Ha ocurrido un error');
            }
        } catch ( error ) {
            console.log( error );
        }
    }

    return (
        <div className='border-2 border-purple-900 flex h-12 items-center justify-between mx-4 mt-5 rounded'>
            <div className='ml-4 w-9/12'>
                <h2 className='font-round text-base'>{ title }</h2>
            </div>

            <div className='flex h-full justify-between text-white text-2xl w-3/12 '>
                <div onClick={ () => {} }
                    className='bg-green-600 hover:bg-green-700 cursor-pointer flex h-full items-center justify-center w-4/12 '>
                    <AiOutlineEye />
                </div>

                <div onClick={ () => {} }
                    className='bg-yellow-500 hover:bg-yellow-700 cursor-pointer flex h-full justify-center items-center w-4/12'>
                    <BiEditAlt />
                </div>

                <div onClick={ () => { toggleActive(); } }
                    className='bg-red-500 hover:bg-red-800 cursor-pointer flex h-full items-center justify-center w-4/12'>
                    <FiTrash2 />
                </div>
            </div>
        </div>
    );
}

export default Product;

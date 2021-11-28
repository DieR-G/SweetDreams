import React from 'react';
import { BiCommentDetail, BiEditAlt, AiOutlineEyeInvisible } from 'react-icons/all';
import { useAdminContext } from '../../../../../Contexts/AdminContext';

const ActivatePost = ( { id, title, toggleActive = () => {} } ) => {
    const { setFormState, setPostId } = useAdminContext();

    return (
        <div className='border-2 border-purple-900 flex h-12 items-center justify-between mx-4 mt-5 rounded'>
            <div className='ml-4 w-9/12'>
                <h2 className='font-round text-base'>{ title }</h2>
            </div>
            
            <div className='flex h-full justify-between text-white text-2xl w-3/12 '>
                <div onClick={ () => {} }
                    className='bg-blue-500 hover:bg-blue-700 cursor-pointer flex h-full items-center justify-center w-4/12 '>
                    <BiCommentDetail />
                </div>

                <div onClick={ () => { setFormState( 'edit' ); setPostId( id ); } }
                    className='bg-yellow-500 hover:bg-yellow-600 cursor-pointer flex h-full justify-center items-center w-4/12'>
                    <BiEditAlt />
                </div>

                <div onClick={ () => { toggleActive(); } }
                    className='bg-red-500 hover:bg-red-700 cursor-pointer flex h-full items-center justify-center w-4/12'>
                    <AiOutlineEyeInvisible />
                </div>
            </div>
        </div>
    );
}

export default ActivatePost;
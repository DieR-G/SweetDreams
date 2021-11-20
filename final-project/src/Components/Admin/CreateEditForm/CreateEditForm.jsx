import React from 'react';

const CreateEditForm = () => {
    return (
        <div className='bg-purple-900 w-1/2 flex flex-col items-center'>
            <form action='' className='flex flex-col w-4/5 mt-5 bg-gray-100 p-5 rounded-lg'>
                <h2 className='text-center text-3xl font-normal font-bold'>Create post</h2>

                <label htmlFor='title-input' className='mt-2'>Title</label>
                <input 
                    type='text' 
                    id='title-input' 
                    name='title' 
                    placeholder='f.e. The benefits of exercise' 
                    className='mt-1 border-2 border-gray-300 rounded px-3 py-1' 
                    required
                />

                <label htmlFor='description-text-area' className='mt-4'>Description</label>
                <textarea 
                    id='description-text-area' 
                    name='description' 
                    cols='40' 
                    rows='5' 
                    placeholder='f.e. The health benefits of regular physical activity and exercise cannot be ignored. Everyone benefits from exercise, regardless of age, gender, or physical ability.' 
                    className='mt-1 border-2 border-gray-300 rounded px-3 py-1'
                    required 
                />

                <label htmlFor='image-input' className='mt-4'>Image</label>
                <input 
                    type='text' 
                    id='image-input' 
                    name='image' 
                    placeholder='f.e. https://health.clevelandclinic.org/wp-content/uploads/sites/3/2013/09/inexpensiveExercise-1277759983-770x533-1.jpg' 
                    className='mt-1 border-2 border-gray-300 rounded px-3 py-1'
                    required 
                />

                <div className='flex justify-evenly w-full'>
                    <button 
                        id='clear-all' 
                        className='mt-5 rounded px-2 py-1 w-2/6 text-center bg-gray-300 hover:bg-gray-500 self-center'
                    >Clear all</button>

                    <button 
                        type='submit' 
                        id='submit' 
                        className='mt-5 rounded px-2 py-1 w-2/6 text-center text-white bg-pink-500 hover:bg-pink-700 self-center'
                    >Create post</button>
                </div>
            </form>
        </div>
    );
}

export default CreateEditForm;
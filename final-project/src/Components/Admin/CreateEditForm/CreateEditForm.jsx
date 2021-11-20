import React from 'react';

const CreateEditForm = () => {
    return (
        <div className='bg-purple-900 w-1/2 flex flex-col items-center'>
            <form action='' className='flex flex-col mt-5'>
                <h2 className='text-center'>Create Post</h2>

                <label for='title-input' className='mt-2'>Title</label>
                <input 
                    type='text' 
                    id='title-input' 
                    name='title' 
                    placeholder='f.e. The benefits of exercise' 
                    className='mt-1' 
                    required
                />

                <label for='description-text-area' className='mt-4'>Description</label>
                <textarea 
                    id='description-text-area' 
                    name='description' 
                    cols='40' 
                    rows='5' 
                    placeholder='f.e. The health benefits of regular physical activity and exercise cannot be ignored. Everyone benefits from exercise, regardless of age, gender, or physical ability.' 
                    className='mt-1'
                    required 
                />

                <label for='image-input' className='mt-4'>Image</label>
                <input 
                    type='text' 
                    id='image-input' 
                    name='image' 
                    placeholder='f.e. https://health.clevelandclinic.org/wp-content/uploads/sites/3/2013/09/inexpensiveExercise-1277759983-770x533-1.jpg' 
                    className='mt-1'
                    required 
                />

                <button type='submit' id='submit' className='mt-5'>Create post</button>
            </form>
        </div>
    );
}

export default CreateEditForm;
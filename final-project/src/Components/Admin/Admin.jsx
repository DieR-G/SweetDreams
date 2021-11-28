import React from 'react';
import { AdminProvider } from '../../Contexts/AdminContext';
import CreateEditForm from './CreateEditForm/CreateEditForm';
import PostViewer from './PostViewer/PostViewer';

const Admin = () => {
    return (
        <AdminProvider>
            <div className='flex h-screen'>
                <CreateEditForm />
                <PostViewer />
            </div>  
        </AdminProvider>
    );
}

export default Admin;
import React from 'react';
import { AdminProvider } from '../../Contexts/AdminContext';
import CreateEditForm from './CreateEditForm/CreateEditForm';
import ProductViewer from './ProductViewer/ProductViewer';

const Admin = () => {
    return (
        <AdminProvider>
            <div className='flex h-screen'>
                <CreateEditForm />
                <ProductViewer />
            </div>  
        </AdminProvider>
    );
}

export default Admin;
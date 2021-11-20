import React from 'react';
import CreateEditForm from './CreateEditForm/CreateEditForm';
import ProductViewer from './ProductViewer/ProductViewer';

const Admin = () => {
    return (
        <div className='flex h-screen'>
            <CreateEditForm />
            <ProductViewer />
        </div>
    );
}

export default Admin;
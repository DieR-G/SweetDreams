import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { AdminProvider } from '../../Contexts/AdminContext';
import SessionContext from '../../Contexts/SessionContext';
import CreateEditForm from './CreateEditForm/CreateEditForm';
import PostViewer from './PostViewer/PostViewer';

const Admin = () => {
    const {authenticated} = useContext(SessionContext);
    let navigate = useNavigate();
    useEffect(()=>{
        if(!authenticated.logged || authenticated.role !== "admin"){
            navigate("/");
        }
    },[])
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
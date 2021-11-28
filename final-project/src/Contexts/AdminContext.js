import {
    createContext,
    useContext,
    useState,
} from 'react';

const AdminContext = createContext();

export const AdminProvider = ( props ) => {
    const [ formState, setFormState ] = useState( 'create' );
    const [ postId, setPostId ] = useState(undefined);
    const [ page, setPage ] = useState(0);

    const providerValue = {
        formState: formState,
        setFormState: setFormState,
        postId: postId,
        setPostId: setPostId,
        page: page,
        setPage: setPage,
    }
        
    return (
        <AdminContext.Provider value={ providerValue }>
            { props.children }
        </AdminContext.Provider>
    );
}

export const useAdminContext = () => {
    const context = useContext( AdminContext );

    if( !context ) {
        throw new Error( 'No estás dentro del Admin Context' );
    }

    return context;
}
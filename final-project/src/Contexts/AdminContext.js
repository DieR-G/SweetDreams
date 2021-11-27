import {
    createContext,
    useContext,
    useState,
} from 'react';

const AdminContext = createContext();

export const AdminProvider = ( props ) => {
    const [ formState, setFormState ] = useState( 'create' );
    const [ postId, setPostId ] = useState('');

    const changeFormState = newState => setFormState( newState );

    const changePostId = newPostId => setPostId( newPostId );

    const providerValue = {
        formState: formState,
        changeFormState: changeFormState,
        postId: postId,
        changePostId: changePostId,
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
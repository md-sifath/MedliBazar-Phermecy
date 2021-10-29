import React from 'react';
import { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const authContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    return (
        <div>
            <authContext.Provider value={allContext}>
            {children}
          </authContext.Provider>
        </div>
    );
};

export default AuthProvider;
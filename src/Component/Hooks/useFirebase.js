import React from 'react';
import { useState, useEffect } from 'react';
import {
    GoogleAuthProvider, getAuth, signInWithPopup, signOut,
    onAuthStateChanged, createUserWithEmailAndPassword
} from "firebase/auth";
import firebaseappinit from '../Firebase/Firebaseinit';

firebaseappinit();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const emailPasslogIn = (email,password) => {
         createUserWithEmailAndPassword(auth, email, password)
         .then(result =>{
             setUser(result.user);
         })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })

    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    return (
        user,
        error,
        googleSignIn,
        logOut,
        emailPasslogIn
    );
};

export default useFirebase;
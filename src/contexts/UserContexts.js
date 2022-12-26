import React, { createContext, useState,  useEffect} from 'react';
import {getAuth, GoogleAuthProvider,signInWithEmailAndPassword, signOut,createUserWithEmailAndPassword, onAuthStateChanged,updateProfile,signInWithPopup}from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContexts = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const googleProvider = new GoogleAuthProvider();


    // create new user
    const registerEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile
    const updateUserProfile = (profile) => {
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    };

    // google sign in
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // signInWithEmailAndPassword
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // sign out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
            .then(() => { })
            .catch((err) => { console.error(err) });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (current) => {
            setUser(current);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);



const authInfo = {
    user,
    logOut,
    registerEmailAndPassword,
    loginWithEmailAndPassword,
    updateUserProfile,
    googleSignIn
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
      
    );
};

export default UserContexts;
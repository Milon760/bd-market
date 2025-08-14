import React, { createContext, useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../Firebase/Firebase'


export const AuthContext = createContext()




const AuthProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState(() => {
        const saveUser = sessionStorage.getItem('user');
        return saveUser ? JSON.parse(saveUser) : false;
    })

    useEffect(() => {
        sessionStorage.setItem('user', JSON.stringify(userInfo))
    }, [userInfo])

    const [successMsg, setSuccessMsg] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const provider = new GoogleAuthProvider();


    const signUpEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInEmailAndPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUpGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    const SignOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        signUpEmailPassword,
        signInEmailAndPassword,
        signUpGoogle,
        userInfo,
        setUserInfo,
        SignOut,
        successMsg,
        setSuccessMsg,
        errorMsg,
        setErrorMsg,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
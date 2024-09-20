import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext= createContext()
const auth= getAuth(app)

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser]= useState()
    const [loader, setLoader]= useState(true)

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }
    const googleLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }
    const facebookLogIn = () => {
        setLoader(true)
        return signInWithPopup(auth, facebookProvider)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            }
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo= {
        user,
        loader,
        createUser,
        login,
        logout,
        googleLogIn,
        facebookLogIn


    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
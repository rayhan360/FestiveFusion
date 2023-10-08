import { createContext, useState, useEffect } from "react"
import PropTypes from 'prop-types';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import auth from "../firebase/Firebase.config";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    // authProviders
    const googleAuthProvider = new GoogleAuthProvider();

    // google sing in
    const googleSignIn = () => {
        return signInWithPopup(auth, googleAuthProvider)
    }


    // observe account
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return ()=> unSubscribe()
    },[])

    const info = {
        user,
        googleSignIn
    }
    return (
        <div>
            <AuthContext.Provider value={info}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};



AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
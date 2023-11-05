/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { 
    getAuth, 
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";
import app from "./firebase.config";

const auth = getAuth(app)

export const AuthContext = createContext(null)

const Authprovider = ({children}) => {
    //for stating see more
    // const [show,setShow]= useState(false)
    const [isLoading, setIsLoading] = useState(true);
    //user state
    const [user,setUser] = useState()

    const googleProvider = new GoogleAuthProvider();
    //google sign in function
    const googleSingIn = ()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    //register  with email and password function
    const register = (email,password)=>{
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    //handleSignIn 
    const signIn = (email,password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //logut
    const logout = ()=>{
        setIsLoading(true)
        return signOut(auth)
    }

    //on authentication state change this section 
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setIsLoading(false)
        })
        
        return (()=>unSubscribe())
    },[])
     

    const AuthInfo = {
        googleSingIn,
        register,
        signIn,
        user,
        logout,
        
        isLoading,
    }
    return (
        <AuthContext.Provider value={AuthInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;
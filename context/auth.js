import React, { useContext, useEffect,useState } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword,onAuthStateChanged,signOut, sendPasswordResetEmail,createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = React.createContext();

function AuthWrapper({ children }) {
    let [user,setUser]=useState(null)
    let [loading,setLoading]=useState(true)
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
           if(user){
            setUser(user)
           }
        })
        setLoading(false)
    },[])
  function login(email, password) {
    
    return signInWithEmailAndPassword(auth, email, password);
  }
  function forgot(email){
  return sendPasswordResetEmail(auth,email)
  }

  function logout(){
    return signOut(auth)
  }
  function signup(email,password){
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const store = {
    login,
    user,
    logout,
    forgot,
    signup,
  };
  return <AuthContext.Provider value={store}>{!loading && children}</AuthContext.Provider>;
}
export default AuthWrapper;

import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
const [user, setUser]= useState(null)
const [loading, setLoading]= useState(true)

  //google auth provider
  const GoogleProvider = new GoogleAuthProvider();
  //password auth
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //google signin
  const googleSignin = () => {
    setLoading(true)
    return signInWithPopup(auth, GoogleProvider);
  };

  //password signin (email,pass)
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut= ()=>{
    setLoading(true)
    return signOut(auth)
  }
  //current user
  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user observing");
      setLoading(false)
    });
    return ()=> unsubscribe()
  }, []);
  //Update profile
  const updateUser= (userInfo)=>{
    return updateProfile(user, userInfo)
  }

  //context info
  const authInfo = { createUser, googleSignin, signIn,user , logOut, loading, updateUser   };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

// auth context
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googlProvider = new GoogleAuthProvider();

  // google login
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googlProvider);
  };

  // create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // user login with email
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logout
  const userLogOut = () => {
    return signOut(auth);
  };

  // user current status
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);

      if (currentUser) {
        // user login success
        setUser(currentUser);
      } else {
        // user logout success
        setUser(null);
      }
    });

    // clean up firebase observer mathod
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    loginWithGoogle,
    createNewUser,
    userLogin,
    userLogOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export default AuthProvider;

import React, { useContext, useEffect, createContext, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext(null);

export function useAuth() {
   return useContext(AuthContext);
}

export function AuthProvider(props) {
   const [currentUser, setCurrentUser] = useState(null);
   const [loading, setLoading] = useState(true);
   const [authError, setAuthError] = useState("");
   const [authMessage, setAuthMessage] = useState("");
   const isAdmin = true;

   useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
         if (user) {
            setCurrentUser(user);
         }
         setLoading(false);
      });
      return unsubscribe;
   }, []);

   const value = {
      currentUser,
      setCurrentUser,
      authError,
      setAuthError,
      authMessage,
      setAuthMessage,
      isAdmin,
   };

   return (
      <AuthContext.Provider value={value}>
         {!loading && props.children}
      </AuthContext.Provider>
   );
}

import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";

export function RoutesLoginRequired({ component: Component, ...rest }) {
   const { currentUser, setAuthError } = useAuth();
   if (!currentUser) {
      setAuthError(() => "Please login to preform this action!");
   }
   return (
      <Route
         {...rest}
         render={(props) =>
            currentUser ? <Component {...props} /> : <Redirect exact to="/login" />
         }
      />
   );
}
export function RoutesIsLoginAlready({ component: Component, ...rest }) {
   const { currentUser } = useAuth();
   return (
      <Route
         {...rest}
         render={(props) => {
            return (
               <>{!currentUser ? <Component {...props} /> : <Redirect exact to="/" />}</>
            );
         }}
      />
   );
}
export function RoutesIsAdmin({ component: Component, ...rest }) {
   const { currentUser, isAdmin, setAuthError } = useAuth();
   return (
      <Route
         {...rest}
         render={(props) => {
            return (
               <>
                  {currentUser && isAdmin ? (
                     <Component {...props} />
                  ) : (
                     <>
                        {setAuthError("Please login as admin!")}
                        <Redirect exact to="/" />
                     </>
                  )}
               </>
            );
         }}
      />
   );
}

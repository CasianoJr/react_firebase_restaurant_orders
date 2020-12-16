import React from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "./AuthProvider";

export default function AlertMessage() {
   const { authError, setAuthError, authMessage, setAuthMessage } = useAuth();

   return (
      <>
         {authError && (
            <Alert
               variant="danger"
               className="col-md-7 mx-auto mt-1"
               onClose={() => setAuthError("")}
               dismissible
            >
               {authError}
            </Alert>
         )}
         {authMessage && (
            <Alert
               variant="success"
               className="col-md-7 mx-auto mt-1"
               onClose={() => setAuthMessage("")}
               dismissible
            >
               {authMessage}
            </Alert>
         )}
      </>
   );
}

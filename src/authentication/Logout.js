import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { auth } from "../firebase";
import { useAuth } from "./AuthProvider";

export default function Logout(props) {
  const { setCurrentUser } = useAuth();
  const history = useHistory();
  const [error, setError] = useState();
  const handleLogout = async () => {
    setError("");
    try {
      await auth.signOut();
      await setCurrentUser(null);
      history.push("/login");
    } catch (err) {
      console.log(err.code);
      setError(err.message);
    }
  };
  return (
    <>
      {error && (
        <Alert variant="danger" onClose={() => setError("")} dismissible>
          {error}
        </Alert>
      )}
      <div {...props} onClick={handleLogout}>
        {props.children}
      </div>
    </>
  );
}

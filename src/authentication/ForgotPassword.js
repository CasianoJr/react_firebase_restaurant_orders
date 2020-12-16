import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

export default function ForgotPassword() {
   const emailRef = useRef();
   const [error, setError] = useState("");
   const [message, setMessage] = useState("");
   const [loading, setLoading] = useState(false);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
         setMessage("");
         setError("");
         await auth.sendPasswordResetEmail(emailRef.current.value);
         setMessage("Check your inbox and follow instructions.");
      } catch (err) {
         console.log(err.code);
         setError(err.message);
      }
      setLoading(false);
   };
   return (
      <>
         <div className="col-lg-4 col-md-6 col-sm-8 col mx-auto pt-5">
            <Card>
               <Card.Body>
                  <div className="h2 text-center mb-4">Password Reset</div>
                  {error && (
                     <Alert variant="danger" onClose={() => setError("")} dismissible>
                        {error}
                     </Alert>
                  )}
                  {message && (
                     <Alert variant="success" dismissible>
                        {message}
                     </Alert>
                  )}
                  <Form onSubmit={handleSubmit}>
                     <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} required />
                     </Form.Group>
                     <Button disabled={loading} type="submit" className="w-100 ">
                        Retrive
                     </Button>
                  </Form>
               </Card.Body>
            </Card>
            <div className="text-muted small mx-2">
               Do you remember your credentials? <Link to="/login">Click to Login</Link>
            </div>
         </div>
      </>
   );
}

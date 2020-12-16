import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "./AuthProvider";

export default function UpdateProfile() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match!");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(currentUser.updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(currentUser.updatePassword(passwordRef.current.value));
    }
    if (profile != null) {
      promises.push(currentUser.updateProfile(profile));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch((e) => {
        setError(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-8 col mx-auto pt-5">
        <Card>
          <Card.Body>
            <div className="h2 text-center mb-4">Update Credentials</div>
            {error && (
              <Alert variant="danger" onClose={() => setError("")} dismissible>
                {error}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  defaultValue={currentUser.email}
                  required
                />
              </Form.Group>
              <Form.Group id="displayName">
                <Form.Label>Display Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) =>
                    setProfile((rest) => {
                      return { ...rest, displayName: e.target.value };
                    })
                  }
                  defaultValue={currentUser.displayName}
                  autoComplete="false"
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="*************"
                  autoComplete="false"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="*************"
                  autoComplete="false"
                />
              </Form.Group>
              <Button
                disabled={loading}
                type="submit"
                className="w-100 btn-primary"
              >
                Update
              </Button>
            </Form>
            <div className="text-center my-2">
              <Link to="/">Cancel</Link>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

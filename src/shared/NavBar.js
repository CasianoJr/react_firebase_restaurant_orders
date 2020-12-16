import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavs from "../admin/AdminNavs";
import { useAuth } from "../authentication/AuthProvider";
import Logout from "../authentication/Logout";
// import { ShoppingCartOutlined } from "@ant-design/icons";

export default function NavBar() {
   const { currentUser } = useAuth();
   return (
      <div>
         <Navbar bg="dark" variant="dark" expand="md">
            <Link to="/">
               <Navbar.Brand>Epsilon</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">
                  <Link to="/" className="nav-link">
                     <i className="fas fa-home"></i> Home
                  </Link>
                  <Link to="/browse" className="nav-link">
                     <i className="fas fa-window-restore"></i> Browse
                  </Link>
               </Nav>
               <Nav className="ml-auto">
                  <AdminNavs />

                  {currentUser ? (
                     <>
                        <Link to={`/order_list`} className="nav-link">
                           <i className="fas fa-shopping-cart"></i>{" "}
                           {currentUser.displayName
                              ? currentUser.displayName
                              : currentUser.email}
                        </Link>
                        <Link to="/update_profile" className="nav-link">
                           Update Profile
                        </Link>
                        <Logout className="nav-link">Logout</Logout>
                     </>
                  ) : (
                     <>
                        <Link to="/login" className="nav-link">
                           Login
                        </Link>
                        <Link to="/signup" className="nav-link">
                           Signup
                        </Link>
                     </>
                  )}
               </Nav>
            </Navbar.Collapse>
         </Navbar>
      </div>
   );
}

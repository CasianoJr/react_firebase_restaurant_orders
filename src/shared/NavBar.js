import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminNavs from "../admin/AdminNavs";
import { useAuth } from "../authentication/AuthProvider";
import Logout from "../authentication/Logout";
import { Switch } from "antd";
// import { ShoppingCartOutlined } from "@ant-design/icons";

export default function NavBar() {
   const { currentUser } = useAuth();
   const { isAdmin, setIsAdmin } = useAuth();
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
               {isAdmin && (
                  <Nav className="mx-auto">
                     <div className="nav-link btn">You are now an admin</div>
                  </Nav>
               )}
               <Nav className="ml-auto">
                  <AdminNavs />

                  {currentUser ? (
                     <>
                        <Switch
                           checkedChildren={<i className="fas fa-check"></i>}
                           unCheckedChildren={<i className="fas fa-times"></i>}
                           // defaultChecked
                           className="mt-2"
                           onChange={(e) => setIsAdmin(e)}
                        />
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

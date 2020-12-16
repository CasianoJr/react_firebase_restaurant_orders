import React from "react";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";

export default function AdminNavs() {
   const { isAdmin, currentUser } = useAuth();
   return (
      <>
         {isAdmin && currentUser && (
            <>
               <div className="nav-link"></div>
               <NavDropdown title="Admin" id="basic-nav-dropdown">
                  <Link to="/add_menu" className="dropdown-item">
                     Add Menu
                  </Link>
               </NavDropdown>
            </>
         )}
      </>
   );
}

import React from "react";
import DeleteMenu from "./DeleteMenu";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";

export default function EditDeleteButtons({ menu }) {
   const { isAdmin } = useAuth();

   if (!isAdmin) {
      return null;
   }

   return (
      <div className="d-flex justify-content-around">
         <Link
            className="my-1 btn btn-secondary btn-sm"
            to={`/${menu.category}/${menu.id}/update`}
         >
            Edit
         </Link>
         <DeleteMenu menu={menu} />
      </div>
   );
}

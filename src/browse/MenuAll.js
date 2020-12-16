import React from "react";
import FetchMenu from "./FetchMenu";

export default function MenuAll() {
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-4">
               <FetchMenu menuCategory="Appetizers" />
            </div>
            <div className="col-md-4">
               <FetchMenu menuCategory="Drinks" />
            </div>
            <div className="col-md-4">
               <FetchMenu menuCategory="Desserts" />
            </div>
         </div>
      </div>
   );
}

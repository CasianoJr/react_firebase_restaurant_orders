import React from "react";

export default function MenuClickOptions({ setMenuCategory }) {
   return (
      <div className="card card-body" style={{ height: "500px" }}>
         <div className="btn ">Menu</div>
         <div
            className="btn btn-outline-success my-2"
            onClick={() => setMenuCategory("Appetizers")}
         >
            Appetizers
         </div>
         <div
            className="btn btn-outline-success my-2"
            onClick={() => setMenuCategory("Desserts")}
         >
            Desserts
         </div>
         <div
            className="btn btn-outline-success my-2"
            onClick={() => setMenuCategory("Drinks")}
         >
            Drinks
         </div>
      </div>
   );
}

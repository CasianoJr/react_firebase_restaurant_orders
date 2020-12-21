import React, { useState, useEffect } from "react";
import { useDataBase } from "../shared/DataBaseProvider";
import { Image } from "react-bootstrap";
import AddToCart from "../transaction/AddToCart";

export default function MenuListSection({ menuCategory }) {
   const { appetizers, drinks, desserts } = useDataBase();
   const [menuItems, setMenuItems] = useState(appetizers);

   useEffect(() => {
      if (menuCategory === "Appetizers") {
         setMenuItems(appetizers);
      } else if (menuCategory === "Desserts") {
         setMenuItems(drinks);
      } else {
         setMenuItems(desserts);
      }
   }, [appetizers, desserts, drinks, menuCategory]);

   return (
      <div style={{ height: "500px", overflowY: "scroll" }} className="card">
         <div className="text-center lead">{menuCategory}</div>
         <div className="row bg-sucess m-2">
            {menuItems.map((menu) => (
               <div className="col-lg-4 col-md-6 card-body" key={menu.id}>
                  <div className="lead text-center">{menu.menu}</div>
                  <div
                     className="rounded"
                     style={{
                        height: "20vh",
                        width: "75%",
                        objectFit: "cover",
                        overflow: "hidden",
                        margin: "auto",
                     }}
                  >
                     <Image
                        src={menu.image}
                        style={{ width: "100%", objectFit: "cover" }}
                        rounded
                     />
                  </div>
                  <div className="mx-2">
                     <div>Good for {menu.serving} person(s)</div>
                     <div>{menu.price}</div>
                  </div>
                  <AddToCart className="btn btn-success" menu={menu}>
                     Pre Order
                  </AddToCart>
               </div>
            ))}
         </div>
      </div>
   );
}

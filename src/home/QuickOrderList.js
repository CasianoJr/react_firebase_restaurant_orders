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
         <div className="card">
            <div className="text-center lead">{menuCategory}</div>
            <table className="table table-hover">
               <tbody className="lead">
                  {menuItems.map((menu) => (
                     <tr key={menu.id}>
                        <th>{menu.menu}</th>
                        <th>
                           <div style={{ overflow: "hidden" }} className="text-center">
                              <Image
                                 src={menu.image}
                                 className="rounded d-block mx-auto"
                                 height="50"
                                 width="auto"
                                 rounded
                              />
                           </div>
                        </th>
                        <th>({menu.serving})</th>
                        <th>{menu.price}</th>
                        <th>
                           <div>
                              <AddToCart className="btn btn-success" menu={menu}>
                                 Pre Order
                              </AddToCart>
                           </div>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}

import React from "react";
import { useAuth } from "../authentication/AuthProvider";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import { useDataBase } from "../shared/DataBaseProvider";

export default function RemoveToCart({ menu, children, ...rest }) {
   const { currentUser, setAuthError } = useAuth();
   const { userOrders } = useDataBase();
   const history = useHistory();

   const handleOrder = async () => {
      if (!currentUser) {
         setAuthError("You are not login!");
         return history.push("/login");
      }
      try {
         const dbName = "Orders";
         const updateOrders = userOrders.itemOrders.map((item) => {
            if (item.menu === menu.menu) {
               if (parseInt(item.orderCount) > 1) {
                  return { ...item, orderCount: parseInt(item.orderCount) - 1 };
               } else {
                  return {};
               }
            } else {
               return item;
            }
         });
         const updatedOrders = updateOrders.filter((item) => item.menu);
         const placeOrder = {
            user: currentUser.email,
            dateOrder: Date.now(),
            itemOrders: updatedOrders,
         };

         await db.collection(dbName).doc(currentUser.email).set(placeOrder);
      } catch (err) {
         console.log(err);
      }
   };
   return (
      <span onClick={handleOrder} {...rest}>
         {children}-
      </span>
   );
}

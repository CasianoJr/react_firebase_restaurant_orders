import { Button } from "react-bootstrap";
import React from "react";
import { useAuth } from "../authentication/AuthProvider";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";

export default function AddToCart({ menu }) {
   const { currentUser, setAuthError } = useAuth();
   const history = useHistory();

   const handleOrder = async () => {
      if (!currentUser) {
         setAuthError("Please login to place order!");
         return history.push("/login");
      }
      console.log("adding cart");
      const dbName = "Orders";
      try {
         let responseData = null;
         let isItem = false;
         await db
            .collection(dbName)
            .doc(currentUser.email)
            .get()
            .then((response) => {
               const item = response.data();
               responseData = item;
            });
         if (responseData === undefined) {
            const placeOrder = {
               user: currentUser.email,
               dateOrder: Date.now(),
               itemOrders: [{ ...menu, orderCount: 1 }],
            };
            await db.collection(dbName).doc(currentUser.email).set(placeOrder);
            console.log("Done putting.");
         } else if (responseData) {
            const updateOrders = responseData.itemOrders.map((item) => {
               if (item.menu === menu.menu) {
                  isItem = true;
                  return { ...item, orderCount: parseInt(item.orderCount) + 1 };
               } else {
                  return item;
               }
            });

            if (!isItem) {
               updateOrders.push({ ...menu, orderCount: 1 });
            }
            const placeOrder = {
               user: currentUser.email,
               dateOrder: Date.now(),
               itemOrders: updateOrders,
            };
            await db.collection(dbName).doc(currentUser.email).set(placeOrder);
            console.log("Done putting.");
         }
      } catch (err) {
         return console.log(err);
      }
   };
   return (
      <div className="mx-auto mb-2">
         <Button onClick={handleOrder}>PreOrder</Button>;
      </div>
   );
}

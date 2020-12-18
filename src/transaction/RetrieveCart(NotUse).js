import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuth } from "../authentication/AuthProvider";
import { db } from "../firebase";
import LoadingPage from "../utils/LoadingPage";
import TableCart from "./TableCart";

export default function RetrieveCart() {
   const { currentUser } = useAuth();
   const [orders, setOrders] = useState({});
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      db.collection("Orders")
         .doc(currentUser.email)
         .get()
         .then((response) => {
            setOrders(response.data());
         })
         .catch((err) => console.log(err));
      setLoading(false);
   }, [currentUser]);

   if (loading) {
      return <LoadingPage />;
   }

   return (
      <>
         <div className="container-fluid">
            <div className="col-sm-8 mx-auto card">
               <div className="card h3 text-center my-2">Your pre-order meals</div>
               <TableCart orders={orders} />
               <div className="m-2">
                  <Button>Set the Date</Button>
               </div>
            </div>
         </div>
      </>
   );
}

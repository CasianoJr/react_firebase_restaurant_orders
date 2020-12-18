import React from "react";
import { Button } from "react-bootstrap";
import { useDataBase } from "../shared/DataBaseProvider";
import TableCart from "./TableCart";

export default function RetrieveCartV2() {
   const { userOrders } = useDataBase();

   return (
      <>
         <div className="col-md-8 col-11 mx-auto card card-body">
            <div className="h3 text-center my-2">Your pre-order meals</div>
            <TableCart orders={userOrders} />
            <div className="m-2">
               <Button>Set the Date</Button>
            </div>
         </div>
      </>
   );
}

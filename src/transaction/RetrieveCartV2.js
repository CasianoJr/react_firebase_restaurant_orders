import React from "react";
import { useDataBase } from "../shared/DataBaseProvider";
import SetDateButton from "./SetDateButton";
import TableCart from "./TableCart";

export default function RetrieveCartV2() {
   const { userOrders } = useDataBase();

   return (
      <>
         <div className="col-md-8 col-11 mx-auto card card-body">
            <div className="h3 text-center my-2">Your pre-order meals</div>
            <TableCart orders={userOrders} />
            <div>
               <SetDateButton className="m-2 btn btn-primary">Set Date</SetDateButton>
            </div>
         </div>
      </>
   );
}

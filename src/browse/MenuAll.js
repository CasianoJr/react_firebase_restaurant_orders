import React from "react";
import { useDataBase } from "../shared/DataBaseProvider";
import FetchMenuV2 from "./FetchMenuV2";
// import FetchMenu from "./FetchMenu";

export default function MenuAll() {
   const { appetizers, drinks, desserts } = useDataBase();
   return (
      <div className="container-fluid">
         <div className="row">
            <div className="col-md-4">
               {/* <FetchMenu menuCategory="Appetizers" /> */}
               <FetchMenuV2 menuItems={appetizers} menuCategory={"Appetizers"} />
            </div>
            <div className="col-md-4">
               {/* <FetchMenu menuCategory="Drinks" /> */}
               <FetchMenuV2 menuItems={drinks} menuCategory={"Drinks"} />
            </div>
            <div className="col-md-4">
               {/* <FetchMenu menuCategory="Desserts" /> */}
               <FetchMenuV2 menuItems={desserts} menuCategory={"Desserts"} />
            </div>
         </div>
      </div>
   );
}

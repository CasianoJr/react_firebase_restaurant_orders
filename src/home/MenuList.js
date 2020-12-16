import React from "react";
import CarouselLogic from "./CarouselLogic";

export default function MenuList() {
   return (
      <div className="container-fluid">
         <div></div>
         <div className="row">
            <div className="col-md-4">
               <CarouselLogic
                  drinks="Drinks"
                  appetizers="Appetizers"
                  desserts="Desserts"
               />
            </div>
            <div className="col-md-4">
               <CarouselLogic
                  drinks="Drinks"
                  appetizers="Appetizers"
                  desserts="Desserts"
               />
            </div>
            <div className="col-md-4">
               <CarouselLogic
                  drinks="Drinks"
                  appetizers="Appetizers"
                  desserts="Desserts"
               />
            </div>
         </div>
         <div className="row">
            <div className="col-sm-2">Menu</div>
            <div className="col-sm-7">Items Center</div>
            <div className="col-sm-3">Items selected</div>
         </div>
      </div>
   );
}

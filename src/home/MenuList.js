import React, { useState } from "react";
import CarouselLogicV2 from "./CarouselLogicV2";
import MenuListSection from "./MenuListSection";
import MenuClickOptions from "./MenuClickOptions";
// import CarouselLogic from "./CarouselLogic";

export default function MenuList() {
   const [menuCategory, setMenuCategory] = useState("Appetizers");
   return (
      <div className="container-fluid">
         <div></div>
         <div className="row">
            <div className="col-md-4">
               <CarouselLogicV2 />
            </div>
            <div className="col-md-4">
               <CarouselLogicV2 />
            </div>
            <div className="col-md-4">
               <CarouselLogicV2 />
            </div>
         </div>
         <div className="row py-4">
            <div className="col-sm-2">
               <MenuClickOptions setMenuCategory={setMenuCategory} />
            </div>
            <div className="col-sm-7">
               <MenuListSection menuCategory={menuCategory} />
            </div>
            <div className="col-sm-3">Items selected</div>
         </div>
         <div className="py-5 my-5 h3 text-center">Footer</div>
      </div>
   );
}

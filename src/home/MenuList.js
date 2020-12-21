import React, { useState } from "react";
import CarouselLogicV2 from "./CarouselLogicV2";
import QuickOrderList from "./QuickOrderList";
import QuickOrderOption from "./QuickOrderOption";
import QuickOrderOrdered from "./QuickOrderOrdered";
import RestaurantCarousel from "./RestaurantCarousel";
// import CarouselLogic from "./CarouselLogic";

export default function MenuList() {
   const [menuCategory, setMenuCategory] = useState("Appetizers");
   return (
      <>
         <RestaurantCarousel />
         {/* Routes buttons  */}
         <div
            className="d-flex justify-content-center"
            style={{ backgroundColor: "rgb(0,0,0, .4)" }}
         >
            <a href="#quickOrdering" className="btn btn-outline-success m-3">
               Order now
            </a>
            <a href="#quickOrdering" className="btn btn-outline-success m-3">
               How this website works
            </a>
            <a href="#quickOrdering" className="btn btn-outline-success m-3">
               About us
            </a>
         </div>
         {/* Featured Menu (Carousel) */}
         <div>
            <div
               className="py-2 my-2 h3 text-center text-white"
               style={{ backgroundColor: "rgb(0,0,0,.4)" }}
            >
               Feature Menu (Carousel)
            </div>
            <div className="container">
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
            </div>
         </div>
         {/* Quick Ordering */}
         <div>
            <div
               id="quickOrdering"
               className="py-2 my-2 h3 text-center text-white"
               style={{ backgroundColor: "rgb(0,0,0,.4)" }}
            >
               Quick Ordering
            </div>
            <div className="quickOrderingDiv container-fluid">
               <div className="orderOption">
                  <QuickOrderOption setMenuCategory={setMenuCategory} />
               </div>
               <div className="orderList">
                  <QuickOrderList menuCategory={menuCategory} />
               </div>
               <div className="orderOrdered">
                  <QuickOrderOrdered />
               </div>
            </div>
         </div>
      </>
   );
}

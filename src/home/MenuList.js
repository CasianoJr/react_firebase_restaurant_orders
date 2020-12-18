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
            <div className="text-center">
               <div className="btn btn-outline-success btn-lg mx-sm-3 mx-auto">
                  Order now
               </div>
               <div className="btn btn-outline-success btn-lg mx-sm-3 mx-auto">
                  How this website works
               </div>
               <div className="btn btn-outline-success btn-lg mx-sm-3 mx-auto">
                  About us
               </div>
            </div>
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
               className="py-2 my-2 h3 text-center text-white"
               style={{ backgroundColor: "rgb(0,0,0,.4)" }}
            >
               Quick Ordering
            </div>
            <div className="row container-fluid">
               <div className="col-lg-2 col-md-3 col-sm-4 p-2 mx-auto">
                  <QuickOrderOption setMenuCategory={setMenuCategory} />
               </div>
               <div className="col-lg-6 col-md-9 col-sm-8 p-2 mx-auto">
                  <QuickOrderList menuCategory={menuCategory} />
               </div>
               <div className="col-lg-4 col-md-8 col-10 p-2 mx-auto">
                  <QuickOrderOrdered />
               </div>
            </div>
         </div>
      </>
   );
}

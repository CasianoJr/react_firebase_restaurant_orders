import React from "react";
import { Carousel } from "antd";
import CarouselCard from "./CarouselCard";
import { useDataBase } from "../shared/DataBaseProvider";

export default function CarouselLogicV2() {
   const { appetizers, drinks, desserts } = useDataBase();
   const menuItems = [...appetizers, ...drinks, ...desserts].sort(
      () => 0.5 - Math.random()
   );

   return (
      <>
         <Carousel autoplay dots={false} effect="fade">
            {menuItems.length > 0 &&
               menuItems.map((menu) => (
                  <div key={menu.id}>
                     <CarouselCard menu={menu} />
                  </div>
               ))}
         </Carousel>
      </>
   );
}

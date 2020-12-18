import React, { useEffect, useState, useMemo } from "react";
import { db } from "../firebase";
import LoadingPage from "../utils/LoadingPage";
import { Carousel } from "antd";
import CarouselCard from "./CarouselCard";

export default function CarouselLogic({ drinks, appetizers, desserts }) {
   const [menuItems, setMenuItems] = useState([]);
   const [loading, setLoading] = useState(true);
   const categories = useMemo(() => [drinks, appetizers, desserts], [
      drinks,
      appetizers,
      desserts,
   ]);

   menuItems.sort(() => 0.5 - Math.random());

   useEffect(() => {
      categories.forEach((category) => {
         db.collection(category)
            .limit(10)
            .get()
            .then((response) => {
               const items = response.docs.map((item) => item.data());
               setMenuItems((prevItems) => [...prevItems, ...items]);
               setLoading(false);
            });
      });
   }, [categories]);

   if (loading) {
      return <LoadingPage />;
   }
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

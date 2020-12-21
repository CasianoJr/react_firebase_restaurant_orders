import { Carousel } from "antd";
import React from "react";
import restoL from "../images/restoL.jpg";
import restoM from "../images/restoM.jpg";
import restoN from "../images/restoN.jpg";
import restoO from "../images/restoO.jpg";
import restoP from "../images/restoP.jpg";
import restoQ from "../images/restoQ.jpg";
import { Image } from "react-bootstrap";

export default function RestaurantCarousel() {
   const items = [
      {
         image: restoL,
         info: "Dine with us.",
         top: "70%",
         left: "80%",
      },
      {
         image: restoM,
         info: "Rain or shine, it’s time to dine..",
         top: "80%",
         left: "40%",
      },
      {
         image: restoN,
         info: "The only thing we’re serious about is food.",
         top: "20%",
         left: "50%",
      },
      {
         image: restoO,
         info: "Taste the difference",
         top: "80%",
         left: "20%",
      },
      {
         image: restoP,
         info: "You are what you eat, so eat right.",
         top: "80%",
         left: "50%",
      },
      {
         image: restoQ,
         info: "Savor the life",
         top: "80%",
         left: "50%",
      },
   ];
   return (
      <div>
         <Carousel autoplay dots={true} effect="fade">
            {items.map((item) => (
               <div
                  key={item.info}
                  className="text-center h-75"
                  style={{ overflow: "hidden", position: "relative" }}
               >
                  <div className="restaurantCarouseContainer">
                     <Image
                        src={item.image}
                        className="restaurantCarouselImage"
                        rounded
                     />
                  </div>
                  <div
                     style={{
                        position: "absolute",
                        top: item.top,
                        left: item.left,
                        transform: "translate(-50%, -50%)",
                        fontSize: "4vw",
                     }}
                     className="text-white display-4"
                  >
                     {item.info}
                  </div>
               </div>
            ))}
         </Carousel>
      </div>
   );
}

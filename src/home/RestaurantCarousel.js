import { Carousel } from "antd";
import React from "react";
import restoB from "../images/restoB.jpg";
import restoC from "../images/restoC.jpg";
import restoD from "../images/restoD.jpg";
import restoE from "../images/restoE.jpg";
import restoF from "../images/restoF.jpg";
import { Image } from "react-bootstrap";

export default function RestaurantCarousel() {
   //    const images = [restoB, restoC, restoD, restoE, restoF];
   const items = [
      {
         image: restoB,
         info: "Dine with us.",
         top: "70%",
         left: "80%",
      },
      {
         image: restoC,
         info: "Rain or shine, it’s time to dine..",
         top: "80%",
         left: "40%",
      },
      {
         image: restoD,
         info: "The only thing we’re serious about is food.",
         top: "20%",
         left: "50%",
      },
      {
         image: restoE,
         info: "Taste the difference",
         top: "80%",
         left: "20%",
      },
      {
         image: restoF,
         info: "You are what you eat, so eat right.",
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
                  <Image
                     src={item.image}
                     className="rounded d-block w-100"
                     height="auto"
                     rounded
                  />
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

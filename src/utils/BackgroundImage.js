import React from "react";
import foodImage from "../images/food.jpg";

export default function BackgroundImage({ children }) {
   return (
      <div
         className="bg-light h-100"
         style={{
            backgroundImage: `url(${foodImage})`,
            backgroundRepeat: "repeat",
            minHeight: "800px",
         }}
      >
         {children}
      </div>
   );
}

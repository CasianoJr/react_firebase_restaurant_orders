import React from "react";
import SingleCard from "./SingleCard";

export default function FetchMenuV2({ menuItems, menuCategory }) {
   return (
      <>
         <div className="text-center mx-auto h3 card mt-2 w-75">{menuCategory}</div>
         {menuItems.map((menu) => (
            <SingleCard key={menu.id} menu={menu}></SingleCard>
         ))}
      </>
   );
}

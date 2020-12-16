import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import LoadingPage from "../utils/LoadingPage";
import SingleCard from "./SingleCard";

export default function DrinksMenuAll({ menuCategory }) {
   const [menuItems, setMenuItems] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      // db.collection(menuCategory)
      //    .get()
      //    .then((response) => {
      //       const items = response.docs.map((item) => item.data());
      //       setMenuItems(items);
      //       setLoading(false);
      //    });
      const unsubscribed = db.collection(menuCategory).onSnapshot((snapshot) => {
         let item = [];
         snapshot.forEach((menu) => {
            item.push(menu.data());
         });
         setMenuItems(item);
         setLoading(false);
      });
      return unsubscribed;
   }, [menuCategory]);

   if (loading) {
      return <LoadingPage />;
   }

   return (
      <>
         <div className="text-center mx-auto h3 card mt-2 w-75">{menuCategory}</div>
         {menuItems.map((menu) => (
            <SingleCard key={menu.id} menu={menu}></SingleCard>
         ))}
      </>
   );
}

import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
const DataBaseContext = createContext(null);
export const useDataBase = () => {
   return useContext(DataBaseContext);
};

export default function DataBaseProvider(props) {
   const [loading, setLoading] = useState(true);
   const [appetizers, setAppetizers] = useState([]);
   const [desserts, setDesserts] = useState([]);
   const [drinks, setDrinks] = useState([]);

   const fetchData = (menuCategory, setData) => {
      db.collection(menuCategory).onSnapshot((snapshot) => {
         let item = [];
         snapshot.forEach((menu) => {
            item.push(menu.data());
            setData(item);
         });
      });
   };

   useEffect(() => {
      const fetchAll = async () => {
         try {
            await fetchData("Appetizers", setAppetizers);
            await fetchData("Desserts", setDesserts);
            await fetchData("Drinks", setDrinks);
            setLoading(false);
         } catch (err) {
            console.log(err);
         }
      };
      fetchAll();
      return fetchAll;
   }, []);

   const value = { appetizers, desserts, drinks };
   return (
      <DataBaseContext.Provider value={value}>
         {!loading && props.children}
      </DataBaseContext.Provider>
   );
}

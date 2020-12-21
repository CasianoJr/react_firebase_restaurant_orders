import React, { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "../authentication/AuthProvider";
import { db } from "../firebase";

const DataBaseContext = createContext(null);

export const useDataBase = () => {
   return useContext(DataBaseContext);
};

export default function DataBaseProvider(props) {
   const { currentUser, isAdmin } = useAuth();
   const [loading, setLoading] = useState(true);
   const [appetizers, setAppetizers] = useState([]);
   const [desserts, setDesserts] = useState([]);
   const [drinks, setDrinks] = useState([]);
   const [userOrders, setUserOrders] = useState({});
   const [allOrders, setAllOrders] = useState([]);

   const fetchData = (menuCategory, setData) => {
      db.collection(menuCategory).onSnapshot((snapshot) => {
         let item = [];
         snapshot.forEach((menu) => {
            item.push(menu.data());
            setData(item);
         });
      });
   };

   const fetchUserOrders = (userEmail) => {
      db.collection("Orders")
         .doc(userEmail)
         // .get()
         // .then((response) => {
         //    setUserOrders(response.data());
         // })
         // .catch((err) => console.log(err));
         .onSnapshot((response) => setUserOrders(response.data()));
   };

   useEffect(() => {
      const fetchAll = async () => {
         try {
            await fetchData("Appetizers", setAppetizers);
            await fetchData("Desserts", setDesserts);
            await fetchData("Drinks", setDrinks);
            console.log("fetched all");
         } catch (err) {
            console.log(err);
         }
      };
      fetchAll();
      return fetchAll;
   }, []);

   useEffect(() => {
      const fetchOrders = async () => {
         if (currentUser) {
            await fetchUserOrders(currentUser.email);
         }
      };
      fetchOrders();
      return fetchOrders;
   }, [currentUser]);

   // For Admin Only
   useEffect(() => {
      if (isAdmin) {
         db.collection("Orders")
            .get()
            .then((response) => {
               const items = response.docs.map((item) => item.data());
               setAllOrders((prevItems) => [...prevItems, ...items]);
            });
      }
      setLoading(false);
   }, [isAdmin]);

   const value = { appetizers, desserts, drinks, userOrders, allOrders };
   return (
      <DataBaseContext.Provider value={value}>
         {!loading && props.children}
      </DataBaseContext.Provider>
   );
}

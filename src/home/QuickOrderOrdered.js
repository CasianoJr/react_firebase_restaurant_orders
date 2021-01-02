import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../authentication/AuthProvider";
import { useDataBase } from "../shared/DataBaseProvider";
import LoadingPage from "../utils/LoadingPage";
import RemoveToCart from "../transaction/RemoveToCart";
import AddToCart from "../transaction/AddToCart";
import SetDateButton from "../transaction/SetDateButton";

export default function QuickOrderOrdered() {
   const { userOrders } = useDataBase();
   const { currentUser } = useAuth();
   const [totalAmount, setTotalAmount] = useState(0);

   useEffect(() => {
      let amt = 0;
      if (userOrders && userOrders.itemOrders) {
         userOrders.itemOrders.map((item) => {
            amt += parseInt(item.price) * parseInt(item.orderCount);
            return item;
         });
      }
      setTotalAmount(amt);
   }, [userOrders]);

   return (
      <div style={{ height: "500px", overflowY: "scroll" }} className="card">
         <div className="text-center lead">Your orders</div>
         {currentUser ? (
            <div>
               <div className="text-center small">{currentUser.email}</div>
               <ol>
                  {userOrders &&
                  userOrders.itemOrders &&
                  userOrders.itemOrders.length !== 0 ? (
                     <>
                        <table className="table">
                           <tbody>
                              {userOrders.itemOrders.map((item) => (
                                 <tr key={item.menu}>
                                    <th>{item.menu}</th>
                                    <th>
                                       <RemoveToCart
                                          className="btn btn-outline-secondary mx-2 px-2 py-0"
                                          menu={item}
                                       />
                                       {item.orderCount}
                                       <AddToCart
                                          className="btn btn-outline-secondary mx-2 px-2 py-0"
                                          menu={item}
                                       />
                                    </th>
                                    <th>
                                       {parseInt(item.price) * parseInt(item.orderCount)}
                                    </th>
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                        <div
                           className="text-center display-3 pt-5"
                           style={{ fontSize: "3vh" }}
                        >
                           Total Amount: {totalAmount}
                        </div>
                        <div className="text-center mt-2">
                           <SetDateButton className="btn btn-outline-primary text-center">
                              Set Date
                           </SetDateButton>
                        </div>
                     </>
                  ) : (
                     <div className="text-center pt-5">You have no orders yet!</div>
                  )}
               </ol>
            </div>
         ) : (
            <div className="text-center pt-5">
               <div className="lead">You are not Login</div>
               <Link to="/login" className="btn btn-outline-primary">
                  Login Now
               </Link>
               <LoadingPage />
            </div>
         )}
      </div>
   );
}

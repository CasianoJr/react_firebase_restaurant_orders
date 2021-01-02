import React from "react";
import { Collapse } from "antd";
import { useDataBase } from "../shared/DataBaseProvider";
const { Panel } = Collapse;

export default function RetrieveAllOrders() {
   const { allOrders } = useDataBase();
   const allOrdersFiltered = allOrders.filter((order) => order.itemOrders.length > 0);

   return (
      <>
         <div className="container-fluid row ">
            <div className="card col-lg-6 col-md-8 col-sm-10 mx-auto card-body">
               <Collapse accordion>
                  {allOrdersFiltered.map((item) => (
                     <Panel
                        header={
                           <div className="row">
                              <div className="col">
                                 {new Date(item.dateOrder).toLocaleDateString()}
                              </div>
                              {item.dateSchedule ? (
                                 <div className="col">{item.dateSchedule}</div>
                              ) : (
                                 <div className="col">Not Set</div>
                              )}
                              <div className="col">{item.user}</div>
                           </div>
                        }
                        key={item.user}
                     >
                        <div>
                           {item.itemOrders.map((menu) => (
                              <div key={menu.id} className="row">
                                 <div className="col">{menu.menu}</div>
                                 <div className="col text-center">
                                    {menu.orderCount} c
                                 </div>
                                 <div className="col">
                                    {parseInt(menu.price) * parseInt(menu.orderCount)}
                                 </div>
                              </div>
                           ))}
                           <div className="text-center">Total: ?? </div>
                        </div>
                     </Panel>
                  ))}
               </Collapse>
            </div>
         </div>
      </>
   );
}

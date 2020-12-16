import React from "react";
import { Table } from "react-bootstrap";

export default function TableCart({ orders }) {
   return (
      <div>
         <Table variant="danger" className="rounded table rounded h6 text-center mx-auto">
            <thead>
               <tr>
                  <th>#</th>
                  <th>Dish/Menu</th>
                  <th>Category</th>
                  <th>Per persons</th>
                  <th>Order Count</th>
                  <th>Price</th>
               </tr>
            </thead>
            <tbody>
               {orders &&
                  orders.itemOrders &&
                  orders.itemOrders.map((menu, idx) => (
                     <tr key={menu.id}>
                        <th>{idx}</th>
                        <th>{menu.menu}</th>
                        <th>{menu.category}</th>
                        <th>{menu.serving}</th>
                        <th>{menu.orderCount}</th>
                        <th>{menu.price}</th>
                     </tr>
                  ))}
            </tbody>
         </Table>
      </div>
   );
}

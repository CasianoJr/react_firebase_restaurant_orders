import React from "react";
import { Table } from "react-bootstrap";
import RemoveToCart from "./RemoveToCart";
import AddToCart from "./AddToCart";

export default function TableCart({ orders }) {
   return (
      <div>
         <Table className="rounded table h6 text-center mx-auto">
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
                        <th>
                           <RemoveToCart
                              className="btn btn-outline-secondary mx-2 px-2 py-0"
                              menu={menu}
                           />
                           {menu.orderCount}
                           <AddToCart
                              className="btn btn-outline-secondary mx-2 px-2 py-0"
                              menu={menu}
                           />
                        </th>
                        <th>{menu.price}</th>
                     </tr>
                  ))}
            </tbody>
         </Table>
      </div>
   );
}

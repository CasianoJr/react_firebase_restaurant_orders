import React from "react";
import { Card, Image } from "react-bootstrap";
import EditDeleteButtons from "../admin/EditDeleteButtons";
import AddToCart from "../transaction/AddToCart";

export default function SingleCard({ menu }) {
   return (
      <div className="w-100 card my-2">
         <Card.Body>
            <Card.Title className="text-center">{menu.menu}</Card.Title>
            <div style={{ overflow: "hidden" }} className="text-center">
               <Image
                  src={menu.image}
                  className="rounded d-block mx-auto"
                  height="200"
                  width="auto"
                  rounded
               />
            </div>
            <Card.Text>Good for {menu.serving} persons</Card.Text>
         </Card.Body>
         <Card.Footer>P {menu.price}</Card.Footer>
         <AddToCart menu={menu} />
         <EditDeleteButtons menu={menu} />
      </div>
   );
}

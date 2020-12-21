import React from "react";
import { Card, Image } from "react-bootstrap";
import AddToCart from "../transaction/AddToCart";
import EditDeleteButtons from "../admin/EditDeleteButtons";

export default function CarouselCard({ menu }) {
   return (
      <Card className="my-2 ">
         <Card.Body>
            <Card.Title className="text-center">{menu.menu}</Card.Title>
            <div style={{ overflow: "hidden" }} className="text-center">
               <Image src={menu.image} className="carouseCardImage" rounded />
            </div>
         </Card.Body>
         <Card.Footer className="mx-auto w-75">
            <div>Good for {menu.serving} persons</div>
            <div>P {menu.price}</div>
         </Card.Footer>
         <div className="text-center">
            <AddToCart className="btn btn-outline-primary my-2" menu={menu}>
               Order
            </AddToCart>
         </div>
         <EditDeleteButtons menu={menu} />
      </Card>
   );
}

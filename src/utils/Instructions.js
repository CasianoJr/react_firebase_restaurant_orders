import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function Instructions() {
   const [show, setShow] = React.useState(true);
   return (
      <>
         {show && (
            <Modal
               scrollable={true}
               show={show}
               onHide={() => setShow(false)}
               style={{ backgroundColor: "rgb(0,0,0, .2" }}
            >
               <Modal.Header closeButton>
                  <Modal.Title>Greetings from Epsilon restaurant!</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <div className="h5 text-center">
                     {"Pre-order >> Set a Date >> Come to us >> Dine"}
                  </div>
                  <ul>
                     <li>Our admin will check if your order is valid</li>
                     <li>Please show your identification at the reception</li>
                     <li>We strictly observe client's privacy confidential.</li>
                  </ul>
                  <div className="h3 text-center text-danger">
                     Thank you for visiting the page!
                  </div>
               </Modal.Body>
               <Modal.Footer>
                  <Button variant="outline-success" onClick={() => setShow(false)}>
                     Gotcha!
                  </Button>
               </Modal.Footer>
            </Modal>
         )}
      </>
   );
}

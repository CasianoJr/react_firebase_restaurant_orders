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
                  <Modal.Title className="mx-auto">
                     Greetings from Epsilon restaurant!
                  </Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <div className="h5 text-center">
                     {"Pre-order >> Set-a-Date >> Come-to-us >> Dine!"}
                  </div>
                  <ul>
                     <li>Our admin will check if your order is valid</li>
                     <li>Please show your identification at the reception</li>
                     <li>We strictly observe client's privacy confidential.</li>
                  </ul>
                  <div className="h3 text-center text-danger">
                     Thank you for visiting the page!
                  </div>
                  <div className="mx-3">
                     @ demo, click the button in the navbar to activate the admin.
                     Ofcourse, if you had login
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

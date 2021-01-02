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
                  <ul>
                     <li>Pre-order</li>
                     <li>Set-a-Date</li>
                     <li>Come-to-us</li>
                     <li>Dine!</li>
                     <hr />
                     <li>Our admin will check if your order is valid</li>
                     <li>Your identity is confidential.</li>
                     <li>
                        @ Site Demo, click the button in the navbar to activate the admin.
                        Ofcourse, if you're already login
                     </li>
                  </ul>
                  <div className="h5 text-center text-danger">
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

import React from "react";
import { Alert } from "react-bootstrap";

export default function Instructions() {
   const [show, setShow] = React.useState(true);
   return (
      <>
         {show && (
            <Alert
               className="alert-danger lead text-center"
               onClose={() => setShow(false)}
               dismissible
            >
               {"Pre-order >> Set a Date >> Come to us >> Dine"}
            </Alert>
         )}
      </>
   );
}

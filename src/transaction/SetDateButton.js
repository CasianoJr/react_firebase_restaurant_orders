import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useAuth } from "../authentication/AuthProvider";
import { db } from "../firebase";
import { useHistory } from "react-router-dom";
import { DatePicker } from "antd";

export default function SetDateButton({ children, ...rest }) {
   const { currentUser, setAuthMessage, setAuthError } = useAuth();
   const history = useHistory();
   const [show, setShow] = useState(false);
   const [dateSchedule, setDateSchedule] = useState("");
   const [error, setError] = useState("");

   const handleSetDate = async () => {
      if (!currentUser) {
         setAuthError("Please Login to set the date");
         setShow(false);
         return history.push("/login");
      }
      if (dateSchedule === "") {
         return setError("Please provide time and date schedules!");
      }
      const dbName = "Orders";
      try {
         let responseData = null;
         await db
            .collection(dbName)
            .doc(currentUser.email)
            .get()
            .then((response) => {
               const item = response.data();
               responseData = item;
            });
         if (responseData === undefined || responseData.itemOrders.length === 0) {
            setShow(false);
            return setAuthError("You have no existing order");
         } else {
            const placeOrder = {
               user: currentUser.email,
               dateOrder: Date.now(),
               itemOrders: responseData.itemOrders,
               dateSchedule: dateSchedule,
            };
            await db.collection(dbName).doc(currentUser.email).set(placeOrder);
            setAuthMessage("Done updating.");
            setShow(false);
         }
      } catch (err) {
         return console.log(err);
      }
   };
   return (
      <>
         <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Please set date and time.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               {error && <div className="text-center alert alert-danger">{error}</div>}{" "}
               <div className="text-center lead">
                  <div>{dateSchedule}</div>
                  <DatePicker
                     className="my-2"
                     showTime={{ format: "YYYY-MM-DD HH:mm:ss" }}
                     format="YYYY-MM-DD HH:mm:ss"
                     onChange={(date, string) => setDateSchedule(string)}
                  />
               </div>
            </Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShow(false)}>
                  Cancel
               </Button>
               <Button variant="success" onClick={handleSetDate}>
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
         <span {...rest} onClick={() => setShow(true)}>
            {children}
         </span>
      </>
   );
}

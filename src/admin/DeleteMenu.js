import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "../authentication/AuthProvider";
import { useHistory } from "react-router-dom";

export default function DeleteMenuModal({ menu }) {
   const { isAdmin, setAuthMessage } = useAuth();
   const [show, setShow] = useState(false);
   const history = useHistory();

   if (!isAdmin) {
      return null;
   }

   const handleDelete = async () => {
      await db.collection(menu.category).doc(menu.id).delete();
      await setAuthMessage(`${menu.menu} is successfully deleted`);
      setShow(false);
      history.push("/browse");
   };

   return (
      <React.Fragment>
         <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
               <Modal.Title>Caution! Action is ireversible.</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete "{menu.menu}"?</Modal.Body>
            <Modal.Footer>
               <Button variant="secondary" onClick={() => setShow(false)}>
                  Cancel
               </Button>
               <Button variant="danger" onClick={handleDelete}>
                  Confirm
               </Button>
            </Modal.Footer>
         </Modal>
         <button className="my-1 btn btn-danger btn-sm" onClick={() => setShow(true)}>
            Delete
         </button>
      </React.Fragment>
   );
}

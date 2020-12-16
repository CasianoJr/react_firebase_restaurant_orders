import React, { useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { db, storageDB } from "../firebase";
import { v4 as uuid } from "uuid";
import { useAuth } from "../authentication/AuthProvider";
import { useHistory } from "react-router-dom";

export default function AddMenu() {
   const history = useHistory();
   const { setAuthMessage } = useAuth();
   const categoryRef = useRef();
   const menuRef = useRef();
   const priceRef = useRef();
   const servingRef = useRef();
   const imageRef = useRef();
   const [loading, setLoading] = useState(false);

   const createMenu = async () => {
      setLoading(true);
      const itemId = uuid();
      const file = imageRef.current.files[0];
      const fileRef = storageDB.ref().child(itemId);
      await fileRef.put(file);
      const imageUrl = await fileRef.getDownloadURL();
      const item = {
         category: categoryRef.current.value,
         menu: menuRef.current.value,
         image: imageUrl,
         price: priceRef.current.value,
         serving: servingRef.current.value,
         dateAdded: Date.now(),
         id: itemId,
      };
      try {
         await db.collection(categoryRef.current.value).doc(itemId).set(item);
         await setAuthMessage(`Successfully added "${item.menu}"`);
         menuRef.current.value = "";
         priceRef.current.value = "";
         imageRef.current.value = null;
         servingRef.current.value = "";
      } catch (err) {
         console.log(err);
      }
      setLoading(false);
   };

   const handleSave = async (e) => {
      e.preventDefault();
      await createMenu();
      history.push("/browse");
   };
   const handleSaveAndMore = async () => {
      createMenu();
   };

   return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto mt-3 card card-body">
         <div className="h3 text-center">Add Menu</div>
         {loading && <div className="lead text-center">Creating...</div>}
         <Form onSubmit={handleSave}>
            <Form.Group>
               <Form.Label>Category</Form.Label>
               <Form.Control as="select" type="text" name="category" ref={categoryRef}>
                  <option value="Appetizers">Appetizers</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Desserts">Desserts</option>
               </Form.Control>
            </Form.Group>
            <Form.Group>
               <Form.Label>Name: </Form.Label>
               <Form.Control type="text" name="menu" ref={menuRef} required />
            </Form.Group>
            <Form.Group>
               <Form.Label>Image: </Form.Label>
               <Form.Control type="file" name="image" ref={imageRef} required />
            </Form.Group>
            <Form.Group>
               <Form.Label>Serving: </Form.Label>
               <Form.Control type="number" name="serving" ref={servingRef} required />
            </Form.Group>
            <Form.Group>
               <Form.Label>Price: </Form.Label>
               <Form.Control type="float" name="price" ref={priceRef} required />
            </Form.Group>
            <div className="d-flex justify-content-end">
               <Button disabled={loading} className="mx-2 btn-success" type="submit">
                  Save
               </Button>
               <Button
                  disabled={loading}
                  className="mx-2 btn-success"
                  onClick={handleSaveAndMore}
               >
                  Save and add more
               </Button>
            </div>
         </Form>
      </div>
   );
}

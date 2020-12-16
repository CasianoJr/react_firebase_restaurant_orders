import React, { useRef, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { db } from "../firebase";
import { useAuth } from "../authentication/AuthProvider";
import LoadingPage from "../utils/LoadingPage";

export default function UpdateMenu(props) {
   const menuId = props.match.params.menuId;
   const menuCategory = props.match.params.menuCategory;
   const { setAuthMessage } = useAuth();
   const [dataMenu, setDataMenu] = useState([]);
   const [loading, setLoading] = useState(true);
   const menuRef = useRef();
   const priceRef = useRef();
   const servingRef = useRef();

   useEffect(() => {
      const fetchData = async () => {
         try {
            await db
               .collection(menuCategory)
               .doc(menuId)
               .get()
               .then((response) => {
                  const item = response.data();
                  setDataMenu(item);
               });
            setLoading(false);
         } catch (err) {
            console.log(err);
         }
      };
      fetchData();
   }, [menuCategory, menuId]);

   if (loading) {
      return <LoadingPage />;
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const item = {
         category: dataMenu.category,
         menu: menuRef.current.value,
         image: dataMenu.image,
         price: priceRef.current.value,
         serving: servingRef.current.value,
         dateAdded: dataMenu.dateAdded,
         id: dataMenu.id,
      };
      try {
         await db.collection(dataMenu.category).doc(menuId).update(item);
         setAuthMessage(`Successfully updated "${menuRef.current.value}"`);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div className="col-lg-6 col-md-8 col-sm-10 mx-auto mt-3 card card-body">
         <div className="h3 text-center">Update Menu </div>
         <Form onSubmit={handleSubmit}>
            <Form.Group>
               <Form.Label>Category</Form.Label>
               <Form.Control as="select" name="category" defaultValue={dataMenu.category}>
                  <option value={dataMenu.category}>{dataMenu.category}</option>
               </Form.Control>
               <Form.Text className="small text-muted">
                  Changing a category is not an option
               </Form.Text>
            </Form.Group>
            <Form.Group>
               <Form.Label>Name: </Form.Label>
               <Form.Control
                  type="text"
                  name="menu"
                  defaultValue={dataMenu.menu}
                  ref={menuRef}
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Image: </Form.Label>
               <Form.Control type="text" name="menu" defaultValue={dataMenu.image} />
               <Form.Text className="small text-muted">
                  Changing a image is not yet an option
               </Form.Text>
            </Form.Group>
            <Form.Group>
               <Form.Label>Serving: </Form.Label>
               <Form.Control
                  type="number"
                  name="serving"
                  defaultValue={dataMenu.serving}
                  ref={servingRef}
               />
            </Form.Group>
            <Form.Group>
               <Form.Label>Price: </Form.Label>
               <Form.Control
                  type="float"
                  name="price"
                  defaultValue={dataMenu.price}
                  ref={priceRef}
               />
            </Form.Group>
            <Button type="submit">Submit</Button>
         </Form>
      </div>
   );
}

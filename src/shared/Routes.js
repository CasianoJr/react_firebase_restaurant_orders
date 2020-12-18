import React from "react";
import { Route, Switch } from "react-router-dom";
import MenuList from "../home/MenuList";
import ForgotPassword from "../authentication/ForgotPassword";
import Login from "../authentication/Login";
import UpdateProfile from "../authentication/ProfileUpdate";
import Signup from "../authentication/Signup";
import { RoutesLoginRequired, RoutesIsLoginAlready, RoutesIsAdmin } from "./RoutesCheck";
import AddMenu from "../admin/AddMenu";
import MenuAll from "../browse/MenuAll";
import UpdateMenu from "../admin/UpdateMenu";
import RetrieveCartV2 from "../transaction/RetrieveCartV2";
import RetrieveAllOrders from "../admin/RetrieveAllOrders";

export default function Routes() {
   return (
      <Switch>
         <Route path="/" exact component={MenuList} />
         <RoutesIsLoginAlready exact path="/signup" component={Signup} />
         <RoutesIsLoginAlready exact path="/login" component={Login} />
         <RoutesIsLoginAlready exact path="/forgot_password" component={ForgotPassword} />
         <RoutesIsAdmin exact path="/add_menu" component={AddMenu} />
         <Route exact path="/browse" component={MenuAll} />
         <RoutesLoginRequired exact path="/update_profile" component={UpdateProfile} />
         <RoutesLoginRequired exact path="/order_list" component={RetrieveCartV2} />
         <RoutesIsAdmin
            exact
            path="/:menuCategory/:menuId/update"
            component={UpdateMenu}
         />
         <RoutesIsAdmin exact path="/retrieve_all_orders" component={RetrieveAllOrders} />
      </Switch>
   );
}

import React from "react";
import { AuthProvider } from "./authentication/AuthProvider";
import { BrowserRouter } from "react-router-dom";
import Routes from "./shared/Routes";
import NavBar from "./shared/NavBar";
import BackgroundImage from "./utils/BackgroundImage";
import AlertMessage from "./authentication/AlertMessage";
import Instructions from "./utils/Instructions";
import BackToTop from "./utils/BackToTop";
import DataBaseProvider from "./shared/DataBaseProvider";
import Footer from "./utils/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./custom.css";

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <DataBaseProvider>
               <BackgroundImage>
                  <NavBar />
                  <Instructions />
                  <AlertMessage />
                  <Routes />
                  <Footer />
                  <BackToTop />
               </BackgroundImage>
            </DataBaseProvider>
         </AuthProvider>
      </BrowserRouter>
   );
}

export default App;

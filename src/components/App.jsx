import React from "react";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Footer from "./Footer";
import Menu from "../pages/Menu";
import Cutomize from "../pages/Customize";
import About from "../pages/About";
import Contact from "../pages/Contact";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Router>
        <Toaster />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/customize" exact element={<Cutomize />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/signin" exact element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;




// .socialMedia svg {
//   color: white;
//   margin: 20px;
//   font-size: 70px;
//   cursor: pointer;
// }

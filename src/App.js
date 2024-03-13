import React from "react";
import { Routes, Route,  BrowserRouter } from "react-router-dom";
import "./sass/index.scss";
import Home from "./pages/Home/Home";
import Header from './layouts/Header/Header';
import Footer from './layouts/Footer/Footer';
import About from "./pages/About/About";
import Logement from "./pages/Location/Location";
import NoFound from "./pages/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route path="*" element={<NoFound />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

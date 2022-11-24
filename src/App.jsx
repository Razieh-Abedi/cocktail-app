import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="cocktail/:id" element={<SingleCocktail />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>;
}

export default App;

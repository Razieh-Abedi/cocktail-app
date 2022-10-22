import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import SingleCocktail from "./pages/SingleCocktail";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import appContext from "./context";

function App() {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  return (
    <appContext.Provider
      value={[loading, searchTerm, cocktails, setSearchTerm]}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </appContext.Provider>
  );
}

export default App;

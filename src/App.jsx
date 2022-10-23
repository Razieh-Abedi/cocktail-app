import React, { useEffect, useState, useCallback } from "react";
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
  const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  const fetchDrinks = useCallback(() => {
    setLoading(true);
    fetch(`${drinksUrl}${searchTerm}`)
      .then((res) => res.json())
      .then(
        (data) => {
          const { drinks } = data;
          if (drinks) {
            const newCocktails = drinks.map((item) => {
              const {
                isDrink,
                strDrink,
                strDrinkThumb,
                strAlcoholic,
                strGlass,
              } = item;
              return {
                id: isDrink,
                name: strDrink,
                image: strDrinkThumb,
                info: strAlcoholic,
                glass: strGlass,
              };
            });
            setCocktails(newCocktails);
          } else {
            setCocktails([]);
            setLoading(false);
          }
        },
        [searchTerm]
      )
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  });
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);
  return (
    <appContext.Provider
      value={[
        loading,
        cocktails,
        setSearchTerm,
        setLoading,
        searchTerm,
        setCocktails,
      ]}
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

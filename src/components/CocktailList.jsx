import React, { useContext } from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import appContext from "../context";

function CocktailList() {
  const [cocktails, loading] = useContext(appContext);
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails matched your search!</h2>;
  } 
    return (
      <div>
        <Cocktail />
      </div>
    );
}

export default CocktailList;

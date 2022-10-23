import React, { useContext } from "react";
import Loading from "./Loading";
import Cocktail from "./Cocktail";
import appContext from "../context";

function CocktailList() {
  const [cocktails, loading] =
    useContext(appContext);
  // const drinksUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
  // const fetchDrinks = () => {
  //   setLoading(false);
  //   fetch(`${drinksUrl}${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const { drinks } = data;
  //       if (drinks) {
  //         const newCocktails = drinks.map((item) => {
  //           const { isDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
  //             item;
  //           return {
  //             id: isDrink,
  //             name: strDrink,
  //             image: strDrinkThumb,
  //             info: strAlcoholic,
  //             glass: strGlass,
  //           };
  //         });
  //         setCocktails(newCocktails);
  //       } else {
  //         setCocktails([]);
  //         setLoading(false);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   fetchDrinks();
  // }, [searchTerm]);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return <h2 className="section-title">No cocktails matched your search!</h2>;
  }
 
    
  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList;

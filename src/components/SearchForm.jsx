import React, { useContext } from "react";
import appContext from "../context";

function SearchForm() {
  const [setSearchTerm] = useContext(appContext);
  const searchValue = React.useRef("");
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);
  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
}

export default SearchForm;

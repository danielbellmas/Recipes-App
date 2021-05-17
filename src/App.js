import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./components/Recipe";

const App = () => {
  // useState
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  //functions
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };
  const getSearchValue = (e) => {
    let val = e.target.value;
    setSearch(val);
  };
  const getQueryValue = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  // useEffect
  useEffect(() => {
    getRecipes();
  }, [query]);

  return (
    <div className="App">
      <h1>Welcome To The Recipe Website</h1>
      <form onSubmit={getQueryValue} className="form">
        <input
          className=" input-search"
          autoFocus
          type="text"
          onChange={getSearchValue}
        />
        <button className="btn btn-primary" type="submit">
          Search
        </button>
      </form>
      {query === "" ? <h1>Search Somtheing!</h1> : ""}
      <div className="container">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            image={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            title={recipe.recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

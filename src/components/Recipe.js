import React from "react";

const Recipe = (props) => {
  return (
    <div className="recipe-card">
      <img className="recipe-img" src={props.image} alt="recipe" />
      <h2>
        <b>{props.title}</b>
      </h2>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
      <p>{Math.floor(props.calories)} Calories</p>
    </div>
  );
};

export default Recipe;

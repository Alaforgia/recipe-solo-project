import React from "react";

function RecipesListItem({ recipe }) {
  return (
    <div className="max-w-sm">
      <img className="" src={recipe.image} alt={recipe.name} />
      <h2 className="">Name: {recipe.name}</h2>
    </div>
  );
}

export default RecipesListItem;

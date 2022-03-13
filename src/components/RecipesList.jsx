import React from "react";
import RecipesListItem from "./RecipesListItem";

function RecipesList({ recipes }) {
  return (
    <div>
      {recipes.map((recipe, index) => {
        return <RecipesListItem key={index} recipe={recipe} />;
      })}
    </div>
  );
}

export default RecipesList;

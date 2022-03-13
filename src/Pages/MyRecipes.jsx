import React from "react";
import RecipesList from "../components/RecipesList";

function MyRecipes() {
  const recipes = [
    {
      name: "Tomato Bisque",
      image: "src/images/tomatobisque.jpg",
    },
  ];
  return (
    <div>
      <h1>Recipes List</h1>
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default MyRecipes;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRecipes from "../../Pages/MyRecipes";

function App() {
  return (
    <BrowserRouter>
      <div></div>
      <Routes>
        <Route path="/" element={<MyRecipes />} />
        <Route path="/my-recipes" element={<MyRecipes />} />
        <Route index element={<MyRecipes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

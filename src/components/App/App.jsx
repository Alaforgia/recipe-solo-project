import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyRecipes from "../../Pages/MyRecipes";
import BottomMenu from "../BottomMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#f9f6f0] pt-20 lg:pt-[120px] pb-10 lg:pb-20 overflow-hidden">
        <div className="container px-4 relative">
          <Routes>
            <Route path="/" element={<MyRecipes />} />
            <Route path="/my-recipes" element={<MyRecipes />} />
            <Route index element={<MyRecipes />} />
          </Routes>
        </div>
      </div>
      <BottomMenu />
    </BrowserRouter>
  );
}

export default App;

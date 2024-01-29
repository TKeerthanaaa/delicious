import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using it
// import Router from "react-router-dom";

import Meal from "../../Components/Meal.component";
import RecipeInfo from "../../Components/RecipeInfo/RecipeInfo";
import { useNavigate } from "react-router-dom";
import "../recipe/recipe.css"

const Recipe = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <div>
      <Meal />
      {/* Use Link for navigation */}
      {/* <Link to="/Meal/:MealId">
        <RecipeInfo />
      </Link> */}
      <button className="book-logout" onClick={handleSignOut}>
        Logout
      </button>
      <RecipeInfo />
    </div>
  );
};

export default Recipe;




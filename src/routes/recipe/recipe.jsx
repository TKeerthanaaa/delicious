import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom if you're using it
// import Router from "react-router-dom";

import Meal from "../../Components/Meal.component";
import RecipeInfo from "../../Components/RecipeInfo/RecipeInfo";

const Recipe = () => {
  return (
    <div>
      <Meal />
      {/* Use Link for navigation */}
      {/* <Link to="/Meal/:MealId">
        <RecipeInfo />
      </Link> */}
      <RecipeInfo />
    </div>
  );
};

export default Recipe;

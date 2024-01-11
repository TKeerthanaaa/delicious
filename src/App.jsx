import React from "react";
import "./Components/style.css";
import Home from "./routes/home/home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/footer";
import Recipe from "./routes/recipe/recipe";
import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";
import Meal from "./Components/Meal.component";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./page/login";
import SignUp from "./page/SignUp";
import Private from "./page/Private";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:MealId" element={<RecipeInfo />} />
          <Route path="" element={<Private />}>
            <Route path="/recipe" element={<Recipe />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route index={true} path="/" element={<Home />} />
//       <Route path="/:MealId" element={<RecipeInfo />} />
//       <Route path="" element={<Private />}>
//         <Route path="/recipe" element={<Recipe />} />
//       </Route>

//       <Route path="login" element={<Login />} />
//       <Route path="signup" element={<SignUp />} />
//     </Route>
//   )
// );

export default App;

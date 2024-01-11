import React from "react";
import { useUser } from "../Context/Usercontext";
import Login from "./login";
import Recipe from "../routes/recipe/recipe";

const Private = () => {
  const storedEmail = localStorage.getItem("userEmail");
  console.log(storedEmail);
  return storedEmail ? <Recipe /> : <Login />;
};

export default Private;

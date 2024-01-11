import { Link } from "react-router-dom";
import React, { useContext } from "react";
// import { signOut } from "firebase/auth";
// import { appAuth } from "/firebase";
import { useNavigate } from "react-router-dom";
import "../Navbar/navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };
  return (
    <nav className="navbar">
      <div className="container h-[5rem] flex item-center justify-between">
        <div>
          <Link to="/">
            <img
              src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/cf1151125727469.611ebe5d877e4.jpg"
              alt="logo"
              className="w-[110px] h-auto object-contain"
            />
          </Link>
        </div>
        <ul className="flex gap-10 items-center mx-[10rem]">
          <li className="font-medium text-xl font-bold">
            <Link to="/">HOME</Link>
          </li>
          <li className="font-medium text-xl font-bold">
            <Link to="/recipe">RECIPE</Link>
          </li>
        </ul>
        {/* <button onClick={() => signOut()}>Logout</button> */}
        <button onClick={handleSignOut}>Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;

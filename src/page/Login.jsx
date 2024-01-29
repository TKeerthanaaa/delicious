import React from "react";
import "./login.css";
import { useUser } from "../Context/Usercontext";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../firebase.js";
import Demo from "./demo.jsx";

const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async (event) => {
    event.preventDefault();
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    setUser(user.email, user.username);
    navigate("/recipe");
  };
  const {
    formFields,
    setFormFields,
    setUser,
    setUsername,
    setEmail,
    setPassword,
    setCpassword,
  } = useUser();

  const { email, password, cpassword } = formFields;

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log("hit");

    if (email && password) {
      try {
        const { user } = await signInAuthUserWithEmailAndPassword(
          email,
          password
        );
        console.log({ user });
        setFormFields({ email: "", password: "", cpassword: "" });
        if (user) {
          setUser(user.email, user.username);
          navigate("/recipe");
          console.log(user.email);
          console.log(user.username);
        }
      } catch (err) {
        console.log("Error Occurred while Login", err.message);
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          alert("Invalid Credentials");
        }
      }
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="login-container">
      <ToastContainer />

      <div className="form-box">
        <form action="" onSubmit={submitHandler}>
          <div className="input-box">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Enter your Email"
              onChange={changeHandler}
              className="input"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password"></label>
            <input
              type="password"
              placeholder="Enter your Password"
              onChange={changeHandler}
              className="input"
              id="password"
              name="password"
              required
            />
          </div>
          <input type="checkbox" /> Remember me!
          <button value="submit" className="btn">
            Login
          </button>
        </form>
        <h2 className="or">Or</h2>
        <button
          className="icon-img"
          style={{ border: "none" }}
          onClick={signInWithGoogle}
        >
          <img
            src="https://banner2.cleanpng.com/20201008/rtv/transparent-google-suite-icon-google-icon-5f7f985ccd60e3.5687494416021975968412.jpg"
            alt=""
          />
        </button>
        <Link to="/signUp"> New User? Sign Up Here</Link>

        <Demo />
      </div>
    </div>
  );
};

export default Login;

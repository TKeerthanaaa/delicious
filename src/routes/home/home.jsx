import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="cook">
          <div className="box">
            <img
              className="cooking"
              src="https://static.vecteezy.com/system/resources/previews/005/604/210/non_2x/a-woman-chef-wearing-a-white-coat-red-apron-and-a-kitchen-hood-on-her-head-while-smiling-free-vector.jpg"
              alt="cook"
            />
            <button className="btn">
              <a href="/recipe">View Recipe</a>
            </button>
          </div>

          <p className="description">
            “Mastering one recipe is better than mastering too many. Learn
            something and own it, and you’ll feel so much better about it.
            You’ll have more confidence if you’ve made it five times, and that
            confidence adds so much fun to cooking.”<span> –Tom Douglas</span>
          </p>
        </div>

        <div className="image">
          <img className="img" src="src\assets\image\recepie-1.jpg" alt="" />
          <h4 className="content">
            You have no idea how excited I’m to try this dish!
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;

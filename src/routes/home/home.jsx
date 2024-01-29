import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

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
              <Link to="/recipe">Explore Now</Link>
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
          <img
            className="img"
            src="https://e0.pxfuel.com/wallpapers/281/550/desktop-wallpaper-advertising-background-stirfried-synthetic-creative-catering-stirfrystir-fried-creative-synthe-food-poster-food-poster-design-food-background-thumbnail.jpg"
            alt=""
          />
          <h4 className="content">
            You have no idea how excited I’m to try this dish!
          </h4>
        </div>
      </div>
      <div className="skills">
        <section className="skill-image">
          <img
            src="https://dietdetective.com/wp-content/uploads/shutterstock_781081081-2.jpg"
            alt=""
          />
        </section>
        <section className="skill-content">
          <h2>Improve your cooking skills</h2>
          <ul>
            <li>Equip yourself with the right tools</li>
            <li>Get to know your ingredients</li>
            <li>Learn basic cooking techniques</li>
            <li> Practice, practice, practice!</li>
          </ul>
        </section>
      </div>
      <div className="recipe-quotes">
        <h2>
          <span>“</span>I learned to cook by watching and helping my mother in
          the kitchen. I also learned by trial and error. Even though I’m big on
          recipes, I love to make up my own dishes and when you take a risk in
          the kitchen, you learn a lot about food! ~ Nina Dobrev
        </h2>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import FoodItem from "./FoodItem";
import hero1 from "../../images/hero1.jpg";
import hero2 from "../../images/hero2.jpg";
import hero3 from "../../images/hero3.jpg";
import hero4 from "../../images/hero4.jpg";
import hero5 from "../../images/hero5.jpg";
import thumb1 from "../../images/thumb1.jpg";
import thumb2 from "../../images/thumb2.jpg";
import thumb3 from "../../images/thumb3.jpg";
import thumb4 from "../../images/thumb4.jpg";
import thumb5 from "../../images/thumb5.jpeg";
import add from '../../images/add.ico'
import send from "../../images/send.ico"
import view from '../../images/view.ico'

import './myfood.css'

const MyFood = () => {
  return (
    <>
      <h3>My food</h3>
      <div className="wrapper">
        <div className="foodcard">
          <div className="thumb">
            <img src={thumb1} alt="thumbnail" />
            <div className="text">
              <p>Spicy Moroccan shakshuka</p>
            </div>
          </div>
          <div className="hero">
            <img src={hero1} alt="hero" />
            <div className="text">
              <p>This is hero text</p>
              <img src={add} alt="add" className="icon" />
              <img src={send} alt="send" className="icon" />
              <img src={view} alt="view" className="icon" />
              <button>order now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFood;

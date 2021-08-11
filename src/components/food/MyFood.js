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
import add from "../../images/add-16.png";
import send from "../../images/send.ico";
import view from "../../images/view.ico";

import "./myfood.css";

const MyFood = () => {
  return (
    <>
      <h3 className="section-title">My food</h3>
      <div className="wrapper">
        <FoodItem
          thumbnail={thumb1}
          title="Spicy Moroccan shakshuka"
          hero={hero1}
          title2="This is hero text"
          add={add}
          send={send}
          view={view}
        />
        <FoodItem
          thumbnail={thumb2}
          title="Spicy Moroccan shakshuka"
          hero={hero2}
          title2="This is hero text"
          add={add}
          send={send}
          view={view}
        />
        <FoodItem
          thumbnail={thumb3}
          title="Spicy Moroccan shakshuka"
          hero={hero3}
          title2="This is hero text"
          add={add}
          send={send}
          view={view}
        />
        <FoodItem
          thumbnail={thumb4}
          title="Spicy Moroccan shakshuka"
          hero={hero4}
          title2="This is hero text"
          add={add}
          send={send}
          view={view}
        />
        <FoodItem
          thumbnail={thumb5}
          title="Spicy Moroccan shakshuka"
          hero={hero5}
          title2="This is hero text"
          add={add}
          send={send}
          view={view}
        />
        
        
      </div>
    </>
  );
};

export default MyFood;

import React from 'react'
import './myfood.css'

const FoodItem = ({ thumbnail, title, hero, title2,add,send,view}) => {
  return (
    <div className="foodcard">
      <div className="thumb">
        <img src={thumbnail} alt="thumbnail" />
        <div className="text">
          <p>{title}</p>
        </div>
      </div>
      <div className="hero">
        <img src={hero} alt="hero" />
        <div className="text">
          <p>{title2}</p>
          <img src={add} alt="add" className="icon" />
          <img src={send} alt="send" className="icon" />
          <img src={view} alt="view" className="icon" />
          <button>order now</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem

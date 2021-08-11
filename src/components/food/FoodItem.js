import React from 'react'
import './myfood.css'

const FoodItem = (props) => {
    return (
      <>
        <div>
          <div>
            <img src={props.thumbsrc} alt="thumbnail"/>
            <img src={props.herosrc} alt="thumbnail"/>
            <div className="text-before">
                <p>{props.brief}</p>
            </div>
            <div className="text-after">
                <p>{props.text}</p>
            </div>
          </div>
        </div>
      </>
    );
}

export default FoodItem

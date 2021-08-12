import React from 'react'
import img1 from '../../images/cookingwoman.jpg'
import './welcome.css'

const Welcome = () => {
    return (
      <>
        <div className="flex-container">
          <div className="flex-item flex-item1">
            <img src={img1} alt="cooking" />
            <input type="text" placeholder="Send me a message"></input>
          </div>
          <div className="flex-item flex-item2">
            <h3>Welcome to Maria's italian Kitchen</h3>

            <p>
              I was born in Puglia, in the south of italy, and grew<br></br>in a
              small village surrounded by old olive groves and vines. My mother
              and i used to spend a lot of time in the kitchen...
              <span>more</span>
            </p>

            <ul className="stats">
              <li>Following 27</li>
              <li>Followers 16k</li>
              <li>Joined September 2021</li>
              <li>Lives and cooks in London,England</li>
            </ul>
          </div>
          <div className="flex-item flex-item3">
            <button className="button primary">follow @pastanona</button>
            <button className="button secondary">share kitchen</button>
          </div>
        </div>
       
      </>
    );
}

export default Welcome

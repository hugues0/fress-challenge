import React from 'react'
import './mykitchen.css'
import KitchenItem from './KitchenItem'
import img1 from '../../images/one.jpg'
import img2 from '../../images/two.jpg'
import img3 from '../../images/three.jpg'
import img4 from '../../images/four.jpg'
const myKitchen = () => {
    return (
      <>
        <h3 className="section-title">My Kitchen</h3>
        <div className="flex-container1">
          <KitchenItem img src={img1} className="flex-item-one" />
          <KitchenItem img src={img2} className="flex-item-one" />
          <KitchenItem img src={img3} className="flex-item-one" />
          <KitchenItem img src={img4} className="flex-item-one" />
        </div>
      </>
    );
}

export default myKitchen

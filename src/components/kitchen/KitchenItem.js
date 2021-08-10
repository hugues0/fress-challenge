import React from 'react'

const KitchenItem = ({src,className}) => {
    return (
        <div>
            <img src={src} alt="kitchen" className={className}/>
        </div>
    )
}

export default KitchenItem

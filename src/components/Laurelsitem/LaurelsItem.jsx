import React from 'react'
import './LaurelsItem.css'
const LaurelsItem = ({award:{imgUrl,title,subtitle}}) => {
  return (
    <div className='app__laurels_item flex__center'>
        <div className="app__laurels_item-img">
            <img src={imgUrl} alt='laurels-img' />
        </div>

        <div className="app__laurels_item-content">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default LaurelsItem;
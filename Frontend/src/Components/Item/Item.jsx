import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} Click src={props.image} alt="" /></Link>   {/* Wrapt the image in a link. To navigate to the product id. A functional div. When we click any of the product it will scroll on top of the page */}
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.new_price}
            </div>
        </div>
    </div>
  )
}

export default Item
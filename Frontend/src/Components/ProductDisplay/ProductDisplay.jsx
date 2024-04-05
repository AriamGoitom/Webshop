import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext);            /* Import add to cart function thru our context api. Here we will provide the Shopcontext. */
   
    return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">     {/* Ratings for the product. */}
                <img src={star_icon} alt="" />              {/* To give the product star ratings. */}
                <img src={star_icon}  alt="" />
                <img src={star_icon}  alt="" />
                <img src={star_icon}  alt="" />
                <img src={star_dull_icon}  alt="" />        {/* To make the star dull. */}
                <p>(122)</p>                            {/* Ratings for the product. */}
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline 
                and short sleeves, worn as an undershirt or outer 
                garment.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>                   {/* We will pass an arrow function. In this one we will call to our addToCart function and here we will pass the product id as product.id.  */}
            <p className='productdisplay-right-category'><span>Category: </span>Women, T-shirt, Crop Top</p>
            <p className='productdisplay-right-category'><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay
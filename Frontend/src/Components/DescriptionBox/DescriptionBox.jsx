import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>
                An e-commerce website is an online plattform that facilitates and selling of a product or services over the internet it serves as a virtual marketplace
            </p>
            <p>
                E-commers websites typically display...
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox
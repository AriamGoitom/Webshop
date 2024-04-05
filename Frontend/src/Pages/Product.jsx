import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productId} = useParams();                  /* Used useParams to get the productId. Using the productId we will find product in the all_product data. */
  const product = all_product.find((e)=> e.id === Number (productId))  /* If this condition is true then this procuct will be displayed. e is a number format. ProductId is a string and will be converted in number. */
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>             {/* Here we will pass this props product where we will pass the product data using product. Using this props we will display our product, image, title and prices. */}          
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../BreadCrums/BreadCrums';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelativeProducts from '../Components/RelativeProducts/RelativeProducts';


const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RelativeProducts />
    </div>
  )
}

export default Product
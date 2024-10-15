import React from 'react'
import '../BreadCrums/BreadCrums.css'
import arrrow_icon from '../Components/Images/breadCrum_arrow.png'

const BreadCrums = (props) => {
  const {product} = props;
  return (
    <div className='BreadCrums'>
      HOME <img src={arrrow_icon} alt="" /> SHOP <img src={arrrow_icon} alt="" /> {product.category} <img src={arrrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default BreadCrums;
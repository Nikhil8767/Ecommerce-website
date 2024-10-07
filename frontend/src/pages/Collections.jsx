import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Collections = () => {
  const {products}=useContext(ShopContext);
  return (
    <div>
        <div className='flex-flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        
        </div>
    </div>
  )
}

export default Collections
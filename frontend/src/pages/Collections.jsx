// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import Product from './Product';
// import ProductItem from '../components/ProductItem';

// const Collections = () => {
//   const {products}=useContext(ShopContext);
//   const [showFilter,setShowFilter]=useState(false);
//   const [filterProducts,setFilterProducts]=useState([]);

//   useEffect(()=>{
//       setFilterProducts(products)
//   },[])
//   return (
//         <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
            
//             {/* filter option  */}
//             <div className='min-w-60'>
//           <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
//           <img  className={`h-3 sm:hidden ${showFilter ? 'rotate-90 ':' '}`}src={assets.dropdown_icon} alt="" />
//           {/* categories filter  */}
//           <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? ' ':'hidden'} sm:block`}>
//             <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
           
//             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//               <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Men'} />Men
//                 </p> 
//                 <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Women'} />Women
//                 </p>
//                 <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Kids'} />Kids
//                 </p>
//             </div>
//           </div>
//           {/* sub category filter  */}

//           <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? ' ':'hidden'} sm:block`}>
//             <p className='mb-3 text-sm font-medium'>TYPE</p>
//             <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//               <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
//                 </p> 
//                 <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
//                 </p>
//                 <p className='flex gap-2'>
//                 <input type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
//                 </p>
//             </div>
//           </div>  
//         </div>
//         {/* now right side ui  */}
//         <div className='flex-1'>
//           <div className='flex justify-between text-base sm:text-2xl mb-4'>
//             <Title text1={'All'} text2={'COLLECTIONS'}/>
//             {/* product sort  */}
//             <select>
//               <option value="releavent">Sort by:Relavent</option>
//               <option value="low-high">Sort by:Low to High</option>
//               <option value="high-low">Sort by:High to Low </option>
//             </select>
//           </div>
//         </div>

//         {/* map products  */}
//          <div className='grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//             {
//               filterProducts.map((item,index)=>( 
//                 <ProductItem key={index} name={item._name} id={item._id} price={item.price} image={item.image} />
//               ) )
//             }
//          </div>
//         </div>
//   )
// }

// export default Collections

import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, [products]); // Use products as dependency to update filtered products

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter Option */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
        </p>
        <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
        
        {/* Categories Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} />Men
            </p> 
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} />Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} />Kids
            </p>
          </div>
        </div>
        
        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} />Topwear
            </p> 
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Winterwear'} />Winterwear
            </p>
          </div>
        </div>  
      </div>

      {/* Right Side UI */}
      <div className='flex-1'>
        {/* Header with Title and Sorting */}
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'All'} text2={'COLLECTIONS'} />
          <select className='text-sm sm:text-base'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              name={item._name} 
              id={item._id} 
              price={item.price} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;

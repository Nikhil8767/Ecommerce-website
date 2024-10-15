import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTATCT'} text2={'US'}/>
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]' />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>santoshi mata mandir <br />nehru coloy pension nagar nagpur</p>
        <p className='text-gray-500'>tel:(415)555-39393 <br />email:admin@gamil.com</p>
        <p className='font-semibold text-xl text-gray-500'>Careers at forever</p>
        <p className='text-gray-500'>learn more about us and jobs opening</p>
       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore job</button>
      </div>
    </div>
    <NewsLetterbox/>
    </div>
  )
}

export default Contact
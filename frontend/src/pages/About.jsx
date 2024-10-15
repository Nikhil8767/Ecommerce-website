import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterbox from '../components/NewsLetterbox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>this is the best shopping site made by Nikhil Gupta .for making or creating more sites like this contact him</p>
        <p>you can also text him on his linkedin account .</p>
        <b className='text-gray-800'>OUR MISSIONS</b>
        <p>our main mission is to supply the best and the original quality of brand to the user where ever he needs it </p>
        </div>
      </div>

      <div className='text-xl py-4' >
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Qualtity Assurence:</b>
        <p className='text-gray-600'>the qualtiy which we provide is the best ever and you will find no such qualtity anywhere</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convinence:</b>
        <p className='text-gray-600'>the qualtiy which we provide is the best ever and you will find no such qualtity anywhere</p>
      </div>
      <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional customer:</b>
        <p className='text-gray-600'>the qualtiy which we provide is the best ever and you will find no such qualtity anywhere</p>
      </div>
      </div>
      <NewsLetterbox/>

    </div>
  )
}

export default About
"use client";
import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai"

const Footer = () => {
  return (
    <div className='bg-black text-white flex flex-col gap-5 max-lg:px-5'>
      <h1 className='text-extrabold'>Early Mart</h1>
      <div className='w-[50rem] flex justify-center gap-20  border  border-b-white  max-sm:w-[70rem]'>
        <p>Your Email</p>
        <a href="" className='hover:bg-orange-500'>Suscribe</a>
      </div>
      <div className='flex gap-10  max-lg:flex-col'>
        <a href="" className='hover:bg-orange-500 cursor-pointer'>Best Sellers</a>
        <a href="" className='hover:bg-orange-500 cursor-pointer'>Gift Ideas</a>
        <a href="" className='hover:bg-orange-500 cursor-pointer'>New Releases</a>
        <a href="" className='hover:bg-orange-500 cursor-pointer'>Today's Deals</a>
        <a href="" className='hover:bg-orange-500 cursor-pointer'>Customer Service</a>
      </div>
      <div className='flex items-center justify-center'>
        <p>Help Line Number:</p>
        <a href='' className='hover:bg-orange-500 cursor-pointer'>+1 1800 1200 1200</a>
      </div>
      <div className='flex items-center justify-center'>
        <p> <AiOutlineCopyright />2020 All Rights Reserved. Designed by Free Html Templates</p>
      </div>
    </div>
  )
}

export default Footer




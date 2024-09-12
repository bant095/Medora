import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        {/* ----LEFT SECTION ------ */}
        <div>
          <img className='w-40 mb-5' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            At Medora, we make healthcare easy and accessible. Our platform
            connects you with trusted doctors, allowing you to book appointments
            quickly and effortlessly. Your health is our priority, and we're
            here to simplify your care journey.
          </p>
        </div>

        {/* ----CENTER SECTION ------ */}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ----RIGHT SECTION ------ */}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH </p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+0-000-000-000</li>
            <li>contact@medora.com</li>
          </ul>
        </div>
      </div>

      {/* --------- Copyright ------ */}
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>
          Copyright 2024 @Medora.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

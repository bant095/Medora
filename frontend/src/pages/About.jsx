import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          className='w-full md:max-w-[360px]'
          src={assets.about_image}
          alt=''
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-500 '>
          <p>
            Welcome to Medora,Your trusted partner in booking appointments with
            reliable healthcare professionals.
          </p>
          <p>
            At Medora, we know how challenging it can be to find the right
            doctor and manage your healthcare appointments efficiently. That's
            why we've designed our platform to simplify the process, offering
            you quick access to trusted doctors across various specialties.
          </p>
          <p>
            Medora is committed to improving healthcare accessibility through
            innovative technology. We are continually enhancing our platform to
            provide you with a seamless, stress-free experience—whether it's
            your first consultation or ongoing care. We are dedicated to
            supporting you every step of the way.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Our vision at Medora is to create a world where healthcare is easily
            accessible to everyone. We strive to connect patients with the right
            healthcare providers, ensuring that you can get the care you need
            when it matters most.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>
          WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

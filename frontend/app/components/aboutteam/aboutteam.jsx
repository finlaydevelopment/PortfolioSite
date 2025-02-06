import React from 'react'
import Image from 'next/image'

const AboutTeam = () => {
  return (
    <div id="team" className='bg-[#F1F1F1] px-4 sm:px-8 lg:px-24 xl:px-48 py-20'>
        <div>
            <div className="flex flex-col lg:flex-row bg-white rounded-3xl my-10 p-10 lg:p-20 lg:space-x-20 sm:text-gray-600">
                <div className="flex-1">
                    <h2 className='font-bold text-gray-800 text-3xl lg:text-4xl pb-5'>About Us</h2>
                    <p className='text-lg lg:text-xl text-gray-800'>Founded in 2022 by an undergraduate student specializing in software engineering. We have grown and built our business to provide the best online development service, with a 100% satisfaction guarantee. Every product is made with love from Belfast, Northern Ireland.</p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <Image src="/assets/aboutimg.svg" width={300} height={50} alt="About Us" className="rounded-xl" />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row bg-white rounded-3xl my-10 p-10 lg:p-20 lg:space-x-20 sm:text-gray-600">
                <div className="flex-1">
                    <h2 className='font-bold text-gray-800 text-3xl lg:text-4xl pb-5'>Our Team</h2>
                    <p className='text-lg lg:text-xl text-gray-800'>Originally, I launched the business as a solo venture, with myself, Matt, overseeing every aspect of operations. As the business grew, I continued to personally handle everything—from web development and design to marketing and project management—ensuring each project is delivered with precision, speed, and attention to detail.</p>
                </div>
                <div className="flex-1 flex justify-center lg:justify-end">
                  <Image src="/assets/teamimg.svg" alt="Our Team" width={300} height={50} className="rounded-xl" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutTeam

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div id='introduction '>
      <div className="bg-[#BFA2DB] text-white">
        <div className="container mx-4 sm:mx-8 md:mx-24 lg:mx-48 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between py-8">
            <div className="space-y-6 max-w-md">
              <hr className="border-t-[3px] border-[#7F7C82] w-1/3" />
              <h1 className="text-4xl sm:text-5xl font-bold">
                Providing solutions<br/>to creative ideas
              </h1>
              <p className="text-base sm:text-lg">
                Let’s get that business or hobby online. We blend our expertise
                and technology to help you take the next step into a new market.
                Ensure your idea becomes a reality today.
              </p>
              <Link href="/contact">
                <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100 mt-4">
                  Message me
                </button>
              </Link>
            </div>
            <div className="flex-1 mt-8 lg:mt-0 lg:ml-8 hidden lg:block">
              <Image src="/assets/hero_img.svg" alt="Hero Image" width={300} height={215} layout="responsive" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Image className='pb-5 pt-8 animate-bounce' src="/assets/anglearrow.svg" alt="angle arrow" width={25} height={25} />
        </div>
      </div>
      {/* New lower section with logos */}
      <div className="bg-white py-8">
        <div className="container  sm:mx-0 md:mx-24 lg:mx-48  sm:px-0 lg:px-8">
          <div className="hidden sm:flex justify-center space-x-8 sm:space-x-10 lg:space-x-14">
            <Image src="/assets/wordpress.svg" alt="WordPress" width={100} height={50} />
            <Image src="/assets/reactjs.svg" alt="React.js" width={100} height={50} />
            <Image src="/assets/shopify.svg" alt="Shopify" width={100} height={50} />
            <Image src="/assets/figma.svg" alt="Figma" width={100} height={50} />
            <Image src="/assets/html.svg" alt="HTML5" width={100} height={50} />
            <Image src="/assets/aws.svg" alt="AWS" width={100} height={50} />
            <Image src="/assets/nodejs.svg" alt="Node.js" width={100} height={50} />
            <Image src="/assets/css.svg" alt="CSS3" width={100} height={50} />
          </div>
          {/* Infinite sliding logos for super small screens */}
          <div className="sm:hidden overflow-hidden ">
            <div className="flex animate-marquee space-x-8">
              {/* Original set of images */}
              <Image src="/assets/wordpress.svg" alt="WordPress" width={100} height={50} />
              <Image src="/assets/reactjs.svg" alt="React.js" width={100} height={50} />
              <Image src="/assets/shopify.svg" alt="Shopify" width={100} height={50} />
              <Image src="/assets/figma.svg" alt="Figma" width={100} height={50} />
              <Image src="/assets/html.svg" alt="HTML5" width={100} height={50} />
              <Image src="/assets/aws.svg" alt="AWS" width={100} height={50} />
              <Image src="/assets/nodejs.svg" alt="Node.js" width={100} height={50} />
              <Image src="/assets/css.svg" alt="CSS3" width={100} height={50} />
              {/* Duplicate set of images to create the loop */}
              <Image src="/assets/wordpress.svg" alt="WordPress" width={100} height={50} />
              <Image src="/assets/reactjs.svg" alt="React.js" width={100} height={50} />
              <Image src="/assets/shopify.svg" alt="Shopify" width={100} height={50} />
              <Image src="/assets/figma.svg" alt="Figma" width={100} height={50} />
              <Image src="/assets/html.svg" alt="HTML5" width={100} height={50} />
              <Image src="/assets/aws.svg" alt="AWS" width={100} height={50} />
              <Image src="/assets/nodejs.svg" alt="Node.js" width={100} height={50} />
              <Image src="/assets/css.svg" alt="CSS3" width={100} height={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

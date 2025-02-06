"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Footer = () => {
  const sectionsRef = useRef({});

  useEffect(() => {
    sectionsRef.current = {
      introduction: document.getElementById('introduction'),
      services: document.getElementById('services'),
      projects: document.getElementById('projects'),
      team: document.getElementById('team'),
    };
  }, []);

  const handleSetActiveLink = (id) => {
    const element = sectionsRef.current[id];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row bg-white justify-between items-center mx-4 lg:mx-48 my-3 space-y-4 lg:space-y-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="text-gray-800 mr-10 pr-10 border-e-0 lg:border-e-2">
            <h2 className="font-bold text-2xl">Get a free Quote</h2>
            <p>Have an enquiry? Get in touch and we will help!</p>
          </div>
          <Link href="/contact">
            <button className="mt-4 lg:mt-0 text-lg bg-[#BFA2DB] text-white px-6 py-3 rounded-full hover:bg-[#A48BBB]">
              Message us
            </button>
          </Link>
        </div>
        <div className="flex mt-4 lg:mt-0">
          <Link href="https://www.linkedin.com/in/matthew-finlay-963710180/" target="_">
            <Image src="/assets/linkedin.svg" alt="LinkedIn Logo" width={31} height={31} className="hover:cursor-pointer mx-5" />
          </Link>
          <Link href="https://www.facebook.com/FinlayDev/" target="_">
            <Image src="/assets/facebook.svg" alt="facebook Logo" width={31} height={31} className="hover:cursor-pointer mx-5" />
          </Link>
          <Link href="https://github.com/finlaydevelopment" target="_">
            <Image src="/assets/github.svg" alt="Github Logo" width={31} height={31} className="hover:cursor-pointer mx-5" />
          </Link>
        </div>
      </div>
      <div className='bg-[#BFA2DB] flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-48 text-white py-10'>
        <div className="flex-1 flex flex-col items-start mb-8 lg:mb-0">
          <Link href="/" className="h-10">
            <Image src="/assets/logo2.svg" alt="Logo" width={150}  height={31} className="mb-6" />
          </Link>
          <p className='mt-4 w-9/12'>Dedicated online website development agency that strives to provide market solutions and products, 
            making your ideas come to life. Offering Website development, digital design and Search Engine 
            optimization (SEO). Hire a Developer today.
          </p>
        </div>
        <div className="flex-1 lg:flex lg:justify-end lg:space-x-16">
          <div className="mb-0 lg:mb-8 flex flex-col lg:items-start">
            <h3 className="font-bold text-2xl mb-4">Site Map</h3>
            <ul className="flex flex-col">
              <li className="mb-4">
                <a 
                  href="#introduction" 
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActiveLink('introduction');
                  }}
                >
                  Introduction
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#services" 
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActiveLink('services');
                  }}
                >
                  Services
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#projects" 
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActiveLink('projects');
                  }}
                >
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a 
                  href="#team" 
                  className="hover:text-gray-300 cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetActiveLink('team');
                  }}
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col lg:items-start">
            <h3 className="font-bold text-2xl mb-0 lg:mb-4 hidden lg:block">&nbsp;</h3> {/* Hidden on small screens */}
            <ul className="flex flex-col">
              <Link href="/tos">
              <li className="mb-4">Terms & Conditions</li>
              </Link>
              <Link href="/cookies">
              <li className="mb-4">Cookies</li>
              </Link>
              <Link href="/privacy">
              <li className="mb-4">Privacy</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex-1 lg:flex lg:justify-end">
          <div className="flex flex-col">
            <h3 className="font-bold text-2xl mb-6">Contact</h3>
            <p className="mb-6">02899998888</p>
            <p className="mb-6">sales@finlaydev.com</p>
            <Link href="/contact">
              <button className="mb-6 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">
                Message us
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-48 py-4 bg-[#A48BBC] text-white">
        <p className="mb-2 lg:mb-0">Made with love from Belfast, Northern Ireland.</p>
        <p>All Rights © Finlay Development 2025</p>
      </div>
    </div>
  );
}

export default Footer;

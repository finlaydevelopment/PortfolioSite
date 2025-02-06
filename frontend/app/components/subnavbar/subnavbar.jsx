"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const SubNavbar = () => {
  return (
    <nav className="bg-[#BFA2DB] text-white p-4">
      <div className="container mx-auto flex justify-center items-center">
        <Link href="/" className="h-12">
          <Image src="/assets/logo2.svg" alt="Logo" width={120} height={50}/>
        </Link>
      </div>
    </nav>
  );
};

export default SubNavbar;

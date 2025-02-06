import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  const images = [
    { src: '/assets/project1.png', aspectRatio: 'wider', link: 'https://tileswoodfloorni.com', external: true },
    { src: '/assets/calculator.png', aspectRatio: 'narrow', link: '/projects/project-calculator', external: false },
    { src: '/assets/project2.png', aspectRatio: 'wider', link: 'https://ulsteradventure.com', external: true },
    { src: '/assets/design.png', aspectRatio: 'narrow', link: '/projects/project-example2', external: false },
    { src: '/assets/laptopside.png', aspectRatio: 'wider', link: 'https://example.com/project5', external: true },
    { src: '/assets/phone.png', aspectRatio: 'wider', link: '/projects/project-example3', external: false },
  ];

  return (
    <div id="projects" className="bg-white py-20 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Past Projects</h2>
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`group relative ${image.aspectRatio === 'wider' ? 'col-span-1 xl:col-span-2' : 'col-span-1'} shadow-lg`}
            >
              {image.external ? (
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <ImageOverlay src={image.src} />
                </a>
              ) : (
                <Link href={image.link}>
                  <ImageOverlay src={image.src} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageOverlay = ({ src }) => (
  <div className="relative w-full h-48">
    <Image 
      src={src} 
      alt="Project image" 
      layout="fill"
      objectFit="cover" 
      className="group-hover:opacity-50 transition-opacity duration-300 ease-in-out"
    />
    <div className="absolute inset-0 bg-[#BFA2DB] bg-opacity-0 group-hover:bg-opacity-80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
      <Image src="/assets/searchwh.svg" alt="Search Icon" width={30} height={30} />
    </div>
  </div>
);

export default Projects;

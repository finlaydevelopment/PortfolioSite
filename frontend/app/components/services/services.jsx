import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const ServiceCard = ({ iconSrc, title, description }) => (
    <div className="w-full lg:w-1/3 px-4 mb-16 lg:mb-8 mt-8">
      <div className="flex flex-col items-center text-center shadow-lg overflow-visible bg-[#BFA2DB] rounded-lg">
        {/* Icon container */}
        <div className="w-20 h-20 -mt-10 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
          <Image src={iconSrc} alt={title} width={40} height={40} />
        </div>
        {/* Title and description container */}
        <div className="pt-5 pb-4 px-4 bg-[#BFA2DB] w-full rounded-t-lg">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <div className="px-4 py-4 bg-white w-full rounded-b-lg">
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="services" className="bg-[#F1F1F1] py-12">
      <div className="container mx-auto px-4 sm:px-8 lg:px-24 flex flex-wrap justify-between items-start">
        {/* Header section */}
        <div className="w-full lg:w-1/4 text-left mb-16 lg:mb-0 px-4">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-600">
            At Finlay Development, we create tailored websites, impactful digital designs, and effective SEO strategies to boost your online presence. Our expertise ensures your business thrives in Northern Ireland&apos;s competitive digital landscape.
          </p>
        </div>
        {/* Service cards section */}
        <div className="w-full lg:w-3/4 flex flex-wrap justify-between">
          <ServiceCard
            iconSrc="/assets/programming.svg"
            title="Website Development"
            description="Professional programming using the latest technologies provided by our in-house development team."
          />
          <ServiceCard
            iconSrc="/assets/webdesign.svg"
            title="Digital Website Design"
            description="Creativity and attention to detail, years of experience within the market, we help make your dreams a reality."
          />
          <ServiceCard
            iconSrc="/assets/seo.svg"
            title="Search Engine Optimisation"
            description="Ensuring your business is 1st. We push all rankings to provide you with the best search engine results."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;

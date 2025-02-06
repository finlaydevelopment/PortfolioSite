"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("introduction");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef({});

  useEffect(() => {
    sectionsRef.current = {
      introduction: document.getElementById("introduction"),
      services: document.getElementById("services"),
      projects: document.getElementById("projects"),
      team: document.getElementById("team"),
    };
  }, []);

  const handleSetActiveLink = (id) => {
    const element = sectionsRef.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveLink(id);
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="bg-[#BFA2DB] text-white p-4 w-full">
      <div className="max-w-screen-m mx-4 sm:mx-8 md:mx-24 lg:mx-48 mt-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="h-10">
            <Image src="/assets/logo2.svg" alt="Logo" width={120} height={50} />
          </Link>
        </div>

        {/* Navbar Links Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
          <a
            href="#introduction"
            className={`hover:text-gray-300 ${
              activeLink === "introduction" ? "font-bold" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActiveLink("introduction");
            }}
          >
            Introduction
          </a>
          <a
            href="#services"
            className={`hover:text-gray-300 ${
              activeLink === "services" ? "font-bold" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActiveLink("services");
            }}
          >
            Services
          </a>
          <a
            href="#projects"
            className={`hover:text-gray-300 ${
              activeLink === "projects" ? "font-bold" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActiveLink("projects");
            }}
          >
            Projects
          </a>
          <a
            href="#team"
            className={`hover:text-gray-300 ${
              activeLink === "team" ? "font-bold" : ""
            }`}
            onClick={(e) => {
              e.preventDefault();
              handleSetActiveLink("team");
            }}
          >
            Team
          </a>
          <Link href="/contact">
            <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-100">
              Message me
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl hover:text-gray-300 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#BFA2DB] bg-opacity-80 text-white flex flex-col items-center justify-center z-50">
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-3xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ✕
          </button>

          {/* Mobile Menu Links */}
          <div className="flex flex-col items-center space-y-6 text-xl">
            <a
              href="#introduction"
              className="hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                handleSetActiveLink("introduction");
              }}
            >
              Introduction
            </a>
            <a
              href="#services"
              className="hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                handleSetActiveLink("services");
              }}
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                handleSetActiveLink("projects");
              }}
            >
              Projects
            </a>
            <a
              href="#team"
              className="hover:text-gray-300"
              onClick={(e) => {
                e.preventDefault();
                handleSetActiveLink("team");
              }}
            >
              Team
            </a>
            <Link href="/contact">
              <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100">
                Message me
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

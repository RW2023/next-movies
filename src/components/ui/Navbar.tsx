/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import SubHeading from './SubHeading';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close the navbar
  const closeNavbar = () => {
    setIsOpen(false);
  };
  return (
    <nav
      className="flex items-center justify-between flex-wrap p-3 navbar mt-0 mb-4 sticky top-0 z-20 bg-base-300 shadow-2xl bg-opacity-90"
      style={{ fontFamily: "'Poppins', sans-serif" }}
      // data-theme="black"
    >
      <div className="flex items-center flex-shrink-0 text-2xl mr-6">
        <Link href="/">
          <span
            onClick={closeNavbar}
            className="font-semibold text-xl tracking-tight cursor-pointer"
          >
            <div className="flex items-center">
              {' '}
              {/* Flexbox container */}
              <SubHeading title="flixer" iconClass="fas fa-film" />
            </div>
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-4xl inline-flex items-center justify-center p-2 rounded-md hover:bg-button hover:text-buttonText focus:outline-none focus:ring-2 focus:ring-inset focus:ring-buttonText text-base-content"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
      >
        <div className="text-sm lg:flex-grow">
          <Link href={'/movies'}>
            <span
              onClick={closeNavbar}
              className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:underline mr-4 cursor-pointer"
            >
              <i className="fas fa-video mr-2"></i>Movies
            </span>
          </Link>
          <Link href="/about">
            <span
              onClick={closeNavbar}
              className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl  hover:underline mr-4 cursor-pointer"
            >
              <i className="fas fa-images mr-2"></i>About
            </span>
          </Link>
          <Link href="/feedback">
            <span
              onClick={closeNavbar}
              className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:underline mr-4 cursor-pointer"
            >
              <i className="fas fa-comments mr-2"></i>Feedback
            </span>
          </Link>
          <Link href="/contact">
            <span
              onClick={closeNavbar}
              className="block mt-4 lg:inline-block lg:mt-0 text-strokeLight text-xl hover:underline cursor-pointer mr-2"
            >
              <i className="fas fa-envelope mr-2"></i>Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

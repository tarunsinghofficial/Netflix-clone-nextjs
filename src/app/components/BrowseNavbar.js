'use client'
import React, { useState } from 'react';
import logo from '../assets/logo.png'
import Image from 'next/image';
import { MdSearch } from 'react-icons/md';
import { AiFillBell } from 'react-icons/ai';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap p-4 z-[100] w-full">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Image src={logo} className="w-32 h-9 mr-2" alt="Logo" />
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
        >
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
      >
        <div className="lg:flex-grow text-lg">
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Home
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            TV Shows
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            Movies
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            New & Popular
          </a>
          <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
            My List
          </a>
        </div>
        <div>
          <div className='flex gap-2'>
            <MdSearch color="white" className='text-4xl' />
            <AiFillBell color='white' className='text-4xl' />
          </div>
        </div>
      </div>
    </nav>
  );
}
export default App;
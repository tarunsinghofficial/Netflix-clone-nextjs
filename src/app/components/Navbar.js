'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className={`flex flex-row items-center justify-between p-4 z-[100] w-full fixed transition-all duration-300 ${scrolling ? 'bg-[#141414]' : 'bg-transparent'
        }`}
    >
      <div className='flex flex-row justify-start gap-10 ml-0 md:ml-12 lg:ml-12'>
      <Link href={'/'}>
          <Image src={logo} width={120} alt="netflix-logo" />
          </Link>
        <div className='hidden lg:flex flex-row gap-4 text-lg'>
          <Link href={'/'}> Home </Link>
          <Link href={'/browse'}> Browse </Link>
          <Link href='#'> Now Playing </Link>
          <Link href='#'> Horror </Link>
          <Link href='#'> Action </Link>
        </div>
      </div>
        <div className='lg:hidden'>
          <button onClick={toggleMobileMenu} className='text-white focus:outline-none'>
            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>

      <div className='hidden justify-end mr-12 lg:flex'>
        <button className='bg-red-600 text-white font-bold p-1 w-20 h-8 rounded-md hover:bg-red-700'>Sign in</button>
      </div>

      {isMobileMenuOpen && (
        <div className='lg:hidden absolute top-full left-0 w-full bg-[#141414] flex flex-col justify-center items-center text-white p-4'>
          <Link href={'/'}> Home </Link>
          <Link href={'/browse'}> Browse </Link>
          <Link href='#'> Now Playing </Link>
          <Link href='#'> Horror </Link>
          <Link href='#'> Action </Link>

          <div className='flex justify-end lg:flex'>
            <button className='bg-red-600 text-white font-bold p-1 w-20 h-8 rounded-md hover:bg-red-700'>Sign in</button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Navbar;

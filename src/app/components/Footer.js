import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";


function Footer() {
    return (
        <>
            <div className='bg-black w-full mt-2 px-8 py-6 md:px-40 md:py-16'>
                <h2 className="text-lg text-center my-6 text-white">Made with ❤️ by Tarun Singh</h2>
                <div className='flex gap-5 items-center justify-center mb-4'>
                    <a href='https://github.com/tarunsinghofficial'> <FaGithub size={30} className='hover:cursor-pointer' /></a>
                    <a href='https://www.linkedin.com/in/tarunsingh24'> <FaLinkedin size={30} className='hover:cursor-pointer' /></a>
                    <a href="https://www.instagram.com/targrapher24/"> <FaInstagramSquare size={30} className='hover:cursor-pointer' /></a>
                </div>
                <div className='flex flex-row justify-around'>
                    <div className="flex flex-col justify-evenly text- mb-2 text-[#989898] underline">
                        <Link href="#">FAQ</Link>
                        <Link href="#">Privacy</Link>
                        <Link href="#">Account</Link>
                        <Link href="#">Media centre</Link>
                    </div>
                    <div className="flex flex-col justify-evenly mb-2 text-[#989898] underline">
                        <Link href="#">Help centre</Link>
                        <Link href="#">Jobs</Link>
                        <Link href="#">Cookies</Link>
                        <Link href="#">Account</Link>
                    </div>
                    <div className="flex flex-col justify-evenly mb-2 text-[#989898] underline">
                        <Link href="#">Browse</Link>
                        <Link href="#">About</Link>
                        <Link href="#">Terms of use</Link>
                        <Link href="#">Only on netflix</Link>
                    </div>
                    <div className="flex flex-col justify-evenly mb-2 text-[#989898] underline ">
                        <Link href="#">Contact us</Link>
                        <Link href="#">Policy</Link>
                        <Link href="#">Plans</Link>
                        <Link href="#">Pricing</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
"use client"

import { useState } from 'react';
import image from '../../../../public/logo.png';
import Image from "next/image";
import Link from "next/link";

export default function Navber() {
    const [isOpen, setIsOpen] = useState(false); // Navbar toggle state

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex flex-col sm:flex-row text-white font-bold px-4 py-2 bg-slate-950">
            <div className='w-28 justify-center m-auto xl:ml-16 sm:ml-0'>
                <Image src={image} alt="logo" />
            </div>
            <div className='hidden lg:block sm:pt-4 xl:ml-4 2xl:mr-48'>
                <Link href="/">areejzaheer96@gmail.com</Link>
            </div>
            
            <button 
                className="sm:hidden mt-2 bg-purple-800 hover:text-white text-purple-800 border-purple-800 rounded p-2" 
                onClick={toggleNavbar}
            >
                {isOpen ? 'Close' : 'Menu'}
            </button>

            {/* Navbar Links */}
            <nav className={`flex-col sm:flex-row ${isOpen ? 'flex' : 'hidden'} sm:flex ml-0 sm:ml-2 
            space-y-2 sm:space-y-0 sm:space-x-2 pt-4 2xl:mx-8 xl:ml-48 xl:gap-8 xl:text-sm md:justify-center 2xl:text-2xl 2xl:gap-12 2xl:ml-[18rem] md:m-auto md:mb-6`}>
                {["Services", "Works", "Resume", "Skills", "Testimonials", "Contact"].map((item) => (
                    <Link 
                        key={item} 
                        href="" 
                        className="border-b-2 border-transparent hover:border-white transition duration-700 ease-in-out delay-75"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <button className='justufy-center m-auto sm:text-sm sm:p-1 sm:ml-14 sm:m-2 md:ml-16 2xl:ml-32 xl:mt-2 
            xl:mr-20 mt-4 border rounded p-2 w-36 h-10 hover:text-white hover:bg-purple-800 text-purple-800 border-purple-800 sm:text-12'>
                Hire me!
            </button>
        </div>
    );
}

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 50) { // Adjust the value as per your needs
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <header className = {`fixed top-0 w-full z-20 transition-colors ease-in-out delay-150 ${scrolled?'bg-white':null}`} >
            <div className="flex justify-between items-center px-6 pt-6">
                {/* Logo */}
                <div className={`text-white text-2xl font-bold p-2 ${!scrolled?'bg-white/80 backdrop-blur-lg rounded-xl shadow-lg':null}`}>
                    <Image src="/images/logo.png" alt="Logo" height={60} width={150} />
                </div>

                {/* Navigation Centered with Blur */}
                <nav className={`mx-auto w-2/5 p-4 transition ease-in-out ${!scrolled?'bg-white/80 backdrop-blur-lg rounded-xl shadow-lg':null}`}>
                    <ul className="flex justify-center space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8">
                        <li>
                            <a href="#" className="text-black p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 hover:text-black hover:bg-white rounded-xl text-lg">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-black p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 hover:text-black hover:bg-white rounded-xl text-lg">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-black p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 hover:text-black hover:bg-white rounded-xl text-lg">Properties</a>
                        </li>
                        <li>
                            <a href="#" className="text-black  p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-1000 hover:text-black hover:bg-white rounded-xl text-lg">Contact</a>
                        </li>
                    </ul>
                </nav>

                {/* Phone number and Social Links */}
                <div className="flex items-center space-x-4 text-white">
                    <a href="tel:+1234567890" className="text-black text-lg bg-white/80 backdrop-blur-lg rounded-3xl flex px-4 py-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 512 512">
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>
                        +91 9495623119
                    </a>
                    <a href='https:.//instagram.com' target="_blank" className="transition ease-in-out text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg"  className='h-6 w-6' viewBox="0 0 448 512">
                            <path fill={scrolled?"black":"white"} d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                    <a href='https://facebook.com' target="_blank" className="text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg"  className='transition ease-in-out h-6 w-6' viewBox="0 0 512 512">
                            <path fill={scrolled?"black":"white"} d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                        </svg>
                    </a>
                    <a href='https://youtube.com' target="_blank" className="text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg"  className='transition ease-in-out  h-6 w-6' viewBox="0 0 576 512">
                            <path fill={scrolled?"black":"white"} d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                        </svg>
                    </a>
                    {/* Add other social icons */}
                </div>
            </div>
    </header >
    );
};

export default Navbar;
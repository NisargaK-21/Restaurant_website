"use client";
import React, { useState } from "react";

export default function Newsletter() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); 
  };


return (
    <div className="w-full mt-10 font-serif">

           <div className=" gap-10 mx-5 sm:mx-10 md:mx-20 flex flex-col lg:flex-row justify-center items-center bg-black text-white p-10 sm:p-16 md:p-20 mt-10 sm:mt-20 mb-[-50px] border border-amber-50 rounded-lg relative">
            <div className="flex flex-col max-w-sm text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl">About Us</h1>
             <div className="mb-5 sm:mb-10 gap-5">
                 <p className="text-sm sm:text-base mt-2">Continued at zealously necessary is Surrounded sir motionless she end literature. Gay direction neglected.</p>
              <div className="flex flex-row gap-3 mt-3 justify-center lg:justify-start">
                <img className="w-6 h-6 sm:w-[30px] sm:h-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5N50lV_gQyxfU7iG9eFvdUrFjJhR7QOrw&s" alt="facebook" />
                <img className="w-6 h-6 sm:w-[30px] sm:h-[30px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="twitter" />
                <img className="w-6 h-6 sm:w-[30px] sm:h-[30px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDydOoTB3mhWwxdum41PJYGshzdGDESOpT-g&s" alt="instagram" />
              </div>
             </div>
            </div>

            <div className="hidden lg:block w-px h-40 bg-gray-300 opacity-40"></div>


            <div className="flex flex-col mt-8 lg:mt-0 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl mb-1">Explore</h1>
              <div className="flex flex-col gap-2">
                <p className="hover:text-[#c2a676] text-sm sm:text-base">Company Profile</p>
                <p className="hover:text-[#c2a676] text-sm sm:text-base">About</p>
                <p className="hover:text-[#c2a676] text-sm sm:text-base">Help Center</p>
                <p className="hover:text-[#c2a676] text-sm sm:text-base">Career</p>
                <p className="hover:text-[#c2a676] text-sm sm:text-base">Features</p>
                <p className="hover:text-[#c2a676] text-sm sm:text-base">Contact</p>
              </div>
            </div>

            
            <div className="flex flex-col mt-8 lg:mt-0 w-56 text-center lg:text-left">
                <h1 className="text-xl sm:text-2xl">Contact Info</h1>
                <div className="mb-6 sm:mb-10 gap-5">
                <p className="mt-2 flex flex-wrap text-sm sm:text-base justify-center lg:justify-start">📍 175 10h Street, Office 375 Berlin, De 21562</p>
                <p className="mt-2 text-sm sm:text-base">📞 +47 3337 8901</p>
                <p className="mt-2 text-sm sm:text-base">✉ food@restan.com</p>
                </div>
            </div>

           
            <div className="flex flex-col w-full sm:w-64 mt-8 lg:mt-0 text-center lg:text-left relative">
                <h1 className="text-xl sm:text-2xl">Newsletter</h1>
                <p className="mt-2 text-sm sm:text-base">Join our subscribers list to get the latest news and special offers.</p>
                <input type="email" placeholder="Your email address" className="mt-3 p-2 rounded text-white bg-gray-600 w-full"/>
                <button  onClick={handleSubscribe} className="mt-3 bg-[#c2a676] hover:bg-[#a38961] text-white font-bold py-2 px-4 rounded cursor-pointer">Subscribe</button>
                {showPopup && (
                <div className="absolute top-[20%] right-0 mt-4 mr-4 bg-green-500 text-white font-semibold px-3 rounded-md shadow-md animate-fadeIn text-sm sm:text-base">
                Subscribed successfully
                </div>
                )}
                 
            </div>

        </div>


        <div className="bg-[#1f1f1f] flex flex-col sm:flex-row items-center justify-center sm:justify-between px-5 sm:px-10 md:px-20 py-5 gap-5 mt-5 sm:mt-6 p-2 md:p-5">
            <img 
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F9.png&w=1920&q=75"/>
            <img 
            className="w-[80px] h-[60px] sm:w-[100px] sm:h-[80px]"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
            <p className="text-white text-center sm:text-left text-xs sm:text-sm md:text-base">© Copyright 2025. Restan. All Rights Reserved</p>
        </div>


    </div>
 )
}
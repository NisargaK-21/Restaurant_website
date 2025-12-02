"use client";

import Link from "next/link";
import React, { useState } from "react";



export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full font-serif">

      <div className="bg-[#8b6b3b] text-white flex flex-wrap justify-between items-center px-4 py-2 text-sm">
        <div className="flex gap-6 flex-wrap">
          <p className="mr-6">📞 +47 3337 8901</p>
          <p>✉️ food@restan.com</p>
        </div>
        <div className="flex gap-3 items-center mt-2 sm:mt-0">
          <p>🌐 English</p>
          <img className="rounded-full w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxm5N50lV_gQyxfU7iG9eFvdUrFjJhR7QOrw&s" alt="facebook"/>
          <img className="rounded-full w-5 h-5" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/1200px-Twitter-new-logo.jpg" alt="twitter"/>
          <img className="rounded-full w-5 h-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDydOoTB3mhWwxdum41PJYGshzdGDESOpT-g&s" alt="instagram"/>
        </div>
      </div>


      <div className="bg-black text-white flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-4  border-b border-[#8b6b3b]">
       <div className="flex justify-center sm:justify-start mb-3 sm:mb-0 gap-2">
        <img
         className=" h-10 w-auto" 
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"/>
       

      <button className="sm:hidden w-[50px] h-10 border-2 border-white rounded-2xl bg-[#282525] text-white font-semibold shadow-lg hover:bg-[#c2a676] hover:text-black transition duration-300 ease-in-out ml-20"
      onClick={()=>setIsOpen(!isOpen)}>☰</button>
       </div>
       
       <nav className="flex-wrap hidden lg:flex gap-6 justify-center text-lg font-medium ">
        <Link href="/" className="text-white hover:text-[#c2a676] hover:underline transition-all">Home</Link>
        <Link href="/about_us" className="text-white hover:text-[#c2a676] hover:underline transition-all">About us</Link>
        <Link href="/menu" className="text-white hover:text-[#c2a676] hover:underline transition-all">Menu</Link>
        <Link href="/chef" className="text-white hover:text-[#c2a676] hover:underline transition-all">Chef</Link>
        <Link href="/login" className="text-white hover:text-[#c2a676] hover:underline transition-all">Login</Link>

       </nav>
      </div>

      {isOpen && (
        <div className="bg-black text-white flex flex-col items-start px-6 py-3 gap-4 text-[18px]">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about_us" onClick={() => setMenuOpen(false)}>About us</Link>
          <Link href="/menu" onClick={() => setMenuOpen(false)}>Menu</Link>
          <Link href="/chef" onClick={() => setMenuOpen(false)}>Chef</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        </div>
      )}


    </div>
  )
}
    



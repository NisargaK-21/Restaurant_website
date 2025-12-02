"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Chef from '../components/chef';
import Hero from '../components/hero';

export default function ChefPage() {
    return(
        <div>
           <Hero title="Restaurant Chef" subtitle=" Home--chef"/>
           <Chef/>
    <div className="bg-gray-100 border border-black flex flex-col justify-center items-center min-h-[700px] py-10 px-5">
    <div className="flex flex-wrap justify-center gap-10 sm:gap-16 lg:gap-20 mt-10">


       <div className="flex flex-col items-center transition-all duration-500 group">
        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-gray-400 flex justify-center items-center overflow-hidden transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://tse4.mm.bing.net/th/id/OIP.8HgjEqO48qSvVeZY9-7hagHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 rounded-md mt-[-80px] sm:mt-[-100px] relative text-center w-[180px] sm:w-[200px] lg:w-[230px]">
          <p className="font-bold text-lg">Alexander Petllo</p>
          <p className="font-bold text-md">Assistant Chef</p>
        </div>
       </div>
  


      <div className="flex flex-col items-center transition-all duration-500 group">
        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-gray-400 flex justify-center items-center overflow-hidden transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://tse1.explicit.bing.net/th/id/OIP._nwg-eVvRnZ7I2mUeHSUSwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 rounded-md mt-[-80px] sm:mt-[-100px] relative text-center w-[180px] sm:w-[200px] lg:w-[230px]">
          <p className="font-bold text-lg">Mendia Jusef</p>
          <p className="font-bold text-md">Burger King</p>
        </div>
       </div>
  




        <div className="flex flex-col items-center transition-all duration-500 group">
        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-gray-400 flex justify-center items-center overflow-hidden transition-all duration-500 group-hover:border-[#7b6332] mt-10">
         <img 
         className="object-cover w-full h-full rounded-full"
         src="https://img.freepik.com/premium-photo/chef-smiling-gourmet-restaurant-kitchen_760443-2235.jpg"/>
         <div className="absolute inset-0 bg-black/50 opacity-0 flex justify-center items-center gap-3 transition-all duration-500 group-hover:opacity-100">
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
            <img 
            className="w-[20px] h-[20px]"
            src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-1024.png"/>
          </button>
          <button className="bg-white p-2 rounded-full shadow hover:bg-gray-200 transition">
             <img 
            className="w-[20px] h-[20px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEhmaAhHYxXIsRegeeTs2omihyyKUY5ROwNw&s"/>
          </button>
         </div>
        </div>
        <div className="bg-[#7b6332] text-white px-6 py-3 rounded-md mt-[-80px] sm:mt-[-100px] relative text-center w-[180px] sm:w-[200px] lg:w-[230px]">
          <p className="font-bold text-lg">Petro William</p>
          <p className="font-bold text-md">Main Chef</p>
        </div>
       </div>
       
    </div>

  </div>
        </div>
    )
}
"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";


export default function Pagebanner({title,subtitle}) {
    return(
                     <div className="flex flex-col justify-center items-center text-center w-full h-[300px] md:h-[400px] bg-[url('https://c2.staticflickr.com/4/3778/9611132192_601b130f4f_b.jpg')] bg-cover bg-center bg-no-repeat relative">                 
                         <div className="absolute inset-0 bg-black/50"></div>
                         <div className="relative z-10 px-4">
                           <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">{title}</h1>
                           <p className="text-white mt-4 text-base md:text-lg">{subtitle}</p>
                         </div>
                     </div>        
    )
}
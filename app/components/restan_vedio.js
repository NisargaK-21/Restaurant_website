"use client";
import React from "react";


export default function RestanVedio() {
    return (
 <div>
    <div className="flex flex-col lg:flex-row mt-20 p-10 lg:ml-20 justify-center lg:space-x-[-100px]">
    <div className="flex flex-col relative">

      <h1 className="text-7xl lg:text-9xl text-gray-200 object-cover w-[300px] lg:w-[400px]">Restan</h1>
    

     <div className="mt-5">
     <iframe width="700" height="500" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="rounded-xl shadow-lg w-[250px] h-[250px] sm:w-[500px] sm:h-[350px] lg:w-[700px] lg:h-[500px]"
     src="https://www.youtube.com/embed/xPPLbEFbCAo?si=qFmq83ya5CIydbh_" title="YouTube video player" frameborder="0"></iframe>
     </div>

    </div>


  <div className="relative bg-white w-[250px] sm:w-[450px] lg:w-[500px] h-auto lg:h-[500px] p-7 space-y-4 lg:py-20 mt-10 lg:mt-0 rounded-xl shadow-lg">
      <h1 className="text-2xl text-black font-semibold">Opening Hours</h1>
      <br/>
      <p className="text-gray-500">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center..</p>
      <br/>
      <p className="text-black">Sunday to Tuesday:------------10:00 - 09:00</p>
      <p className="text-black">Wednesday to Thursday:------------11:30 - 10:30</p>
      <p className="text-black">Friday to Saturday:------------12:00 - 11:00</p>
      <br/>
    <div className="flex flex-row items-center space-x-3 pt-3">
       <img 
       className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] rounded-full"
       src="https://tse4.mm.bing.net/th/id/OIP.y31er6dzhxFNV45Eqc_CtwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"/>
       <div className="flex flex-col">
        <p className="text-gray-500 mt-5">Call Anytime</p>
        <p className="text-black font-semibold">+964733-378901</p>
       </div>
    </div>
  </div>

  </div>
  <div className="flex justify-center lg:justify-start mt-10 ml-150">
      <img 
      className="w-[300px] h-[150px] lg:w-[500px] lg:h-[270px] lg:ml-[250px]"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F4.png&w=3840&q=75"/>
  </div>
 </div>
    )
}
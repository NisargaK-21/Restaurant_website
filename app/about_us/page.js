"use client";

import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Hero from "../components/hero";
import RestanVedio from "../components/restan_vedio";
import Chef from "../components/chef";
import Button from "../components/button";

export default function AboutUs() {
    return(
                <div className="font-serif space-x-1">
                   <Hero title="About us" subtitle="Home--About us"/>

                   <div className="flex flex-col justify-center items-center w-full h-[350px] md:h-[450px] bg-cover bg-center bg-no-repeat relative bg-[#F3F1ED]">
                    <div className="absolute inset-0 bg-black/10"></div>
                    <h1 className="text-lg sm:text-xl md:text-2xl text-[#8b6b3b] mb-6 mt-10 md:mt-20 text-center">OUR TRUSTED 8K HAPPY PARTNER</h1>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-12 px-4 md:px-0">
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F5.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F4.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F3.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F2.png&w=1080&q=75"/>
                      <img 
                      className="w-[100px] sm:w-[120px] md:w-[150px] h-auto"
                      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fbrand%2F1.png&w=1080&q=75"/>
                    </div>
                   </div>
                   

                   <div className="flex flex-col lg:flex-row gap-7 mt-20 relative bg-white p-5 lg:p-20">
                    <img 
                    className="w-[400px] h-[450px] object-cover z-0"
                    src="https://www.daysoftheyear.com/wp-content/uploads/waiters-day.jpg"/>
                    <img 
                    className="w-[400px] h-[450px] object-cover z-0"
                    src="https://www.appetite4recruitment.co.uk/wp-content/uploads/2023/10/Waitress-fine-dining_1-jpg.webp"/>
                      
                   <div>
                     <img 
                    className="w-[200px] h-[100px]  ml-90 translate-y-15 relative z-10"
                    src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F2.png&w=3840&q=75"/>
                    <div className=" relative bg-white sm:w-[200px] md:w-[600px] lg:w-[600px] sm:h-[400px]  md:h-[400px] lg:h-[400px] flex flex-col  p-10 sm:ml-2 lg:-ml-30 translate-y-10 shadow-xl rounded-md z-5">
                        <h1 className=" text-2xl text-[#8b6b3b]">About us</h1>
                        <br/>
                        <h1 className="text-4xl text-black flex flex-wrap">We Invite You To Visit Our Restaurant</h1>
                        <br/>
                        <p className="text-gray-400 sm:w-[300px] md:w-[500px] lg:w-[500px]">A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you a experience that you will have a hard time forgetting.</p>
                        <br/>
                        <Button
                         className="bg-[#8b6b3b]"
                         label="Discover"/>
                    </div>
                   </div>
                   </div>
                   

                  
                  <div className=" mt-20 ">
                     <Chef/>
                  </div>

                   <RestanVedio/>

                </div>             
    )
}
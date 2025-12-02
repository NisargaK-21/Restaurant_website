"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import Button from "../components/button";
import Hero from '../components/hero';




export default function MenuPage() {
    return (
    <div className="font-serif">

        <Hero title="Food Menu" subtitle="Home--Food-menu"/>

        <div className="flex flex-col md:flex-col lg:flex-row mt-[100px] ">

            <div className='flex flex-col items-center lg:items-start'>
            <h1 className="text-2xl md:text-3xl block md:hidden ml-7 mb-5">Breakfast</h1>
             <img
             className="w-[300px] h-[350px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px] ml-2 sm:ml-6 md:ml-20 lg:ml-40 pt-5 "
              src="https://www.afarmgirlsdabbles.com/wp-content/uploads/2023/02/Texas-toast-afarmgirlsdabbles-01v.jpg"/>
            <div className="hidden lg:flex relative bg-[#7b6332] text-center text-white w-[140px] h-[120px] flex flex-col justify-center items-center [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] relative ml-150 mt-[-500px]">
               <h2 className="text-lg font-semibold text-[#ffa500]">Menu</h2>
               <p className="text-sm text-white">Breakfast</p>
            </div>
            </div>



            <div className="ml-2 sm:ml-6 md:ml-16 lg:ml-20">
               <div className="flex flex-row sm:justify-start space-x-2 mt-4 md:mt-10 ml-27 sm:ml-130 hidden sm:flex">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black text-sm sm:text-base">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black  text-sm sm:text-base">Full</div>
               </div>
          
               
               <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F1.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Chicken Alfredo</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className= "w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F2.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Fish Chips</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$36</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$70</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>

               <br/>

               <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F3.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Ebony Fillet Steak</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$44</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$85</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
               <br/>


               <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F4.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className="ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Chicken Grill</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$44</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Free Drinks</p>
                    </div>
                   </div>
               </div>
            </div>
        </div>















        
        <div className="flex flex-col md:flex-col sm:flex-row lg:flex-row mt-20 sm:mt-[300px]">

            <div className="ml-2 sm:ml-6 md:ml-16 lg:ml-20">
               <div className="flex flex-row sm:justify-start space-x-2 mt-10 ml-130 hidden sm:flex">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black text-sm sm:text-base">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black  text-sm sm:text-base">Full</div>
               </div>

              <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                    <h1 className="text-2xl md:text-3xl block md:hidden ml-30 mb-5">Lunch</h1>
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F6.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Brownies</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$34</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$65</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>


               <br/>

           
                <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F8.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Cheesecakes</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-[1px] dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$55</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$100</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>


               <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F7.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Muffins</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$66</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$120</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>

             
              <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F5.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Cupcakes</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>



            </div>
             <div>
              
             <img
             className="hidden lg:flex w-[500px] h-[500px] ml-40 pt-5"
              src=" https://thumbs.dreamstime.com/b/lunch-menu-grilled-chicken-broast-fillet-fresh-vegetable-salad-healthy-food-high-quality-photo-335365235.jpg"/>
            <div className=" relative bg-[#7b6332] text-center text-white w-[140px] h-[120px] flex flex-col justify-center items-center [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] lg:ml-150 ml-145 lg:mt-[-450px] mt-[-700px]">
               <h2 className="text-lg font-semibold text-[#ffa500]">Menu</h2>
               <p className="text-sm text-white">Lunch</p>
            </div>
            </div>

        </div>
        













 <div className="text-white flex flex-col lg:flex-row items-center justify-between w-full min-h-screen lg:min-h-[500px] bg-[url('https://wallpaperaccess.com/full/1381849.jpg')] bg-cover bg-center bg-no-repeat px-6 sm:px-10 lg:px-20 py-12 mt-40">
  <div className="flex flex-col items-center lg:items-start max-w-md lg:max-w-lg text-center lg:text-left  lg:ml-30">
    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold mb-6">
      30 Minutes Delivery!
    </h1>
    <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
      A relaxing and pleasant atmosphere, good jazz, dinner, and cocktails. The Patio Time Bar opens in the center of Florence. The only bar inspired by the 1960s, it will give you an experience that you will have a hard time forgetting.
    </p>
    <div className="mt-8">
      <Button label="Order Now" />
    </div>
  </div>

  <div className="hidden sm:flex justify-center mt-10 lg:mt-0">
    <img
      className="w-72 sm:w-80 md:w-96 lg:w-[420px] lg:h-[520px] object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F11.png&w=1920&q=75"
    />
  </div>
</div>













       <div className="flex flex-col lg:flex-row mt-[100px] dark:bg-gray-800 p-10 mr-10 ml-10">
             <div className="ml-2 sm:ml-6 md:ml-16 lg:ml-20">
                <h1 className="text-3xl lg:text-4xl ml-5 lg:ml-50">Sea Food</h1>
               <div className="flex flex-row sm:justify-start space-x-2 mt-10 ml-120 hidden sm:flex">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black text-sm sm:text-base">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black  text-sm sm:text-base">Full</div>
               </div>


               <div className=" flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F9.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Salmon Fry</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$40</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$80</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
              

               <br/>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F10.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Pangasius or Basa</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$15</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$30</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>


               <br/>

                 <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F11.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Clams</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$45</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$90</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>


               <br/>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F12.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Red Crab</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

            </div>



            <div className="ml-2 sm:ml-6 md:ml-16 lg:ml-20 lg:mt-0 mt-20">
                 <h1 className="text-3xl lg:text-4xl ml-5 lg:ml-50">Beverage</h1>
               <div className="flex flex-row sm:justify-start space-x-2 mt-10 ml-120 hidden sm:flex">
                 <div className="pl-1.5  pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black text-sm sm:text-base">Half</div>
                 <div className="pl-1.5 pb-3 pt-0.5 w-[45px] h-[30px] bg-gray-300 border-1 border-black text-black  text-sm sm:text-base">Full</div>
               </div>


               <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F13.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Wine</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$34</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$65</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Coffee</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Atlantic / chips / salad / tartare</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$45</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$90</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

               <br/>

                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F14.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Hot Chocolate</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Truffle mash / pepper sauce</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$44</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$85</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>
               <br/>
               
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-6">
                   <img 
                   className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-full mx-auto sm:mx-0"
                   src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ffood%2F16.jpg&w=640&q=75"/>
                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
                    <div className=" ml-0 sm:ml-7 mt-3 sm:mt-4 text-center sm:text-left">
                        <h1 className="text-lg sm:text-xl md:text-2xl">Milk Shake</h1>
                        <p className="text-gray-400 text-xs sm:text-sm">Ricotta / goat cheese / beetroot</p>
                    </div>
                   <div className="hidden sm:flex flex-col space-y-1 mt-2 sm:mt-8 ml-0 sm:ml-3">
                     <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div> 
                    <div className="w-[120px] md:w-[170px] h-px dark:bg-white bg-gray-600"></div>
                   </div>
                   </div>

                   <div className="flex flex-col items-center sm:items-start md:items-start mt-4 sm:mt-0">
                    <div>
                        <div className="flex flex-row space-x-2 sm:space-x-1.5 mt-0 sm:mt-4 ml-0 sm:ml-3">
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$20</h1>
                       <h1 className="text-[#7b6332] text-lg sm:text-xl md:text-2xl">$40</h1>
                    </div>
                    <p className="text-[#7b6332] text-sm sm:text-base ml-0 sm:ml-5">Extra Free Juice</p>
                    </div>
                   </div>
               </div>

            </div>
        </div>










<div className='flex flex-col  text-black hidden lg:flex'>
    <h1 className='text-4xl'>Our Customer Feedback</h1>
            <div className="bg-[#EAE8E5] mt-20 flex flex-col lg:flex-row">
         <img 
         className="w-[150px] h-[120px] mr-10 opacity-20 ml-40 mt-10"
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F5.png&w=1920&q=75"/>
         <div className="relative flex  bg-[rgb(234,232,229)] py-20 ml-[-40px]">
           <div className="w-[400px] h-[450px] overflow-hidden  [clip-path:polygon(25%_5%,_75%_5%,_100%_50%,_75%_95%,_25%_95%,_0%_50%)] shadow-xl">
            <img 
            className="w-full h-full object-cover"
            src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F4.jpg&w=640&q=75"/>
           </div>
           <div className="absolute top-[20%] flex flex-col gap-6 ">
             <img 
             className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300 ml-[300px] mt-10"
             src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F5.jpg&w=640&q=75"/>

              <img 
             className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300 ml-[360px] mt-6"
             src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F6.jpg&w=640&q=75"/>

              <img 
             className="w-[80px] h-[80px] rounded-full border-4 border-white shadow-lg hover:scale-110 transition duration-300 ml-[300px]"
             src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fteam%2F7.jpg&w=640&q=75"/>
           </div>
         </div>
         
         <div className='flex flex-col text-black w-[600px] h-[500px] ml-20 mt-20'>
           <div className='flex flex-row'>⭐⭐⭐⭐⭐  (5/5)</div>
           <h1 className='text-4xl'>Awesome and delicious food</h1>
           <p className='mt-5 text-gray-600 text-2xl'>Breaking consultation discover apartments.ndulgence off under folly death wrote cause her way spite.Plan upon yet way get cold spot its week.Almost do am or limits hearts.Resolve parties but why she shewing</p>
           <div className='w-[600px] bg-black border-1 border-black h-[1px] mt-5'></div>
           <div className='flex flex-row mt-6'>
            <div className='flex flex-col'>
               <h1 className='text-2xl font-stretch-50%'> Istiak Ahmed </h1>
               <h1 className='text-[#7b6332]'>MARKETING MANAGER</h1>
            </div>
           </div>
         </div>
         <img 
         className='w-[150px] h-[120px] mt-100 opacity-20 mr-60'
         src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fshape%2F7.png&w=1920&q=75"/>
        </div>
    </div>

    </div>
    )
}
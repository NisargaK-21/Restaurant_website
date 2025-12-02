"use client";
import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Button from "./components/button";
import { useRouter } from "next/navigation";
import Menu from "./components/menu1";
import Vedio from "./components/restan_vedio";
import Chef from "./components/chef";



export default function Home() {
  const router = useRouter();
    const [Phone, setPhone] = useState("");
    const [person, setPerson] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

  

    const handleSubmit = (e) => {
      e.preventDefault();
    };

  
  return (
    <div className="dark:bg-gray-800 min-h-screen text-white font-serif">
      <div className="w-full min-h-[700px] md:h-[900px] bg-[url('https://www.creativefabrica.com/wp-content/uploads/2024/01/08/Dark-Aesthetic-Restaurant-Hyper-Realistic-Graphic-88083936-1.png')] bg-cover bg-center">


      <div className="flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl md:txt-8xl font-serif mt-20">Best Restaurant</h1>
        <div className="rounded-full w-[150px] sm:w-[200px] h-150px] sm:h-[200px] border-2 border-amber-50 mt-10 sm:mt-20 mx-auto">
        <p className="font-bold text-amber-50 text-center mt-10 sm:mt-12" style={{ fontSize: '90px', lineHeight: 1 }}>
          ↗
        </p>
        </div>
      </div>


    <form onSubmit={handleSubmit}
     className="flex flex-col gap-4 w-[90%] sm:w-[400px] shadow-lg bg-white border border-gray-800 text-black rounded-md mt-20 md:mt-60 md:ml-20 mx-auto md:mx-0 h-auto md:h-[400px] p-6 sm:p-10">
       <p className="text-2xl sm:text-3xl">Book a table</p> 

      <input
        type="tel"
        placeholder="Phone Number"
        value={Phone}
        onChange={(e) => setPhone(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b]"
      />

      <input
        type="number"
        placeholder="No of people"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b]"
      />

      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b]"
      />

      <input
        type="time"
        placeholder="Time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b6b3b]"
      />

      <button 
        type="submit"
        className="bg-[#8b6b3b] text-white py-2 px-4 rounded-md hover:bg-[#c2a676] transition-colors duration-300"
        onClick={(e) => alert("Table Booked")}
     >
        Book a table
      </button>
    </form>
    </div>

    <div className="flex flex-col md:flex-row mt-[200px] md:mt-[500px] border border-black p-6 sm:p-8 md:p-10 text-black dark:text-white mx-3 sm:mx-5 md:mx-10 rounded-2xl space-y-10 md:space-y-0 md:space-x-5">
      <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-center text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-center">
        <img
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F13.png&w=640&q=75"/>
        <h1 className="text-xl sm:text-2xl mt-3">Quality Foods</h1>
        <p className="text-center text-sm sm:text-base m-3 sm:m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
      <div className="hidden md:block h-[300px] w-px bg-gray-500 dark:bg-gray-600 mx-5"></div>
    </div>

     <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-center text-center md:text-left">
      <div className="flex flex-col justify-center items-center md:items-center">
        <img 
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
        src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Ficon%2F14.png&w=640&q=75"/>
        <h1 className="text-xl sm:text-2xl mt-3">Fast Delivery</h1>
        <p className="text-center text-sm sm:text-base m-3 sm:m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>
      <div className="hidden md:block h-[300px] w-px bg-gray-500 dark:bg-gray-600 mx-5"></div>
    </div>

      <div className="flex flex-col justify-center items-center text-center">
         <img 
        className="w-[80px] sm:w-[100px] h-[80px] sm:h-[100px]"
        src="https://png.pngtree.com/png-clipart/20230916/original/pngtree-sticker-with-a-cartoon-pizza-sticker-isolated-on-white-vector-png-image_12229935.png"
        width={100}
        height={100}/>
        <h1 className="text-xl sm:text-2xl mt-3">Delicious recipes</h1>
        <p className="text-center text-sm sm:text-base m-3 sm:m-5">Belonging sir curiosity discovery extremity <br/> yet forfeited prevailed own off. Traveling by introduced of mr terminated.</p>
      </div>

    </div>


<div className="relative bg-[url('https://static.vecteezy.com/system/resources/previews/037/245/808/non_2x/ai-generated-beautuful-fast-food-background-with-copy-space-free-photo.jpg')] bg-cover bg-center rounded-2xl mx-4 sm:mx-8 md:mx-12 mt-[100px] md:mt-[200px] h-[400px] sm:h-[500px] md:h-[600px] w-auto">
  <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
  <div className="relative z-10 flex flex-col items-start md:items-end justify-center h-full text-white px-6 sm:px-10 md:pr-[150px]">
    <div className="max-w-[700px] text-right md:text-left">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        Today Special Offer
      </h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Explore Irresistible Promotions!
      </h1>
      <p className="text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
        Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. 
        To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.
      </p>
      <Button 
      onClick={() => router.push('/menu')}
      label="Order Today" />
    </div>
  </div>
</div>



   <div className="flex flex-col justify-center items-center mt-20 sm:mt-32 md:mt-40 border border-black dark:border-white p-4 sm:p-6 rounded-2xl">
    <img 
    className="w-[200px] sm:w-[250px] md:w-[300px] h-auto mb-4"
    src="https://www.ambiance-sticker.com/images/Image/sticker-restaurant-menu-food-and-drinks-ambiance-sticker-KC_4914.png"/>
    <h1 className="text-3xl sm:text-4xl md:text-5xl text-black dark:text-white text-center mb-6">Our Specials Menu</h1>
    <div className="w-full flex justify-center">
      <Menu/>
    </div>
   </div>
   

  <div className="flex flex-col md:flex-row bg-black mt-20 md:mt-50 border-2 border-white mx-5 sm:mx-10 md:mx-20 justify-center items-center p-6 sm:p-8 md:p-10 rounded-2xl text-white space-y-8 md:space-y-0 md:space-x-10">

    <div className="w-[250px] sm:w-[350px] md:w-[500px] h-auto flex justify-center">
      <img 
      className="w-full h-auto object-contain"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fillustration%2F16.png&w=2048&q=75"/>
    </div>

     <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left space-y-6 px-4 sm:px-6 md:px-0">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">Are you Ready to Start<br/> your online Order?</h1>
      <br/>
      <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-[600px]">Bndulgence diminution so discovered mr apartments.<br/> Are off under folly death wrote cause her way spite.<br/> Plan upon yet way get cold spot its week. Almost do am or limits hearts.<br/> Resolve parties but why she shewing. She sang know now</p>
      <br/>
      <div className="flex flex-row flex-wrap justify-center md:justify-start gap-4 md:gap-5">
      <Button label="App store" onClick="https://play.google.com/store/apps?hl=en_IN"/>
      <Button label="Play store" onClick="https://play.google.com/store/apps?hl=en_IN"/>
      </div>
    </div>

  </div>


      <Vedio/>

      <Chef/>
 

   <div className="flex flex-col bg-white border-2 border-[#7b6332] p-10 text-black justify-center items-center mt-40 lg:h-[700px]">
    <h1 className="text-4xl mb-10 text-center">Our Latest News & Blog</h1>
    <br/>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
      <div className="relative flex justify-center ">
       <img 
       className="w-[350px] lg:w-[500px] h-[280px] lg:h-[400px] object-cover rounded-lg"
       src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F1.jpg&w=1920&q=75"/>
       <div className="absolute bottom-[-60px] w-[320px] lg:w-[450px] bg-white border-2 border-[#7b6332] p-5 shadow-lg">
        <p className="text-sm  hover:text-[#7b6332] text-gray-500">By Md SohagBurger ,Food</p>
        <p className="text-lg lg:text-2xl  hover:text-[#7b6332]">Picked up a Brussels burger Sprouts with ham</p>
        <p className="text-sm  hover:text-[#7b6332]">Read more↗</p>
       </div>
      </div>

      <div className="relative flex justify-center ">
       <img 
       className="w-[350px] lg:w-[500px] h-[280px] lg:h-[400px] object-cover rounded-lg"
       src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fblog%2F2.jpg&w=1920&q=75"/>
       <div className="absolute bottom-[-60px] w-[320px] lg:w-[450px] bg-white border-2 border-[#7b6332] p-5 shadow-lg">
        <p className="text-sm text-gray-500 hover:text-[#7b6332]">By Md SohagBurger ,Food</p>
        <p className="text-lg lg:text-2xl hover:text-[#7b6332]">This prefabricated passive house is highly sustainable</p>
        <p className="text-sm  hover:text-[#7b6332]">Read more↗</p>
       </div>
      </div>
    
    </div>
  </div> 





      
    </div>
  );
}



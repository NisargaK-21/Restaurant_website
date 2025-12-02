"use client";

import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Hero from '../components/hero';
import { useState} from 'react';
import { useRouter } from 'next/navigation';
import { createAccount } from '../auth';
import {login} from "../auth";


export default function LoginPage() {
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const router = useRouter();

    async function handleSubmit(e) {
    e.preventDefault();

    let result = await login(email, password);

    if (!result) {
      console.log("User not found → creating new account...");

      result = await createAccount(email, password);

    }


    if (!result) {
      alert("Error: Login or account creation failed.");
      return;
    }

 
    alert("Logged in successfully!");
  }

  return (  
    <div className="bg-white/10 dark:bg-black min-h-screen font-serif">

      <Hero title="Login Page" subtitle="Home--login"/>

<div className="flex flex-col lg:flex-row items-center justify-center ml-4 mr-4 mt-10 p-6 lg:ml-25 lg:mr-10 lg:mt-15 lg:p-20">

  <div className="hidden lg:block ml-10 mt-20">
    <img
      className="w-[100px] h-[60px] relative -mb-35 ml-10"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Flogo-light.png&w=1920&q=75"
      alt="logo"
    />
    <img
      className="w-[550px] h-[600px]"
      src="https://restan-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fthumb%2F14.jpg&w=3840&q=75"
      alt="thumbnail"
    />
  </div>


  <div className="w-full sm:w-[400px] md:w-[450px] lg:w-[550px] h-auto lg:h-[600px] bg-white p-6 sm:p-10 md:p-14 lg:p-20 rounded-lg">
    <h1 className="text-3xl md:text-4xl text-[#7b6332]">Welcome Back</h1>
    <p className="text-gray-500 mt-2">Enter your email and password to continue</p>

    <form onSubmit={handleSubmit}>
      <input
      placeholder="Email"
      className="w-full h-[45px] mt-5 p-5 border border-gray-500 rounded-md text-black bg-gray-200"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
      placeholder="Password"
      className="w-full h-[45px] mt-5 p-5 border border-gray-500 rounded-md text-black bg-gray-200"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

   <button
      type="submit"
      className="w-full h-[45px] bg-[#7b6332] mt-5 rounded-md text-white">
       Login
     </button>

    </form>

    <h1 className="text-black mt-5 text-center font-semibold">Or Login With</h1>

    <div className="flex flex-col sm:flex-row sm:space-x-2 mt-3 space-y-3 sm:space-y-0">
      <button className="w-full sm:w-1/2 h-[40px] border border-black text-black hover:text-[#7b6332] rounded-md">
        Google
      </button>
      <button className="w-full sm:w-1/2 h-[40px] border border-black text-black hover:text-[#7b6332] rounded-md">
        Facebook
      </button>
    </div>

    <p className="text-gray-400 text-center mt-10">
      Dont have an account?<div className="text-red-700 cursor-pointer underline ml-1">Register Now</div>
    </p>
  </div>
</div>


    </div>
  );
}


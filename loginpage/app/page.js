"use client";
import Image from "next/image";
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex items-center justify-center min-h-screen px-4 ${darkMode ? "bg-black" : "bg-gray-100"}`}>
        <title>Sign In Page</title>


      <main className="flex flex-col lg:flex-row w-full max-w-4xl rounded-3xl shadow-2xl bg-gray-200 overflow-hidden">
        {/* Left Image Section */}
        <div className="lg:w-1/2 w-full bg-white flex items-center justify-center p-4 lg:p-0">
          <Image
            src="/iphone-4699057_1920.jpg"
            alt="Login Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Sign-In Form Section */}
        <div className="lg:w-1/2 w-full bg-red-600 text-white flex flex-col items-center justify-center px-6 py-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Sign In</h2>
          <p className="text-sm text-red-200 mb-6 text-center">
            Sign In to continue to our application.
          </p>

          {/* Email Input */}
          <div className="bg-red-600 text-white w-full max-w-sm p-5 flex items-center rounded-full mb-4 border border-white-600 hover:bg-white hover:text-red-600 transition">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <FaRegEnvelope className="mx-2" />
          </div>

          {/* Password Input */}
          <div className="bg-red-600 text-white w-full max-w-sm p-5 flex items-center rounded-full mb-4 border border-white-600 hover:bg-white hover:text-red-600 transition">
            <input
              type="password"
              placeholder="Password"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <MdLockOutline className="mx-2" />
          </div>

          {/* Forgot Password */}
          <p className="text-sm text-red-200 mb-9 text-center lg:text-right w-full">
            <a href="#" className="underline">
              I can’t remember my password
            </a>
          </p>

          {/* Sign-In Button */}
          <button className="bg-white text-red-500 font-bold flex items-center justify-center gap-5 w-full max-w-sm rounded-full py-3 px-8 hover:bg-red-600 hover:text-white transition">
            Sign In
            <FiArrowRight />
          </button>

          {/* Sign-Up Link */}
          <p className="text-sm text-red-200 mt-6 text-center">
            Not a member?{" "}
            <a href="#" className="underline font-bold text-white">
              Sign up
            </a>
          </p>
        </div>

        {/* Dark Mode Toggle Button */}
        <button
          className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
          onClick={toggleDarkMode}
        >
          {darkMode ? "LHT" : "DRK"}
        </button>
      </main>
    </div>
  );
}

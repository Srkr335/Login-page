import Image from "next/image";
import Head from "next/head";
import { FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Head>
        <title>Sign In Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-4/5 max-w-4xl rounded-3xl shadow-2xl  bg-gray-200 overflow-hidden">
        {/* Left Image Section */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <Image
            src="/iphone-4699057_1920.jpg"
            alt="Login Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Sign-In Form Section */}
        <div className="w-1/2 bg-red-600 text-white flex flex-col items-center justify-center px-10 py-8">
          <h2 className="text-3xl font-bold mb-2">Sign In</h2>
          <p className="text-sm text-red-200 mb-6">
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
<div className="bg-red-600 text-white-500 w-full max-w-sm p-5 flex items-center rounded-full mb-4 border border-white-600 hover:bg-white hover:text-red-600 transition">
  <input
    type="password"
    placeholder="Password"
    className="flex-1 bg-transparent outline-none text-sm px-2"
  />
  <MdLockOutline className="mx-2" />
</div>

          {/* Forgot Password */}
         <p className="text-sm text-red-200 mb-9 text-right w-full">
  <a href="#" className="underline">
    I can’t remember my password
  </a>
</p>


          {/* Sign-In Button */}
<button className="bg-white text-red-500 font-bold flex items-center justify-center gap-5 w-full rounded-full py-3 px-8 hover:bg-red-600 hover:text-white transition">
  Sign In
  <FiArrowRight />
</button>

          {/* Sign-Up Link */}
          <p className="text-sm text-red-200 mt-6">
            Not a member?{" "}
            <a href="#" className="underline font-bold text-white">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}

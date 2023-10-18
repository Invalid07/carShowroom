"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaEnvelope,
  FaRegEnvelope,
} from "react-icons/fa";
// import {MdLockOutLine} from Home

export default function Login() {

    const [password,setpassword] =  useState("");
    const [email ,setemail] = useState("")

    const HandleLogin = ()=>{
      if(password  === "" || email === ""){
        

      }else{

      }
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="bg-gray rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className="w-2/3 p-5">
          <div className="py-10">
            <h2 className="text-3xl font-bold  text-green-500 mb-2">
              Sign in to Account
            </h2>
            <div className="border-2 w-10 border-green-500 inline-block-m2"></div>
            <div className="flex justify-center my-2">
              <a
                href="/"
                className="border-2 border-green-400 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm " />
              </a>
            </div>

            <div className="flex justify-center my-2">
              <a
                href="/"
                className="border-2 border-green-400 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>

            <div className="flex justify-center my-2">
              <a
                href="/"
                className="border-2 border-green-400 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </a>
            </div>
            <p className="text-gray-100 my-2">or use your email</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                <FaEnvelope className="text-gray-400 m-2" />
                <input
                  type="Email"
                  name="Email"
                  value = {email}
                  onChange={(e)=>{
                    setemail(e.target.value)
                  }}
                  placeholder="Email "
                  className="bg-gray-100 outline-none text-sm
                                flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-2 flex items-center mb-2">
                {/* <MdLockOutLine  className="text-gray-400 m-2"/>  */}
                <input
                  type="password"
                  name="password"
                  value={
                    password
                  }
                  onChange={(e)=>{
                    setpassword(e.target.value)
                  }}
                  placeholder="password "
                  className="bg-gray-100 outline-none text-sm
                                flex-1"
                />
              </div>

              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                </label>
                <a href="#" className="text-xs">
                  Forget
                </a>
              </div>
              <button
                onClick={HandleLogin}
                className="border-2 border-green text-green-500 rounded-full px-12 py-2 inline-block font-semibold
                                 hover:bg-green-500 hover:text-white"
              >
                Sign in
              </button>
            </div>
          </div>

          {/* <p>sign in section</p> */}
        </div>
        <div className="2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 className="text-3xl font-bold mb "> Hello sir,</h2>
          <div className="border-2 w-10 border-white inline-block-m2"></div>
          <p className="mb-2">
            fill the personal information strat your jourey with us.{" "}
          </p>
          <a
            href="/"
            className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
                     hover:text-green-500"
          >
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

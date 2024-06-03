import React from "react";
import menu from "../assets/menu.png"
import cross from "../assets/cross.png"

import { useState } from "react";
export default function Navbar()
{
    const [navbarStatus,setNavbarStatus]=useState(false);
    return(
        <>
         
            <div className="flex justify-center w-[100%] ">

            {!navbarStatus &&
                <div className="p-2 sm:hidden flex justify-between items-center w-full">
                    <p className="text-white text-lg ">CleverBooks</p>
                     <img className="h-8 w-7sm:h-9 sm:w-8"  onClick={()=>{setNavbarStatus(true)}} src={menu} alt="menu"/>
                </div>
                }
            {navbarStatus &&
                <div className="fixed h-full top-0 right-0 p-4 w-[100%] backdrop-blur-lg z-50 ">
                <div className=" text-center h-screen  text-gray-500">
                <img  className=" h-10 w-12 " src={cross} onClick={()=>{setNavbarStatus(false)}}></img>
                <ul className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">
                    <li className=" mt-10 sm:m-0"><a href="" >Product</a></li>
                    <li className=" mt-10 sm:m-0"><a href="" >Pricing</a></li>
                    <li className=" mt-10 sm:m-0"><a href="" >Industries</a></li>
                    <li className=" mt-10 sm:m-0"><a href="" >Customer</a></li>
                    <li className=" mt-10 sm:m-0"><a href="" >About</a></li>
                    <li className=" mt-10 sm:m-0"><a href="" >Blog</a></li>
                </ul>
                </div>
                </div> 
            } 

                <nav className="w-[80%] hidden sm:visible sm:flex justify-between items-center  mt-5 bg-transparent">
                    <div className="flex gap-2 justify-center items-center">
                        <p className="text-4xl text-white font-semibold">CleverBooks</p>
                    </div>
                    

                    
                    <div className="invisible sm:visible">
                        <ul className=" flex gap-5 text-white font-bold">
                            <li className="cursor-pointer hover:text-orange-400"><a href="#home">Product</a></li>
                            <li className="cursor-pointer hover:text-orange-400"><a href="#about">Pricing</a></li>
                            <li className="cursor-pointer hover:text-orange-400"><a href="#skills">Industry</a></li>
                            <li className="cursor-pointer hover:text-orange-400"><a href="#project">Customer Stories</a></li>
                            <li className="cursor-pointer hover:text-orange-400"><a href="#contact">About</a></li>
                            <li className="cursor-pointer hover:text-orange-400"><a href="#contact">Blog</a></li>

                        </ul>    
                    </div>

                    

                    <div className="flex justify-center items-center gap-5">
                        <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md font-semibold">Login</p>  
                        <div className="rounded-2xl  h-11  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-2">
                            <p className="text-white text-center ">Talk to Us</p>
                        </div>  
                    </div>

                </nav>
            </div>
        </>
    )
}
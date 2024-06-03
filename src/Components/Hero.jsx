import React from "react";
import Navbar from './Navbar'
export default function Hero()
{
    return(
    <>
        <div className="bg-[#222831] w-full h-auto sm:h-screen  relative">
        <Navbar />
        <div className="flex justify center sm:items-end sm:h-full sm:w-full">
        
            <div className="sm:flex sm:gap-4  h-full pb-10 w-full">
                <div className="ml-5 sm:ml-32 flex justify-center items-center h-[100%] w-full sm:w-[50%]">
                    <div className="">
                    <p className=" mt-3 sm:mt-5 text-white  text-3xl sm:text-7xl font-semibold">Every order</p>
                    <div className="flex gap-3 mt-5">
                    <p className=" text-white text-3xl sm:text-7xl font-semibold">fulfilled, </p>
                    <h1 className=" text-3xl sm:text-7xl font-semibold bg-gradient-to-r from-purple-500 via-orange-500 to-blue-300 text-transparent bg-clip-text animate-gradient">on time.</h1>
                    </div>
                    <p className="mt-3 sm:mt-5 text-white text-sm sm:text-md w-[90%] font-semibold">
                    Eliminate overstocking and under-stocking with Crest. Built by supply-chain experts, it brings the same technology used by large global brands to power fast-growing startups. In short, we make supply meet demand, and then help you grow both.
                    </p>

                    <div className=" flex gap-2 mt-10">
                        <div className="rounded-xl sm:rounded-2xl h-9 sm:h-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="bg-[#222831] rounded-lg sm:rounded-xl p-1 sm:p-3 text-center hover:bg-transparent">
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-sm sm:text-md font-semibold hover:text-white">Get Started with</p>
                            </div>
                        </div>
                        <div>
                            <img className="mt-4 sm:mt-7" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63d1777671aadb7b8492b5f9_hero-home-cta%20right%20to%20left.svg" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="h-full w-full flex  justify-center p-4 sm:p-0 sm:items-end sm:w-[50%] sm:justify-end">
                    <img className="" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"></img>
                </div>
            </div>
        </div>
            <img className="hidden sm:visible absolute bottom-0 right-0 h-1/2 w-[30%]" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d3e24ea3f00_homengg.svg"></img>
        </div>
    </>
    )
}


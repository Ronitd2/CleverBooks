import React from "react";

export default function Cta()
{
    return(
        <>
            <div className=" h-auto sm:h-screen  w-full bg-[#222831] flex justify-center items-center">
                    <div className=" mt-10 mb-10 sm:mt-0  sm:mb-0 w-[80%] h-[70%] bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 animate-gradient rounded-2xl flex justify-center items-center">
                        <div className="w-[80%] h-[60%]">
                        <p className=" mt-7 sm:mt-0 text-2xl sm:text-5xl font-bold text-white text-center">You can grow faster than you think!</p>
                        <div className="w-full flex justify-center">
                        <p className=" mt-10 sm:mt-16 text-white w-[75%] text-center">Plan with Crest to fulfil your demand today, and dreams tomorrow. We bring the methods and technologies of large global companies to help brands of all sizes scale.</p>
                        </div>
                            <div className="w-full flex justify-center mt-10 sm:mb-0 mb-7">
                            <div className="bg-[#222831]  p-4 rounded-3xl w-auto">
                                <p className="text-white  text-sm sm:text-md sm:font-semibold">Get Started with CleverBooks</p>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
import React from "react";

export default function Keyfeatures()
{
    return(
        <>
            <div className=" h-auto sm:h-screen w-full bg-white">
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-[90%] sm:w-[85%]">
                        <p className="text-black font-bold text-2xl sm:text-5xl text-center sm:mt-0 mt-10">Four key questions answered by Crest</p>
                    
                    <div className="sm:flex sm:gap-7 sm:flex-wrap mt-10 sm:mt-20 ">
                        <div className="h-64 sm:h-72 w-[90%] sm:w-[23%] bg-gray-200 rounded-xl p-4 mb-10">
                            <img className="h-12 w-12 sm:h-16 sm:w-16" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f63ee54595853ca5e31682_what%20to%20orderr%20(1).svg"></img>
                        <div className="mt-5">
                            <p className="text-2xl font-semibold">What to order</p>
                            <p className="mt-4 text-left">
                            Get accurate demand and days to stock out. Automate purchase planning so you can always have what you need for your next sales cycle.
                            </p>
                        </div>
                        </div>
                        <div className="h-64 sm:h-72 w-[90%] sm:w-[23%] bg-gray-200 rounded-xl p-4 mb-10">
                            <img className="h-12 w-12 sm:h-16 sm:w-16" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0d2fab2e360025df922a_when%20to%20orderr.svg"></img>
                        <div className="mt-5">
                            <p className="text-2xl font-semibold">What to order</p>
                            <p className="mt-4 text-left">
                            Have up-to-date inventory, storage, sales velocity, and demand. Get timely order suggestions so you're never left guessing.
                            </p>
                        </div>
                        </div>
                        
                        <div className="h-64 sm:h-72 w-[90%] sm:w-[23%] bg-gray-200 rounded-xl p-4 mb-10">
                            <img className="h-12 w-12 sm:h-16 sm:w-16" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0cc629ab7f2d8cb0a8bd_how%20much%20to%20stock.svg"></img>
                        <div className="mt-5">
                            <p className="text-2xl font-semibold">How much to stock</p>
                            <p className="mt-4 text-left">
                            Get inventory requirements for every node, for every SKU. So you avoid out-of-stock situations, even during demand spikes.
                            </p>
                        </div>
                        </div>
                        <div className="h-64 sm:h-72 w-[90%] sm:w-[23%] bg-gray-200 rounded-xl p-4 mb-10">
                            <img className="h-12 w-12 sm:h-16 sm:w-16" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63bd0c2c27cde81ffea6515b_where%20to%20placee.svg"></img>
                        <div className="mt-5">
                            <p className="text-2xl font-semibold">Where to place</p>
                            <p className="mt-4 text-left">
                            Our tool suggests how to move stock within your supply chain. So you'll always have products available across cities.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>
        </>
    )
}
import React from "react";
import { useState } from "react";
export default function ProblemTarget()
{
    const [clickfirst,setClickfirst]=useState(true);
    const [clicksec,setClicksec]=useState(false);
    const [clickthird,setClickthird]=useState(false);
    const [clickfour,setClickfour]=useState(false);
    const [clickfive,setClickfive]=useState(false);
    const [clicksix,setClicksix]=useState(false);
    return(
        <>
            <div className="h-auto w-full">
            <div className="h-full w-full">
                <p className="text-2xl sm:text-5xl font-bold text-center mt-10 sm:mt-0">Things your spreadsheet wishes it could do</p>
                
                <div className=" sm:hidden h-auto w-[90%] ml-4 mt-5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl   flex justify-center items-center p-3">
                        <img  className="h-[55%] w-[90%]" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-500.webp">

                        </img>
                    </div>

                <div className="sm:flex w-full h-full sm:justify-between mt-15 sm:mt-24 ">
                    <div className="sm:w-[30%] w-[100%]  p-3 sm:p-0 sm:ml-28">
                        <div className="mt-5 mb-14">
                            <p  onClick={()=>{setClickfirst(true);setClicksec(false);setClickfour(false);setClickthird(false);setClickfive(false);setClicksix(false)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Accurate Demand Forecasting</p>
                            <div className={clickfirst==false ? " hidden":"mt-5"}>
                                Dynamically predict future demand across all channels, with high accuracy and lowest granularity. Crest takes into account what traditional forecasts don't: trends, real-time market signals, promotional activities, and even logistics disruptions. 
                            
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>

                        <div className="mt-5 mb-14">
                        <p  onClick={()=>{setClickfirst(false);setClicksec(true);setClickfour(false);setClickthird(false);setClickfive(false);setClicksix(false)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Automated purchase Planning</p>
                            <div className={clicksec==false ? " hidden":"mt-5"}>
                            Never miss an order, and know exactly how much to order, when, and from whom. This is made possible with constant inventory tracking and automated PO generation. What's more, Crest improves with every planning cycle as the data set gets richer.                            
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>

                        <div className="mt-5 mb-14">
                        <p  onClick={()=>{setClickfirst(false);setClicksec(false);setClickfour(false);setClickthird(true);setClickfive(false);setClicksix(false)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Automated Distribution Planning</p>
                            <div className={clickthird==false ? " hidden":"mt-5"}>
                            Faster replenishment cycles mean more working capital for you. Granular warehouse and store-level insights help you optimally allocate materials and inventory. Say goodbye to stock-outs and excess inventory.                            
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>

                        <div className="mt-5 mb-14">
                        <p  onClick={()=>{setClickfirst(false);setClicksec(false);setClickfour(true);setClickthird(false);setClickfive(false);setClicksix(false)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Easy Integration</p>
                            <div className={clickfour==false ? " hidden":"mt-5"}>
                            From all online store solutions to cloud ERPs, Crest integrates seamlessly with your current tech and ops stack. What's more? Connecting them to Crest will give you actionable insights.                            
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>

                        <div className="mt-5 mb-14">
                        <p  onClick={()=>{setClickfirst(false);setClicksec(false);setClickfour(false);setClickthird(false);setClickfive(true);setClicksix(false)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Custom Dashboard</p>
                            <div className={clickfive==false ? " hidden":"mt-5"}>
                            Create customised dashboards to identify important trends, patterns, and insights. Tailor them to match the unique requirements of your team, empowering them to extract data in a user-friendly format that can be easily comprehended.                           
                             <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>

                        <div className="mt-5 mb-14">
                        <p  onClick={()=>{setClickfirst(false);setClicksec(false);setClickfour(false);setClickthird(false);setClickfive(false);setClicksix(true)}} className=" cursor-pointer text-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text font-semibold">Consessus Planning</p>
                            <div  className={clicksix==false ? " hidden":"mt-5"}>
                            Get inputs from all major stakeholders for the forecast numbers with a multi-level approval process. Compare & visualise the impact of the numbers on major KPIs in real time and take informed decisions with Scenario Planning                           
                            <p className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text text-md mt-5">Learn More -</p>
                            </div>
                        </div>
                        <hr className=""></hr>
                    </div>
                    <div className="hidden sm:visible h-full w-[50%] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl rounded-r-none  sm:flex justify-end items-center">
                        <img  className="h-[55%] w-[90%]" src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/63f64b9dd79c71fad2f6ea24_S%26OP-p-500.webp">

                        </img>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import Keyfeatures from './Components/Keyfeatures'
import Review from './Components/Review'
import ProblemTarget from './Components/ProblemTarget'
import Cta from './Components/Cta'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'

function App() {
  

  return (
    <>
    
    <Hero></Hero>
    <Keyfeatures />
    <Review />
    <ProblemTarget />
    <Cta />
    <Footer />
      {/* <h1 >Hello World</h1> */}

      {/* <img src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d648dea3f01_Hero%20Image.svg"></img> */}
    </>
  )
}

export default App

"use client"
import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import Projectcomp from './components/Projectcomp'


const Project = () => {
  return (
    <div className='min-h-screen bg-black overflow-hidden '>
      <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] relative'>
          <div className='max-w-7xl mx-auto space-y-6 lg:space-y-0 p-5'>
              <Navbar/>
              <HeroSection/>
          </div>
      </div>
      <div className='h-24'>

      </div>
      <div className='max-w-7xl mx-auto p-5 mt-20'>
          <Skills/>
          <Projectcomp />
      </div>
    </div>
  )
}

export default Project
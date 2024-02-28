"use client"

import { MovingBorderBtn } from '@/components/UI/moving-border'
import Link from 'next/link'
import code from '../assets/code.gif'
import Image from 'next/image'
import Title from './Title'


const HeroSection = () => {
  return (
    <div className='min-h-[70vh] flex flex-col-reverse lg:flex-row gap-2 lg:gap-0 items-center justify-between'>
        <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-7xl font-bold'>
                Hi! I Am  
                <br /> 
                <span className='underline underline-offset-8 decoration-green-500'>
                    BRYAN GABRIEL
                </span>
            </h1>
            <h1 className='md:w-96 text-lg text-gray-300'>
                A personal portfolio website that provides information about what i do 
                and my other relevant details like skills, experience and accomplishments.
            </h1>
            <Link href={"mailto:bryangabrielberja25@gmail.com"} className='inline-block group'>
              <Title text='Contact me 📭' />
            </Link>
        </div>
        <div className='relative'>
            <div className=' w-72 h-72 flex flex-col items-center space-y-3 -rotate-[0deg] relative'>
                <Image src={code} alt='code' />
                <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
            
            </div>
            <div className='absolute bottom-5 sm:bottom-14 left-0 sm:left-10'>
                <MovingBorderBtn borderRadius='0.5rem' className='p3 font-semibold'>
                    <h1>💼 Available to work</h1>
                </MovingBorderBtn>
            </div>
        </div>
    </div>
  )
}

export default HeroSection
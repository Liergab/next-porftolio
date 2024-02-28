"use client"
import React from 'react'
import { SiBootstrap, SiCss3, SiExpress, SiHtml5, SiJsonwebtokens, SiLaravel, SiMaterialdesign, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPrisma, SiReact, SiReactquery, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/UI/direction-aware-hover'


const Projectcomp = () => {
    const Projects = [
        {
            title:'BMIS (crud & authentication)',
            tech:[SiReact, SiReactquery, SiTailwindcss, SiLaravel, SiJsonwebtokens, SiMysql],
            link:'https://bmis-rl.netlify.app/',
            cover:'/project1.jpg',
            background:'bg-indigo-500'
        },
        {
            title:'My first Portfolio',
            tech:[SiReact, SiTailwindcss],
            link:'https://brygabportfolio.netlify.app/',
            cover:'/project3.jpg',
            background:'bg-green-500'
        },
         {
            title:'Mern Blog (crud & authentication)',
            tech:[SiReact, SiReactquery,SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiNodedotjs, SiPrisma],
            link:'https://bryanblog.netlify.app/login',
            cover:'/project2.jpg',
            background:'bg-fuchsia-300'
        },
        {
            title:'Mern TodoList (crud)',
            tech:[SiReact, SiBootstrap, SiNodedotjs, SiExpress, SiMongodb ],
            link:'https://github.com/Liergab/MERN-PROJECT',
            cover:'/project4.jpg',
            background:'bg-blue-300'
        },
        {
            title:'Friend flow (crud & authentication)',
            tech:[SiReact, SiReactquery, SiNodedotjs, SiExpress, SiMongodb, SiMaterialdesign],
            link:'https://frndflow.netlify.app/',
            cover:'/project5.jpg',
            background:'bg-indigo-500'
        },
        {
            title:'BMIS Capstone',
            tech:[SiPhp, SiMysql, SiHtml5, SiCss3],
            link:'https://bmis-rl.netlify.app/',
            cover:'/project6.jpg',
            background:'bg-indigo-500'
        }
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>
          <div  className='inline-block group mx-auto w-full'>
             <Title text="Projects 🚀" className='flex flex-col justify-center items-center'/>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 lg:px-44 gap-5 '>
                {Projects.map((project, index) => {
                    return(
                        <Link href={project.link} key={index}>
                            <div className={`rounded-[6px] p-5 ${project.background}`}>
                                <DirectionAwareHover imageUrl={project.cover} className='w-full rounded-[4px] space-y-5 cursor-pointer'>
                                    <h1 className='text-xl font-bold'>{project.title}</h1>
                                    <div className='flex gap-2 items-center'>
                                        {project.tech.map((Icon, index) => {
                                            
                                            return <Icon key={index} className='w-8 h-8' />
                                        })}
                                    </div>
                                </DirectionAwareHover>

                            </div>
                        </Link>
                        
                    )
                })}
          </div>
    </div>
  )
}

export default Projectcomp
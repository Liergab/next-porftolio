"use client"
import Title from './Title'
import { HoverEffect } from '@/components/UI/card-hover-effect'
import { SiExpress, SiGit, SiHtml5, SiJavascript, SiMaterialdesign, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPostman, SiReact, SiTailwindcss } from 'react-icons/si'

const Skills = () => {
    const skills=[
        {
            text:'React',
            Icon: SiReact
        },
        {
            text:'Node',
            Icon: SiNodedotjs
        },
        {
            text:'Express',
            Icon: SiExpress
        }, 
        {
            text:'Tailwind',
            Icon: SiTailwindcss
        },
        {
            text:'MUI',
            Icon:SiMaterialdesign,
        },
        {
            text:'MongoDB',
            Icon:SiMongodb,
        },
        {
            text:'PHP',
            Icon:SiPhp,
        },
        {
            text:'MySQL',
            Icon:SiMysql,
        }, {
            text:'Javascript',
            Icon:SiJavascript,
        },
        {
            text:'Postman',
            Icon:SiPostman,
        },
         {
            text:'Git',
            Icon:SiGit,
        },
        {
            text:'Html',
            Icon:SiHtml5
        },

    ]
  return (
    <div className=' max-w-5xl mx-auto px-8'>
        <div className='inline-block group mx-auto w-full'>
            <Title text="Tech Stacks 🎯" className='flex flex-col justify-center items-center'/>
        </div>
        <HoverEffect items={skills}/>
    </div>
  )
}

export default Skills
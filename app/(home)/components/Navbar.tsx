"use client"
import Link from 'next/link';
import { SiFacebook, SiGithub, SiLinkedin } from "react-icons/si";
import { FaCloudDownloadAlt } from "react-icons/fa";
const Navbar = () => {
    const socials =[
        {
            link:'/Rubio-Bryan_Gabriel-Sumayang.pdf',
            label:'CV',
            icon:FaCloudDownloadAlt
        },
        {
            link:'https://www.linkedin.com/in/bryan-gabriel-rubio-33b8a1255/',
            label:'Linkedin',
            icon:SiLinkedin
        },
        {
            link:'https://github.com/Liergab',
            label:'Github',
            icon: SiGithub
        },
        {
            link:'https://www.facebook.com/profile.php?id=100008970096684&mibextid=ZbWKwL',
            label:'Facebook',
            icon:SiFacebook
        }
    ]
  return (
    <div className='py-10 flex justify-between items-center '>
        <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Gabriel🧑‍💻</h1>
        <div className='flex items-center gap-5'>
            {socials.map((social,index) =>{
                const Icon = social.icon
                return( 
                <Link 
                    href={social.link}
                    key={index} 
                    aria-label={social.label}
                 >
                       <div className="relative group inline-block">
                            <Icon className="w-5 h-5 hover:scale-125 transition-all" />
                            <h1 className="hidden group-hover:block absolute top-[-1.5rem] left-0 bg-white text-black px-2 py-1 rounded z-10">
                            {social.label}
                            </h1>
                        </div>
                </Link>
                );
            })}
        </div>
    </div>
  )
}

export default Navbar
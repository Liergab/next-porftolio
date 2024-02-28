import Title from './Title'
import { TextGenerateEffect } from '@/components/UI/text-generate-effect'
import { BackgroundBeams } from '@/components/UI/background-beam';
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from 'react-icons/si';
import Link from 'next/link';
const Footer = () => {
    const words = `I'm a recent graduate passionate about creating and building simple web applications. I enjoy studying and exploring the diverse world of web development, constantly seeking to enhance my skills and knowledge.
                    `;
    const socials =[
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
            },
            {
                link:'https://twitter.com/BryanGa60992709',
                label:'Twitter',
                icon:SiTwitter
            },

        ]
    

  return (
    <div className='mt-[100px]'>
         <Title text="About me 🙋🏽" className='flex flex-col justify-center items-center'/>
        <div className='flex flex-col h-[500px] items-center justify-center gap-10 relative'>
            <div className='flex-1 px-4 lg:px-32 mt-20 mb-10 lg:mb-0'>
            <TextGenerateEffect words={words} className='text-justify lg:text-center text-[12px] lg:text-2x'/>
            </div>
            <div className='flex justify-between items-center w-full px-6 lg:px-32 mb-14 lg:mb-10 z-50 '>
                <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Gabriel🧑‍💻</h1>
                <div className='flex items-center gap-2'>
                    {socials.map((social,index) =>{
                        const Icon = social.icon
                        return( 
                        <Link 
                            href={social.link}
                            key={index} 
                            aria-label={social.label}
                        >
                            <Icon className='w-5 h-5 hover:scale-125 transition-all'/>

                        </Link>
                        );
                    })}
                </div>
            </div>
            <BackgroundBeams className=' absolute z-10'/>
        </div>
        
    </div>
  )
}

export default Footer
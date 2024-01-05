import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router'
import  CodeChefIcon, { TwitterIcon,DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, SunIcon, MoonIcon, LeetCodeIcon, CodingNinjasIcon } from './Icons'
import {motion} from "framer-motion"
import useThemeSwitcher from './hooks/useThemeSwitcher'



const CustomLink=({href,title,className=""})=>{
const router=useRouter();

 return(
    <Link href={href} className={`${className} relative group`}>
        {title}
        <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 dark:bg-light
        ${router.asPath === href ? 'w-full':'w-0'}
        `}>&nbsp;</span>
    </Link>
 )
}

const Navbar = () => {

 const[mode,setMode]=useThemeSwitcher();

  return (
   <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
       <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/>
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
        
       </nav>
       <nav className='flex item-center justify-center flex-wrap '>
        <motion.a href="https://leetcode.com/utsav4578/" target={"_blank"}
        whileHover={{y:-2}}
        whiletap={{scale:0.9}}
        className="w-6 mx-3"
        >
          <LeetCodeIcon className='dark:bg-light'/>
        </motion.a> 
        <motion.a href="https://github.com/utsavxf" target={"_blank"} className="w-6 mx-3"
        whileHover={{y:-2}}
        whiletap={{scale:0.9}}>
          <GithubIcon/>    
        </motion.a> 
        <motion.a href="https://www.linkedin.com/in/utsav-bhardwaj-514394220/" target={"_blank"} className="w-6 mx-3"
        whileHover={{y:-2}}
        whiletap={{scale:0.9}}>
          <LinkedInIcon/>    
        </motion.a> 
        <motion.a href="https://www.codechef.com/users/codeslayer123" target={"_blank"} className="w-6 mx-3"
        whileHover={{y:-2}}
        whiletap={{scale:0.9}}>
          <CodeChefIcon className='dark:bg-light'/>    
        </motion.a> 
        <motion.a href="https://www.codingninjas.com/studio/profile/3d29e3e4-93b1-4026-92ab-cb678d672322" target={"_blank"} className="w-6 ml-3"
        whileHover={{y:-2}}
        whiletap={{scale:0.9}}>
          <CodingNinjasIcon className='dark:bg-light' /> 
        </motion.a> 

        <button
        className={` ml-8 flex items-center justify-center rounded-full p-1 -mt-1  ${mode==="light"?"bg-dark text-light":"bg-light text-dark"}`}
         onClick={()=>setMode(mode=="light"?"dark":"light")}
        >
          {
            mode==='dark'?
            <SunIcon className={"fill-dark"}/>:
            <MoonIcon className={"fill-dark"}/>
          }
        </button>
    
       </nav> 
       <div  className='absolute left-[50%] top-2 translate-x-[-50%]'>
         <Logo/>
       </div>  
   </header>
  )
}

export default Navbar

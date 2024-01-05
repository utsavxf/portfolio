import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref=useRef(null)
   return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}

        >
            <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75'>
                {time}|{address}
            </span>
            <p className='font-medium w-full'>
                {work}
            </p>
        </motion.div>



    </li>
}

const Experience = () => {
    const ref=useRef(null)
    const {scrollYProgress}=useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )

    return (
        <div className='my-16'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
               {/* line waala div ,using useScroll hook to create animation*/} 
               <motion.div
               style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light'
                />  
                <ul className='w-full flex flex-col items-start justify-normal-between ml-4'>
                    <Details
                        companyLink="/"
                        position="Frontend Engineer" company=" AmityIncubator"
                        time="2022-2023" address="Noida sec 125"
                        work="
                        I collaborated as a frontend developer, crafting websites tailored for startups, refining user interfaces, and enhancing functionalities to empower small businesses with impactful online presences"
                    />
                    {/* <Details
                        companyLink="www.google.com"
                        position="Software Engineer" company=" @Google"
                        time="2022-Present" address=" Mountain View, CA"
                        work="
Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    /> */}
                    {/* <Details
                        companyLink="www.google.com"
                        position="Software Engineer" company=" @Google"
                        time="2022-Present" address=" Mountain View, CA"
                        work="
Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                    <Details
                        companyLink="www.google.com"
                        position="Software Engineer" company=" @Google"
                        time="2022-Present" address=" Mountain View, CA"
                        work="
Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    /> */}
                </ul>
            </div>

        </div>
    )
}

export default Experience
import React, { useRef } from 'react'
import { useScroll,motion } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({type,time,place,info,grade}) => {
    const ref=useRef(null)
   return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={ref}/>
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}

        >
            <h3 className='capitalize font-bold text-2xl'>
                {type}
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light'>
                {time}|{place}
            </span>
            <p className='font-medium w-full'>
                {info}
            </p>
            <div>
                <span className='font-bold'>Grade</span>: {grade}
            </div>
        </motion.div>



    </li>
}

const Education = () => {
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
                Education
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>
               {/* line waala div ,using useScroll hook to create animation*/} 
               <motion.div
               style={{scaleY:scrollYProgress}}
                className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light'
                />  
                <ul className='w-full flex flex-col items-start justify-normal-between ml-4'>
                    <Details
                    type="Bachelor Of Technology In Computer Science"
                    time="2021-2025" place=" Amity University Noida"
                    info="Relevant courses included Data Structures and Algorithms, Computer Networks ,DBMS and Artificial Intelligence"
                    grade="8.3 CGPA"
                    /> 
                    <Details
                    type="Class 12th"
                    time="2021" place="Delhi Public School Ghaziabad,Meerut Road"
                    info="Physics,Chemistry,Mathematics"
                    grade="90.6%"
                    /> 
                    <Details
                    type="Class 10th"
                    time="2019" place="Delhi Public School Ghaziabad,Meerut Road"
                    info=""
                    grade="96%"
                    /> 
                </ul>
            </div>

        </div>
    )
}

export default Education

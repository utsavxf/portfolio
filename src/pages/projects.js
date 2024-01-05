import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/ecommerce1 (1).png" 
import project2 from "../../public/images/projects/cine (1).png" 
import project3 from "../../public/images/projects/monkey (1).png" 
import project4 from "../../public/images/projects/2024-01-05 (3).png" 
import project5 from "../../public/images/projects/2024-01-05 (4).png" 

import TansitionEffect from '@/components/TansitionEffect'


const FeaturedProject=({type,title,summary,img,link,github,techstack})=>{
 return(
    <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl'></div>
        <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
         <Image src={img} alt={title} className='w-full h-auto'/>
        </Link>
        <div className='w-1/2 flex flex-col items-start justify-between pl-4 dark:bg-dark'>
            <span className='text-primary font-medium text-xl dark:text-primaryDark'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
              <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light'>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div>
              <span className='font-bold  dark:text-white'>Tech Stack Used: </span>
              <span className='  dark:text-primaryDark text-primary'>{techstack}</span>
            </div>
            <div className='mt-2 flex items-center'>
            <Link className='w-10' href={github} target="_blank"><GithubIcon/> </Link>
            <Link className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark' href={link} target="_blank">See Project</Link>
            </div>
        </div>

    </article>
 )
}

const Project=({type,title,summary,img,link,github,techstack})=>{

 return(
    <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl'></div>
        <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
         <Image src={img} alt={title} className='w-full h-auto'/>
        </Link>
        <TansitionEffect/>
        <div className='w-full flex flex-col items-start justify-between mt-4'>
            <span className='text-primary font-medium text-xl  dark:text-primaryDark'>{type}</span>
            <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
              <h2 className='my-2 w-full text-left text-3xl font-bold '>{title}</h2>
            </Link>
            <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
            <div>
              <span className='font-bold dark:text-white'>Tech Stack Used: </span>
              <span className='text-primary   dark:text-primaryDark'>{techstack}</span>
            </div>
            <div className=' w-full mt-2 flex items-center justify-between'>
            <Link className='font-semibold underline' href={link} target="_blank">See</Link>   
            <Link className='w-8' href={github} target="_blank"><GithubIcon/> </Link>

            </div>
        </div>

    </article>
 )

}

const projects = () => {
  return (
    <>
       <Head>
                <title>UtsavBhardwaj | Projects Page</title>
                <meta name="description" content='any description' />
        </Head>
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Webcraft Repository" className='mb-16'/>

              <div className='grid grid-cols-12 gap-24 gap-y-32'>
                {/* FIRST WILL BE THE FEATURED PROJECT ,IT WILL TAKE ALL THE COLUMNS */}
                <div className='col-span-12'>
                  <FeaturedProject
                 title="BookVana"
                 img={project4}
                 summary="BookVana offers a comprehensive online book rental platform, empowering users to upload, browse, and engage with a diverse collection of books. With features enabling user interactions like liking, commenting, and following others, it's a vibrant community fostering a shared passion for reading and sharing literary experiences.."
                 link="https://drive.google.com/file/d/1bG95-0_VNgDhG40U402cL4FQCIvh-Z7X/view?usp=drive_link"
                 type="FullStack Book Renting"
                 github="https://github.com/utsavxf/BookVana2"
                 techstack="React,Node,Jwt,Redux,MongoDB"
                  />
                </div>
                {/* after that we will show 2 projects side by side */}
                <div className='col-span-6'>
                <Project
                 title="ChatSync"
                 img={project5}
                 summary="ChatSync is a real-time chat application leveraging React on the frontend and WebSockets for seamless, instant communication. It provides users with a dynamic platform to engage in live conversations, fostering quick and synchronized interactions in an intuitive and user-friendly environment"
                 link="https://drive.google.com/file/d/1EGcC0A-KYAklumo6-6XgXjiXtOZqdUZ1/view?usp=drive_link"
                 type="Frontend Chat Application"
                 github="https://github.com/utsavxf/ChatSync"
                 techstack="React,Google Auth,Web Sockets"
                  />
                </div>
                <div className='col-span-6'>
                <Project
                 title="ShopNest"
                 img={project1}
                 summary="ShopNest is a comprehensive e-commerce application designed to provide users with a seamless shopping experience. With a wide array of products available, users can effortlessly browse, add items to their cart, and proceed to a secure payment gateway for hassle-free transactions."
                 link="https://drive.google.com/file/d/18MJU5lIO3Ir7ZSZaDxdgypIA3j7H8aqv/view"
                 type="FullStack Ecommerce"
                 github="https://github.com/utsavxf/ShopNest"
                 techstack="Redux, Jwt Authentication ,Stripe Payment,"
                  />
                </div>

                 {/* FIRST WILL BE THE FEATURED PROJECT ,IT WILL TAKE ALL THE COLUMNS */}
                {/* after that we will show 2 projects side by side */}
                <div className='col-span-6'>
                <Project
                 title=" CineSphere"
                 img={project2}
                 summary="Cinesphere is a Fullstack MERN application designed for users to discover, categorize, and manage their preferred movies and TV shows, offering genre-based sorting and personalized watchlist features for an enhanced entertainment experience"
                 link="https://drive.google.com/file/d/1G5nU8RqU6PoFb9sb0C-kTmYMzvGUVHVF/view"
                 type="FullStack Movie App"
                 github="https://github.com/utsavxf/cineSphere2"
                 techstack="Redux ,Jwt,Material Ui"
                  />
                </div>
                <div className='col-span-6'>
                <Project
                 title="NewsMonkey"
                 img={project3}
                 summary="Newsmonkey, built on the MERN stack, offers a sleek frontend interface for real-time access to diverse news sectors. Experience the latest headlines and delve into specific sectors effortlessly, ensuring a seamless and informed browsing experience"
                 link="https://drive.google.com/file/d/1jUhWphU3U5eoPyy9Raatr-GYeMljlb_Z/view?usp=drive_link"
                 type="Frontend Project"
                 github="https://github.com/utsavxf/NewsMonkey"
                 techstack=""
                  />
                </div>


              </div>

            </Layout>
        </main>
    </>
  )
}

export default projects

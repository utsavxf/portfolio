import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/utsav_passportSize_photo.jpeg"
import Image from 'next/image'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TansitionEffect from '@/components/TansitionEffect'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref,{once:true});  //so that shows only once when user scrolls up or down

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0)) {
                ref.current.textContent=latest.toFixed(0)
            }
        });
    }, [springValue, value, ref]);

    return <span ref={ref}></span>;
};



const about = () => {
    return (
        <>
            <Head>
                <title>UtsavBhardwaj | abbout Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TansitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose"className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>Hi, I&apos;m Utsav Bhardwaj, a web developer with a passion for creating beautiful, functional,
    and user-centered websites. With 2 years of experience in the field. I am always looking for
    new and innovative ways to bring my clients&apos; visions to life.
</p>
                            <p className='font-medium my-4'>I believe web development extends beyond code—it&apos;s about solving challenges and crafting seamless, user-centric experiences through innovation and functionality. </p>
                            {/* <p className='font-medium'> Whether I'm working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.</p> */}
                        </div>

                        <div className='col-span-3 xl:col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
                            <Image src={profilePic} alt="hi" className="w-full h-auto rounded-2xl"/>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-evenly xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experiences</h2>
                            </div>
                          
                        </div>

                    </div>
                </Layout>
                <Experience/>
                <Education/>
                <Skills/>
            </main>
        </>
    )
}

export default about

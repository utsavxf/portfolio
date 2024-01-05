import TansitionEffect from '@/components/TansitionEffect'
import Head from 'next/head'
import React from 'react'

const contact = () => {
  return (
     
    

    <div className='antialiased bg-light  p-8 h-full dark:bg-dark'>
       <Head>
                <title>UtsavBhardwaj | contact Page</title>
                <meta name="description" content='any description' />
            </Head>
            <TansitionEffect/>
      <div className='flex w-full justify-center items-center '>
        <div className='bg-dark flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 w-full max-w-4xl p-8 rounded-xl shadow-lg text-white overflow-hidden dark:bg-light dark:text-dark '>
          <div className='flex flex-col justify-between'>
            <h1 className='font-bold text-4xl tracking-wide'>Contact Me</h1>
            <p className='pt-2 text-primary-100 text-sm'>Feel free to get in touch with me! Whether it's about a potential collaboration, project inquiry, or just to say hello, I'd love to hear from you. Drop me a message, and I'll get back to you as soon as possible</p>
         
          <div className='flex flex-col space-y-6'>
            {/* Icons */}
            <div className='inline-flex space-x-2 items0-center'>
              <ion-icon name="call" className='text-primary-300 text-xl'></ion-icon>
              <span> +(91)7982989270</span>
            </div>
            <div className='inline-flex space-x-2 items0-center'>
              <ion-icon name="mail" className='text-primary-300 text-xl'></ion-icon>
              <span>utb4578@gmail.com</span>
            </div>
            <div className='inline-flex space-x-2 items0-center'>
              <ion-icon name="location" className='text-primary-300 text-xl'></ion-icon>
              <span>Vaishali,Ghaziabad,UP,India</span>
            </div>
          </div>
          <div className='flex space-x-4 text-lg'>
            <a href="/"><ion-icon name="logo-facebook"></ion-icon></a>
            <a href="/"><ion-icon name="logo-twitter"></ion-icon></a>
            <a href="/"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="/"><ion-icon name="logo-instagram"></ion-icon></a>
          </div>
          </div>
          {/* background 2 circles */}
          {/* <div className="relative z-0 -right-20 -top-20">
            <div className='absolute w-40 h-40 bg-primary rounded-full'></div>
          </div> */}
          <div className=' relative z-10 bg-white-rounded-xl shadow-lg p-8 w-full'>
            <form action="" className='flex flex-col space-y-4'>
              <div>
                <label htmlFor="" className='text-sm'>Your Name</label>
                <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300' />
              </div>
             
              <div>
                <label htmlFor="" className='text-sm'>Email Address</label>
                <input type="text" placeholder='Your Email' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300' />
              </div>
             
              <div>
                <label htmlFor="" className='text-sm'>Message</label>
                <textarea rows={4} type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full mt-2 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-gray-300' />
              </div>
              <button className='inline-block self-start  text-white bg-primary rounded-lg font-bold px-6 py-2 uppercase text-sm'>
                Send Message
              </button>
             
            </form>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    </div>
  )
}

export default contact

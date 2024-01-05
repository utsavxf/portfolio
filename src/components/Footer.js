import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light'>
        <Layout className='py-8 flex items-center justify-between'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
           Build with <span className='text-primary text-2xl px-1  dark:text-primaryDark'>&#9825;</span>by &nbsp; <Link href="/" className='underline underline-offset-2'>UtsavBhardwaj</Link>
           </div>
            <Link href="/contact">Say Hello</Link>
        </Layout>
      </footer>
    </div>
  )
} 

export default Footer
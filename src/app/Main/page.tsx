'use client'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function Main() {
    return (
        <>
            <Navbar />
            <section className='px-4 py-8 relative sm:py-12 bg-gradient-to-br from-[#e5e5e5] via-[#ccd4df] to-[#92aee2]'>
                <div className='flex flex-col items-center gap-4 sm:gap-6'>
                    <p className='flex items-center font-semibold gap-2 py-1 px-4 bg-white/10 text-[#f86f03] border rounded-4xl w-fit text-[10px] whitespace-nowrap sm:text-sm'><FaAward />STEP INTO THE IT WORLD WITH SNT</p>
                    <h1 style={{ fontFamily: "Urbanist-bold" }} className='text-2xl leading-tight mt-2 text-zinc-800 text-center sm:text-4xl lg:text-[56px]'>Join the  No. 1 Institute with <br /><span style={{ fontFamily: "Urbanist-bold" }} className='text-[#525fe1]'>100% Job Placement Support.</span></h1>
                    <p className='text-center block font-semibold text-gray-700 sm:hidden max-w-[325px] text-xs md:text-lg'>Kickstart your IT career with job-ready training and 100% placement support from SNT.</p>
                    <p className='text-center font-semibold text-gray-700 hidden sm:block sm:max-w-[525px] lg:max-w-[800px] text-[15px] md:text-lg'>Achieve your IT career goals with job-ready training and 100% job assistance. SNT ensures you master essential IT skills to succeed in today&apos;s competitive world.</p>
                    <button className='py-2 pl-4 font-semibold text-sm sm:text-base cursor-pointer pr-2 text-white bg-[#525fe1] rounded-full flex items-center gap-2 mt-2'>Get Started Now <span className='bg-white text-black rounded-full p-2'><FaArrowRightLong /></span></button>
                </div>
            </section >
        </>
    )
}


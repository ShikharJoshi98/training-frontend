'use client'
import Button from '@/components/Button'
import Navbar from '@/components/Navbar'
import SmallButton from '@/components/SmallButton'
import Image from 'next/image'
import React from 'react'
import { BsGraphUpArrow } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { FaArrowRight, FaAward, FaBriefcase, FaCalendar, FaCalendarAlt, FaClock, FaCode, FaPhoneAlt, FaRupeeSign } from 'react-icons/fa'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { GiStairsGoal } from 'react-icons/gi'

const aboutInfoArray = [{ title: '12+', desc: 'Year Est.' }, { title: '20k+', desc: 'Students' }, { title: '50+', desc: 'Courses' }, { title: '50+', desc: 'Companies' }]
const courseArray = [{ image: "/javafullstackdeveloper (1).jpg", title: "Java Full Stack Development", duration: "8 Months", income: "Minimum 6-8 LPA", opportunites: "1.08 lac+ jobs/internship Opportunities" }, { image: "/frontenddeveloper.jpg", title: "Frontend Web Development", duration: "4 Months", income: "Average 3-5 LPA", opportunites: "50k+ jobs/internship Opportunities" }, { image: "/MERNSTACKDEVELOPER.jpg", title: "MERN Stack Development", duration: "6 Months", income: "Average 4-6 LPA", opportunites: "70k+ jobs/internship Opportunities" }];
const upcomingBatchArray = [{ title: 'Full Stack Java Development', date: '19 July 2025', duration: '11:00 AM to 02:00 PM', days: 'Weekend', type: 'Online/Offline' }, { title: 'MERN Stack Development', date: '18 August 2025', duration: '07:00 PM to 08:30 PM', days: 'Weekday', type: 'Online/Offline' }, { title: 'Frontend Web Development', date: '25 August 2025', duration: '10:00 AM to 12:00 PM', days: 'Weekday', type: 'Online/Offline' }]
export default function Main() {
    return (
        <>
            <Navbar />
            <section className='px-4 py-8 relative sm:py-12 bg-gradient-to-b rounded-t-xl from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]'>
                <div className='flex flex-col items-center gap-4 sm:gap-6'>
                    <p className='flex items-center font-semibold gap-2 py-1 px-4 bg-transparent  border rounded-4xl w-fit text-[10px] whitespace-nowrap sm:text-sm'><FaAward className='text-[#525fe1]' />STEP INTO THE IT WORLD WITH SNT</p>
                    <h1 style={{ fontFamily: "Urbanist-bold" }} className='text-2xl leading-tight mt-2 text-zinc-800 text-center sm:text-4xl lg:text-[56px]'>Join the  No. 1 Institute with <br /><span style={{ fontFamily: "Urbanist-bold" }} className='text-[#525fe1]'>100% Job Placement Support.</span></h1>
                    <p className='text-center block font-semibold text-gray-700 sm:hidden max-w-[325px] text-xs md:text-lg'>Kickstart your IT career with job-ready training and 100% placement support from SNT.</p>
                    <p className='text-center font-semibold text-gray-700 hidden sm:block sm:max-w-[525px] lg:max-w-[800px] text-[15px] md:text-lg'>Achieve your IT career goals with job-ready training and 100% job assistance. SNT ensures you master essential IT skills to succeed in today&apos;s competitive world.</p>
                    <button className='py-2 pl-4 font-semibold text-sm sm:text-lg cursor-pointer pr-2 text-white bg-[#525fe1] rounded-full flex items-center gap-2 mt-2'>Get Started Now <span className='bg-white text-black rounded-full p-2'><FaArrowRightLong /></span></button>
                </div>
            </section>
            <section className='bg-gradient-to-b px-5 py-10 items-center flex flex-col-reverse lg:flex-row lg:gap-0 lg:justify-center gap-10 from-[#e5e5e5] w-full to-white'>
                <div className='flex flex-col sm:flex-row flex-wrap mx-auto lg:mx-0 max-w-[536px] lg:w-auto sm:justify-center lg:justify-start items-center gap-6'>
                    {
                        aboutInfoArray.map((info, index) => (
                            <div key={index} className='p-5 bg-white sm:w-52 flex flex-col gap-2 shadow-md items-center border border-[#525fe1] w-[90vw] rounded-2xl'>
                                <p style={{ fontFamily: 'Urbanist-bold' }} className='text-4xl sm:text-5xl text-[#525fe1]'>{info.title}</p>
                                <p className='font-semibold'>{info.desc}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-[90vw] max-w-[536px] h-72 mx-auto lg:mx-0 bg-white border rounded-2xl'>
                    {/* right section */}
                </div>
            </section>
            <h3 style={{ fontFamily: 'Urbanist-bold' }} className='text-[#7079df] w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>WHO WE ARE</h3>
            <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-5xl mt-3 w-fit mx-auto'>About <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>SNT</span></h1>
            <section className='py-10 mt-5 flex flex-col lg:flex-row items-center lg:justify-center lg:gap-10 xl:gap-15 gap-5'>
                <div>
                    <Image src="/about-image-09.jpg" alt='About Image' height={340} width={290} className='mx-auto rounded-t-full lg:h-[595px] lg:w-[363px] xl:h-[555px] xl:w-[463px] object-cover' />
                </div>
                <div className='px-4'>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-y-3 lg:w-fit items-center gap-5 text-zinc-600 mt-8 lg:mt-0'>
                        <div className='p-3 rounded-xl max-w-2xl lg:max-w-[260px] lg:h-44 bg-[#E4FEEF] shadow-sm'>
                            <span className='flex items-center gap-3'><span className='p-1 rounded-md bg-green-500 text-white'><CgSandClock size={25} /></span><h5 className='font-semibold text-xl text-black'>Our Journey</h5></span>
                            <p className='mt-5 text-sm'>Established in 2012, we began as a Training Center to skill the youth and provide them with assured placements.</p>
                        </div>
                        <div className='p-3 rounded-xl bg-[#fffae5] lg:h-44 lg:max-w-[260px] shadow-sm'>
                            <span className='flex items-center gap-3'><span className='p-1 rounded-md bg-yellow-400 text-white'><FaCode size={25} /></span><h5 className='font-semibold text-xl text-black'>IT Industry Impact</h5></span>
                            <p className='mt-5 text-sm'>The IT sector evolves rapidly, influencing all industries. It&apos;s a driving force shaping the future across domains.</p>
                        </div>
                        <div className='p-3 rounded-xl bg-[#f6edec] lg:h-44 lg:max-w-[260px] shadow-sm'>
                            <span className='flex items-center gap-3'><span className='p-1 rounded-md bg-pink-400 text-white'><GiStairsGoal size={25} /></span><h5 className='font-semibold text-xl text-black'>Skills to Success</h5></span>
                            <p className='mt-5 text-sm'>Training youth in emerging technologies bridges the skill gap, ensuring placements in top roles across sectors.</p>
                        </div>
                        <div className='p-3 rounded-xl bg-[#F3F0FF] lg:h-44 lg:max-w-[260px] shadow-sm'>
                            <span className='flex items-center gap-3'><span className='p-1 rounded-md bg-purple-400 text-white'><BsGraphUpArrow size={25} /></span><h5 className='font-semibold text-xl text-black'>Leading with Learning</h5></span>
                            <p className='mt-5 text-sm'>As a leading institute in Java training, we now offer a wide range of IT courses to cater to diverse career paths.</p>
                        </div>
                    </div>
                    <ul className='list-none mt-10 flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-38 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold mb-10'>
                        <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Flexible training programs</li>
                        <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Learn from approved experts</li>
                        <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Friendly environment for you</li>
                        <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Boost your knowledge</li>
                    </ul>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                        <Button text="Know More" />
                        <div className='flex items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>+91 8595161711</span></div>
                    </div>
                </div>
            </section>
            <h3 style={{ fontFamily: 'Urbanist-bold' }} className='text-[#7079df] w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>UNIQUE COURSES</h3>
            <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-5xl mt-3 w-fit mx-auto'>Our Featured <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Courses</span></h1>
            <section className="mt-14">
                <div className='mx-auto flex flex-wrap gap-6 justify-center w-full px-4'>
                    {
                        courseArray.map((course, index) => (
                            <div key={index} className="bg-white shadow-md hover:shadow-xl hover:shadow-black/40 duration-300 rounded-lg pb-4 w-[90vw] sm:w-96 max-w-96 flex flex-col">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    height={90}
                                    width={90}
                                    className="w-full object-cover rounded-t-2xl"
                                />
                                <h3 className="mt-5 pl-3 font-semibold text-lg">{course.title}</h3>
                                <div className="flex items-center flex-wrap mt-5 justify-between px-3">
                                    <span className="flex items-center text-zinc-500 font-semibold gap-1">
                                        <FaClock className="text-[#525fe1]" />
                                        {course.duration}
                                    </span>
                                    <span className="flex items-center text-zinc-500 font-semibold gap-1">
                                        <FaRupeeSign className="text-[#525fe1]" />
                                        {course.income}
                                    </span>
                                </div>
                                <span className="flex items-center mt-5 text-zinc-500 font-semibold gap-1 px-3">
                                    <FaBriefcase className="text-[#525fe1]" />
                                    {course.opportunites}
                                </span>
                                <div className="w-[80%] h-[0.5px] my-5 bg-gray-400 mx-auto"></div>
                                <div className="flex items-center justify-between px-3 mt-auto">
                                    <SmallButton text="Read More" />
                                    <p className="relative group w-fit text-sm sm:text-base cursor-pointer duration-300 py-3 px-5 text-[#525fe1] flex items-center gap-3 font-semibold rounded-lg">
                                        Enroll Now <FaArrowRight />
                                        <span className="absolute left-5 bottom-2 h-[2px] w-0 bg-[#525fe1] transition-all duration-300 group-hover:w-[60%]"></span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='bg-slate-800 mt-10 lg:mt-16 max-w-[1200px] md:pr-10 md:pl-5 mb-20 md:flex md:items-center md:justify-between lg:justify-center lg:gap-40 lg:px-0 text-white py-10 px-4 w-[90vw] mx-auto rounded-2xl'>
                <h1 className='text-3xl md:text-4xl lg:mr-4 lg:text-5xl text-center mb-10 font-semibold'>Upcoming Batches</h1>
                <div>
                    {upcomingBatchArray.map((batch, index) => (
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center gap-2'><FaCalendarAlt className='text-[#525fe1]' />{batch.date}</p>
                            <h3 className='text-xl font-semibold cursor-pointer hover:text-[#525fe1] duration-300'>{batch.title}</h3>
                            <div className='flex text-sm items-center flex-wrap gap-4'>
                                <p className='flex items-center gap-2'><FaClock className='text-[#525fe1]' />{batch.duration}</p>
                                <p className='flex items-center gap-2'><FaCalendar className='text-[#525fe1]' />{batch.days}</p>
                                <p className='flex items-center gap-2'><FaLocationDot className='text-[#525fe1]' />{batch.type}</p>
                            </div>
                            <div className={`w-[90%] h-[0.5px] bg-white/70 my-7 ${index === upcomingBatchArray.length - 1 ? 'hidden' : ''}`}></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}


'use client'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SmallButton from '@/components/SmallButton'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { BsGraphUpArrow, BsStars } from 'react-icons/bs'
import { CgSandClock } from 'react-icons/cg'
import { FaArrowRight, FaAward, FaBriefcase, FaCalendar, FaCalendarAlt, FaChalkboardTeacher, FaClock, FaCode, FaHandshake, FaLaptopCode, FaMinus, FaPhoneAlt, FaPlus, FaRupeeSign, FaWhatsapp } from 'react-icons/fa'
import { FaArrowRightLong, FaLocationDot } from 'react-icons/fa6'
import { GiStairsGoal } from 'react-icons/gi'
import { IoPricetag } from 'react-icons/io5'
import { LiaStarSolid } from 'react-icons/lia'


const aboutInfoArray = [{ title: '12+', desc: 'Year Est.' }, { title: '20k+', desc: 'Students' }, { title: '50+', desc: 'Courses' }, { title: '50+', desc: 'Companies' }]
const courseArray = [{ image: "/javafullstackdeveloper (1).jpg", title: "Java Full Stack Development", duration: "8 Months", income: "Minimum 6-8 LPA", opportunites: "1.08 lac+ jobs/internship Opportunities" }, { image: "/frontenddeveloper.jpg", title: "Frontend Web Development", duration: "4 Months", income: "Average 3-5 LPA", opportunites: "50k+ jobs/internship Opportunities" }, { image: "/MERNSTACKDEVELOPER.jpg", title: "MERN Stack Development", duration: "6 Months", income: "Average 4-6 LPA", opportunites: "70k+ jobs/internship Opportunities" }];
const upcomingBatchArray = [{ title: 'Full Stack Java Development', date: '19 July 2025', duration: '11:00 AM to 02:00 PM', days: 'Weekend', type: 'Online/Offline' }, { title: 'MERN Stack Development', date: '18 August 2025', duration: '07:00 PM to 08:30 PM', days: 'Weekday', type: 'Online/Offline' }, { title: 'Frontend Web Development', date: '25 August 2025', duration: '10:00 AM to 12:00 PM', days: 'Weekday', type: 'Online/Offline' }]
const whyChooseUsArray = [{ symbol: <FaBriefcase />, title: 'Job Assured Courses', desc: 'Our programs are crafted to be job-focused and ensure relevant skills for your career' }, {
    symbol: <FaChalkboardTeacher />
    , title: 'Expert Instructors', desc: 'Gain insights from experienced professionals who offer practical, real-world knowledge'
}, { symbol: <FaHandshake />, title: 'Career Support', desc: 'Get expert help with resume crafting, interview skills, and job placement services' }, { symbol: <FaLaptopCode />, title: 'Hands-On Learning', desc: 'Participate in live projects and assignments that reflect actual industry challenges' }]

const studentData = [{ text: "SNT gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!", name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }]
const blogArray = ['Roadmap To Prepare For Campus Placement', '6 Amazing Java Applications You Should Know About', 'Python Machine Learning Libraries']
// const studentData = [{ text: "SNT gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!", name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }, { text: "What really sets SNT apart is the incredible support from the teaching team. Anytime I got stuck, there was always someone ready to help—whether it was during class, late at night on Slack, or in weekend doubt-clearing sessions. I never felt alone in the learning process.", name: 'Nitin Sharma', userImage: '/maletestimonail2.jpg' }, { text: "Before joining SNT, I struggled to grasp even the basics of programming. Their hands-on teaching style and real-world projects completely changed the game for me. I landed my first developer job just two months after completing the course. Truly life-changing!", name: 'Riya Sharma', userImage: '/girltestimonial.jpg' }]
const faqData = [
    { question: "Can I join if I have a gap after graduation?", desc: "Yes, definitely! Many of our students join after a gap. We offer personalized training and guidance to help you restart your career confidently in the IT sector." },
    { question: "What kind of placement support do you offer?", desc: "We offer 100% placement assistance including resume building, aptitude tests and mock interviews." },
    { question: "Are your courses beginner-friendly?", desc: "Yes! Our courses are designed for both freshers and non-IT students. We start from basics and guide you step-by-step towards becoming job-ready." },
    { question: "Is there any EMI/payment plan available?", desc: "We do not offer EMI options at the moment, but we do provide flexible installment plans to help students manage their payments more comfortably." },
    { question: "How do I get started with a course?", desc: "Simply fill out our inquiry form Click here or call us +91 8595161711. Our team will help you choose the right course and start your learning journey right away." },
    { question: "What if I miss a class?", desc: "No worries. We offer class recordings and backup sessions so that you never miss out on learning, even if you skip a session." },
    { question: "Do I need a technical background to join?", desc: "Not at all. Many of our students come from non-technical backgrounds. We start from scratch and build your skills step by step." },
    { question: "Will I get a certificate after course completion?", desc: "Yes, you’ll receive a recognized course completion certificate from JTC, which can be shared on your resume and LinkedIn." },
];
export default function Main() {
    const [openIndex, setOpenIndex] = useState(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggle = (index: any) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <Navbar />
            <section className='px-4 py-8 relative sm:py-12 bg-gradient-to-b rounded-t-xl from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]'>
                <div className='flex flex-col items-center gap-4 sm:gap-6'>
                    <p className='flex items-center font-semibold gap-2 py-1 px-4 bg-transparent  border rounded-4xl w-fit text-[10px] whitespace-nowrap sm:text-sm'><FaAward className='text-[#525fe1]' />STEP INTO THE IT WORLD WITH SNT</p>
                    <h1 style={{ fontFamily: "Urbanist-bold" }} className='text-2xl leading-tight mt-2 text-zinc-800 text-center sm:text-4xl lg:text-[56px]'>Join the  No. 1 Institute with <br /><span style={{ fontFamily: "Urbanist-bold" }} className='text-[#525fe1]'>100% Job Placement Support.</span></h1>
                    <p className='text-center block font-semibold text-gray-700 sm:hidden max-w-[325px] text-xs md:text-lg'>Kickstart your IT career with job-ready training and 100% placement support from SNT.</p>
                    <p className='text-center font-semibold text-gray-700 hidden sm:block sm:max-w-[525px] lg:max-w-[800px] text-[15px] md:text-lg'>Achieve your IT career goals with job-ready training and 100% job assistance. SNT ensures you master essential IT skills to succeed in today&apos;s competitive world.</p>
                    <button className='py-2 pl-4 font-semibold text-sm sm:text-lg cursor-pointer pr-2 text-white bg-[#525fe1] hover:bg-[#3c49e0] group duration-300 rounded-full flex items-center gap-2 mt-2'>Get Started Now <span className='bg-white group-hover:text-white group-hover:bg-black duration-300 text-black rounded-full p-2'><FaArrowRightLong /></span></button>
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
            <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>About <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>SNT</span></h1>
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
            <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>Our Featured <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Courses</span></h1>
            <section className="py-15">
                <div className='mx-auto flex flex-wrap gap-10 justify-center w-full px-4'>
                    {
                        courseArray.map((course, index) => (
                            <div key={index} className="bg-white shadow-md hover:shadow-xl hover:shadow-black/40 duration-300 rounded-lg pb-4 w-[90vw] sm:w-90 max-w-90 flex flex-col">
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    height={270}
                                    width={370}
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
                                        <span className="absolute left-5 bottom-3 h-[2px] w-0 bg-[#525fe1] transition-all duration-300 group-hover:w-[60%]"></span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='bg-gradient-to-tl from-black via-slate-900 to-gray-800 bg-cover bg-no-repeat mt-10 lg:mt-16 max-w-[1200px] md:pr-10 md:pl-5 mb-20 md:flex md:items-center md:justify-between lg:justify-center lg:gap-40 lg:px-0 text-white py-10 px-4 w-[90vw] mx-auto rounded-2xl'>
                <h1 className='text-3xl md:text-4xl lg:mr-4 text-center mb-10 font-semibold'>Upcoming Batches</h1>
                <div>
                    {upcomingBatchArray.map((batch, index) => (
                        <div key={index} className='flex flex-col gap-3'>
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
            <section className='bg-[#f3faff] px-5 py-15 mt-10 lg:mt-16'>
                <h3 style={{ fontFamily: 'Urbanist-bold' }} className='text-[#7079df] w-fit mx-auto md:text-xl'>OUR SERVICES</h3>
                <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>Why Choose <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>us?</span></h1>
                <div className='flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center  gap-8 mt-10'>
                    {
                        whyChooseUsArray.map((item, index) => (
                            <div key={index} className='flex group flex-col items-center shadow-md hover:shadow-lg gap-5 w-[80vw] sm:max-w-64 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg bg-white hover:bg-[#525fe1] duration-300'>
                                <span className='text-[#525fe1] group-hover:text-white text-5xl'>{item.symbol}</span>
                                <h3 className='text-center text-lg group-hover:text-white font-semibold text-zinc-800'>{item.title}</h3>
                                <p className='text-center group-hover:text-white text-zinc-700'>{item.desc}</p>
                            </div>
                        ))}
                </div>
            </section>
            <section className='bg-gradient-to-r py-15 from-[#fff3e7] via-[#f6f1f7] to-[#f6ebe7]'>
                <h3 style={{ fontFamily: 'Urbanist-bold' }} className='text-[#7079df] w-fit mx-auto md:text-xl'>SHAPING SUCCESS</h3>
                <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>Student <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Testimonials</span></h1>
                <div className='flex flex-col items-center lg:px-10 lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-10 xl:gap-16 lg:mt-14'>
                    <div className='px-4 lg:px-0 my-8 lg:my-4'>
                        <p className='text-zinc-600 font-semibold'>SNT empowers future developers through real-world coding, expert mentorship, and career-focused training.</p>
                        <ul className='list-none my-6 text-zinc-600 flex w-fit flex-col sm:grid sm:grid-cols-2 sm:gap-x-28 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold'>
                            <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Industry-relevant curriculum</li>
                            <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">1-on-1 mentor support</li>
                            <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Placement assistance & mock interviews</li>
                            <li className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">Flexible online and offline batches</li>
                        </ul>
                    </div>
                    {studentData.map((testimonial, index) => (
                        <div key={index} className='flex flex-col items-start gap-5 bg-white shadow-lg p-8 lg:max-w-[574px] rounded-md w-[90vw]'>
                            <div className='flex items-center gap-1 text-yellow-400 text-lg'>
                                {[...Array(5)].map((_, index) => (
                                    <LiaStarSolid key={index} />))}
                            </div>
                            <p className='text-gray-700 urbanist_bold'>"{testimonial.text}"</p>
                            <div className='flex items-center gap-4'>
                                <Image src={testimonial.userImage} alt='testimonail image' width={275} height={183} className='object-cover w-10 h-10 rounded-full' />
                                <p className='urbanist_bold'>{testimonial.name}</p>
                            </div>
                        </div>))}
                </div>
            </section>
            <section className='pt-15'>
                <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto md:text-xl'>Get General Answers</h3>
                <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Frequently Asked <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Questions</span></h1>
                <div className="max-w-6xl mx-auto pt-20 pb-13 px-6 md:flex md:flex-wrap gap-6">
                    {faqData.map((faq, index) => (
                        <div key={index} className="w-full md:w-[48%] border-b border-gray-300 cursor-pointer" onClick={() => toggle(index)}>
                            <div className={`flex justify-between items-center py-4 font-semibold text-black hover:text-[#525fe1] ${openIndex === index ? "text-[#525fe1]" : ""}`}>
                                <span>{faq.question}</span>
                                <span className="text-xl text-[#525fe1]">
                                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                                </span>
                            </div>
                            <div
                                ref={contentRef}
                                className="transition-all duration-300 ease-in-out overflow-hidden text-sm text-gray-600"
                                style={{
                                    maxHeight: openIndex === index ? `${contentRef.current?.scrollHeight}px` : "0px"
                                }}
                            >
                                <div className="pb-4">{faq.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section >
            <section className='py-15'>
                <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto md:text-xl'>Always Smart to Read Blogs</h3>
                <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Latest <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Blogs</span></h1>
                <div className='mt-12 flex flex-col md:flex-row md:justify-center md:items-center md:px-10 gap-6'>
                    {blogArray.map((blog, index) => (
                        <div key={index} className='bg-white w-[90vw] p-4 flex flex-col justify-between md:h-48 mx-auto md:mx-0 rounded-lg shadow-md shadow-gray-500'>
                            <h3 className='urbanist_bold text-xl cursor-pointer hover:text-[#525fe1] duration-300'>{blog}</h3>
                            <div className='flex items-center mt-5 justify-between'>
                                <p className='flex items-center gap-2 text-sm'><FaCalendar className='text-[#525fe1]' />01 August 2025</p>
                                <p className="relative group w-fit text-sm sm:text-base cursor-pointer duration-300 text-[#525fe1] flex items-center gap-1 font-semibold rounded-lg">
                                    Read More <FaArrowRight />
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#525fe1] transition-all duration-300 group-hover:w-[80%]"></span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="text-white pb-16 px-6">
                <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row rounded-xl overflow-hidden bg-gradient-to-tl from-black via-slate-900 to-gray-800 via shadow-lg">
                    <div className='absolute top-5 left-10'><BsStars size={20} /></div>
                    <div className="flex-1 p-10 space-y-6">
                        <h2 className="text-3xl sm:text-4xl text-white  font-bold leading-snug">SNT Self Paced Learning</h2>
                        <p className="text-gray-300">Learn at your pace, anytime and anywhere, with our self-paced courses</p>
                        <Button text='Get Started Now' />
                    </div>
                    <div className='sm:flex absolute hidden bottom-10 right-10 items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>+91 8595161711</span></div>
                </div>
            </section >
            <Footer />
        </>
    )
}


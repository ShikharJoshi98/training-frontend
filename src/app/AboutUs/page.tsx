import Button from "@/components/Button";
import SelfPacedLearning from "@/components/SelfPacedLearning";
import Image from "next/image";
import { BsGraphUpArrow } from "react-icons/bs";
import { CgSandClock } from "react-icons/cg";
import { FaBriefcase, FaChalkboardTeacher, FaCode, FaHandshake, FaLaptopCode, FaPhoneAlt } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { LiaStarSolid } from "react-icons/lia";

const aboutInfoArray = [{ title: '12+', desc: 'Year Est.' }, { title: '20k+', desc: 'Students' }, { title: '50+', desc: 'Courses' }, { title: '50+', desc: 'Companies' }]
const whyChooseUsArray = [{ symbol: <FaBriefcase />, title: 'Job Assured Courses', desc: 'Our programs are crafted to be job-focused and ensure relevant skills for your career' }, {
    symbol: <FaChalkboardTeacher />
    , title: 'Expert Instructors', desc: 'Gain insights from experienced professionals who offer practical, real-world knowledge'
}, { symbol: <FaHandshake />, title: 'Career Support', desc: 'Get expert help with resume crafting, interview skills, and job placement services' }, { symbol: <FaLaptopCode />, title: 'Hands-On Learning', desc: 'Participate in live projects and assignments that reflect actual industry challenges' }]
const studentData = [{ text: "SNT gave me the confidence to switch careers. The instructors are patient, knowledgeable, and genuinely care about your progress. I never thought I&apos;d be building full-stack apps, but here I am!", name: 'Arjun Mehta', userImage: '/maletestimonail1.jpg' }]

export default function AboutUs() {
    return (
        <>
            <div className="sm:h-56 h-36 w-full bg-[url(/aboutUsBanner.jpg)] bg-cover bg-no-repeat">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>About Us</h1>
            </div>
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
            <section className='px-5 py-10 items-center flex flex-col-reverse lg:flex-row lg:gap-0 lg:justify-center gap-10 w-full'>
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
            <section className='bg-gradient-to-r py-15 mb-14 from-[#fff3e7] via-[#f6f1f7] to-[#f6ebe7]'>
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
            <SelfPacedLearning />
        </>
    )
}
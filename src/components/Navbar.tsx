'use client'
import Image from "next/image";
import { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import CourseModal from "./CourseModal";
import Link from "next/link";

export default function Navbar() {
    const [isCourseModal, setCourseModal] = useState(false);
    return (
        <>
            {/* <div className="bg-[#f86f03] p-1">
                <p className="text-white px-4 leading-relaxed text-center text-wrap w-auto sm:w-[514px] md:w-[749px] lg:w-fit mx-auto">Job Oriented Courses for Everyone! Open to All Graduates, Diplomas, Long Years Gap, Passouts & Non-IT Fields. <span className="text-[#231F40] font-bold text-lg">Enquire Now 📩</span></p>
            </div> */}
            <div className="bg-[#231F40]">
                <ul className="list-none py-2 px-5 max-w-6xl mx-auto hidden md:flex items-center justify-between">
                    <li className="flex text-white/70 items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-full bg-[#525fe1]/30"><MdEmail className="w-3 h-3 text-white" /></span>
                            <p className="cursor-pointer">Mnath.snt@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-full bg-[#525fe1]/30"><FaPhoneAlt className="w-3 h-3 text-white" /></span>
                            <p className="cursor-pointer">+91 8595161711</p>
                        </div>
                    </li>
                    <li className="flex text-white items-center gap-4">Follow Us: <span className="flex items-center gap-3 text-white/70"><FaFacebook className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaYoutube className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaXTwitter className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaInstagram className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaLinkedin className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaTwitter className="cursor-pointer hover:text-[#f86f03] duration-300" /></span></li>
                </ul>
            </div>
            <div className="bg-white">
                <div className="p-3 sm:py-2 sm:px-5 max-w-6xl mx-auto flex items-center justify-between">
                    <div className="flex items-center">
                        <Image src="/sntlogo.jpg" alt="SNT Logo" height={60} width={64} className="w-10 h-14 object-cover sm:w-16 rounded-md" />
                        <Image src="/sntname.png" alt="SNT Name" height={60} width={96} className="w-16 h-14 sm:w-24 object-cover cursor-pointer" />
                    </div>
                    <ul className="flex md:hidden list-none items-center text-[#231F40] gap-4">
                        <li className="p-2 rounded-md shadow-md"><FaPhoneAlt className="size-4 sm:size-6 font-bold" /></li>
                        <li className="p-2 rounded-md shadow-md"><LuMessageSquare className="size-4 sm:size-6" /></li>
                        <li className="p-2 rounded-md shadow-md"><RiMenuFill className="size-4 sm:size-6" /></li>
                    </ul>
                    <ul className="lg:flex hidden list-none items-center gap-10">
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold"><Link href="/Main">Home</Link></li>
                        <li onClick={() => setCourseModal(true)} className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold">Courses</li>
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold"><Link href="/Tutorial">Tutorial</Link></li>
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold">About us</li>
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold">Blog</li>
                    </ul>
                    <span className="p-2 hidden md:block lg:hidden rounded-md shadow-md"><RiMenuFill className="size-4 sm:size-6" /></span>
                </div>
                {isCourseModal && <CourseModal onClose={() => setCourseModal(false)} />}
            </div>
        </>
    )
}
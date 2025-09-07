'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaAngleDoubleRight, FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";
import CourseModal from "./CourseModal";
import { useStore } from "../store/store";

export default function Navbar() {
    const { trainingInfo, socialInfo, getSocialInfo, getTrainingInfo } = useStore();
    const [isCourseModal, setCourseModal] = useState(false);
    const [openSideNav, setOpenSideNav] = useState(false);

    useEffect(() => {
        getTrainingInfo();
        getSocialInfo();
    }, [getTrainingInfo, getSocialInfo]);

    return (
        <>
            {openSideNav && (<div className="fixed inset-0 transition-opacity duration-300 bg-black/20 bg-opacity-50 z-10" onClick={() => setOpenSideNav(false)}></div>)}
            <aside className={`fixed top-0 right-0 h-screen w-36 bg-white font-semibold rounded-lg shadow-lg z-10 p-4 transition-transform duration-300 ease-in-out ${openSideNav ? 'translate-x-0' : 'translate-x-full'}`}>
                <FaAngleDoubleRight onClick={() => setOpenSideNav(false)} className="my-5" />
                <ul className="list-none space-y-1">
                    <li onClick={() => { setOpenSideNav(false); }} className={` flex items-center gap-2 cursor-pointer p-1 rounded-md`}><Link href="/Main">Home</Link></li>
                    <li onClick={() => { setCourseModal(true); setOpenSideNav(false); }} className={` flex items-center gap-2 cursor-pointer p-1 rounded-md`}>Courses</li>
                    <li onClick={() => { setOpenSideNav(false); }} className={` items-center gap-2 flex cursor-pointer p-1 rounded-md`}><Link href="/AboutUs">About Us</Link></li>
                    <li onClick={() => { setOpenSideNav(false); }} className={` flex items-center gap-2 cursor-pointer p-1 rounded-md`}><Link href="/Blog">Blogs</Link></li>
                </ul>
            </aside>
            <div className="bg-[#231F40]">
                <ul className="list-none py-2 px-5 max-w-6xl mx-auto hidden md:flex items-center justify-between">
                    <li className="flex text-white/70 items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-full bg-[#525fe1]/30"><MdEmail className="w-3 h-3 text-white" /></span>
                            <p className="cursor-pointer">{trainingInfo?.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="p-1.5 rounded-full bg-[#525fe1]/30"><FaPhoneAlt className="w-3 h-3 text-white" /></span>
                            <p className="cursor-pointer">{trainingInfo?.phone}</p>
                        </div>
                    </li>
                    <li className="flex text-white items-center gap-4">
                        Follow Us:
                        <span className="flex items-center gap-3 text-white/70">
                            {socialInfo?.facebook && <Link href={socialInfo?.facebook} target="_blank" ><FaFacebook className="cursor-pointer hover:text-white duration-300" /></Link>}
                            {socialInfo?.youtube && <Link href={socialInfo?.youtube} target="_blank" ><FaYoutube className="cursor-pointer hover:text-white duration-300" /></Link>}
                            {socialInfo?.twitter && <Link href={socialInfo?.twitter} target="_blank" ><FaXTwitter className="cursor-pointer hover:text-white duration-300" /></Link>}
                            {socialInfo?.Instagram && <Link href={socialInfo?.Instagram} target="_blank" ><FaInstagram className="cursor-pointer hover:text-white duration-300" /></Link>}
                            {socialInfo?.linkedIn && <Link href={socialInfo?.linkedIn} target="_blank" ><FaLinkedin className="cursor-pointer hover:text-white duration-300" /></Link>}
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bg-white shadow-md shadow-gray-100">
                <div className="p-3 sm:py-2 sm:px-5 max-w-6xl mx-auto flex items-center justify-between">
                    <Link href="/" >
                        <div className="flex items-center gap-2">
                            {trainingInfo?.logo && <Image src={trainingInfo?.logo} alt="Company Logo" height={60} width={64} className="w-10 h-14 object-cover sm:w-16 rounded-md cursor-pointer" />}
                            <h1 className="text-[34px] text-[#0c3b86] urbanist_bold cursor-pointer">{trainingInfo?.abbv ? trainingInfo?.abbv : trainingInfo?.instituteName}</h1>
                        </div>
                    </Link>
                    <ul className="flex md:hidden list-none items-center text-[#231F40] gap-4">
                        <li onClick={() => setOpenSideNav(true)} className="p-2 rounded-md shadow-md"><RiMenuFill className="size-4 sm:size-6" /></li>
                    </ul>
                    <ul className="lg:flex hidden list-none items-center gap-10">
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold"><Link href="/Main">Home</Link></li>
                        <li onClick={() => setCourseModal(true)} className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold">Courses</li>
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold"><Link href="/AboutUs">About Us</Link></li>
                        <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold"><Link href="/Blog">Blogs</Link></li>
                    </ul>
                    <span onClick={() => setOpenSideNav(true)} className="p-2 hidden md:block lg:hidden rounded-md shadow-md"><RiMenuFill className="size-4 sm:size-6" /></span>
                </div>
                {isCourseModal && <CourseModal onClose={() => setCourseModal(false)} />}
            </div>
        </>
    )
}
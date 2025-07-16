import Image from "next/image";
import { CiPhone } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { RiMenuFill } from "react-icons/ri";

export default function Navbar() {
    return (
        <>
            <div className="bg-[#f86f03] p-1.5">
                <p className="text-white px-4 leading-relaxed text-center text-wrap w-auto sm:w-[514px] md:w-[749px] lg:w-fit mx-auto">Job Oriented Courses for Everyone! Open to All Graduates, Diplomas, Long Years Gap, Passouts & Non-IT Fields. <span className="text-[#231F40] font-semibold text-xl">Enquire Now 📩</span></p>
            </div>
            <div className="bg-[#231F40]">
                <ul className="list-none py-3 px-5 lg:px-10 max-w-6xl mx-auto hidden md:flex items-center justify-between">
                    <li className="flex text-white/70 items-center gap-4">
                        <div className="flex items-center gap-2">
                            <MdEmail className="w-4 text-[#f86f03]" />
                            <p className="cursor-pointer">Mnath.snt@gmail.com</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaPhoneAlt className="w-4 text-[#f86f03] cursor-pointer" />
                            <p className="cursor-pointer">+91 8595161711</p>
                        </div>
                    </li>
                    <li className="flex text-white items-center gap-4">Follow Us: <span className="flex items-center gap-2 text-white/70"><FaFacebook className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaYoutube className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaXTwitter className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaInstagram className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaLinkedin className="cursor-pointer hover:text-[#f86f03] duration-300" /><FaTwitter className="cursor-pointer hover:text-[#f86f03] duration-300" /></span></li>
                </ul>
            </div>
            <div className="p-3 sm:py-3 sm:px-5 lg:px-10 max-w-6xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image src="/sntlogo.jpg" alt="SNT Logo" height={30} width={30} className="w-10 sm:w-16 rounded-md" />
                    <h1 className="text-[#035283] text-3xl sm:text-4xl font-semibold">SNT</h1>
                </div>
                <ul className="flex lg:hidden list-none items-center text-[#231F40] gap-2">
                    <li className="p-2 rounded-md shadow-md"><CiPhone className="size-4 sm:size-6" /></li>
                    <li className="p-2 rounded-md shadow-md"><LuMessageSquare className="size-4 sm:size-6" /></li>
                    <li className="p-2 rounded-md shadow-md"><RiMenuFill className="size-4 sm:size-6" /></li>
                </ul>
                <ul className="lg:flex hidden list-none items-center gap-6">
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">Home</li>
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">Courses</li>
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">Projects</li>
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">Tutorial</li>
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">About us</li>
                    <li className="text-[#231F40] hover:text-blue-600 cursor-pointer duration-300 font-semibold text-lg">Blog</li>
                </ul>
            </div>
        </>
    )
}
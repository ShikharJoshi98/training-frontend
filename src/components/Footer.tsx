import Image from "next/image";
import { FaEnvelope, FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export const footerLinks = [
    { title: "Explore", links: ["Home", "About Us", "Tutorials", "Courses"] },
    { title: "Useful Links", links: ["Contact Us", "Join Us", "Hire from Us", "Terms & Condition", "Privacy policy"] }
];

export default function Footer() {
    return (
        <footer className="bg-[#231f3b] text-white px-8 pt-12 pb-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div>
                    <h2 className="text-3xl font-serif font-stretch-150% font-bold mb-4">SNT</h2>
                    <p className="text-sm leading-relaxed text-gray-300">We were incorporated as a Training Center in the year 2012 with the motto of skilling the youth population and assuring them standard placements.</p>
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaFacebookF /></a>
                        <a href="#" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaYoutube /></a>
                        <a href="#" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaLinkedinIn /></a>
                        <a href="#" className="bg-[#2e2a4d] p-3 rounded-md hover:bg-white hover:text-black transition"><FaXTwitter /></a>
                    </div>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Explore</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="cursor-pointer hover:text-white duration-300">Home</li>
                        <li className="cursor-pointer hover:text-white duration-300">About Us</li>
                        <li className="cursor-pointer hover:text-white duration-300">Tutorials</li>
                        <li className="cursor-pointer hover:text-white duration-300">Courses</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
                    <ul className="space-y-3 text-gray-300">
                        <li className="cursor-pointer hover:text-white duration-300">Contact Us</li>
                        <li className="cursor-pointer hover:text-white duration-300">Join Us</li>
                        <li className="cursor-pointer hover:text-white duration-300">Hire from Us</li>
                        <li className="cursor-pointer hover:text-white duration-300">Terms & Condition</li>
                        <li className="cursor-pointer hover:text-white duration-300">Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                    <ul className="space-y-4 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                            <FiMapPin className="mt-1" />
                            D-211 1st Floor,108 Laxman Plaza, Near Bank of Baroda, Munirka, New Delhi-110067
                        </li>
                        <li className="flex items-center gap-2">
                            <FiPhone /> +91 8595161711
                        </li>
                        <li className="flex items-center gap-2">
                            <FiMail /> Mnath.snt@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm mt-15 text-gray-400">
                <p>Copyright &copy; 2025,  All rights reserved Super net technology Pvt.Ltd.</p>
            </div>
        </footer>
    )
}
import { BsStars } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "./Button";
import { companyName, contactNo } from "../constant/landingPageData";

const SelfPacedLearning = () => {
  return (
    <section className="text-white pb-16 px-6">
      <div className="max-w-6xl mx-auto relative flex flex-col lg:flex-row rounded-xl overflow-hidden bg-gradient-to-tl from-black via-slate-900 to-gray-800 shadow-lg">
        <div className='absolute top-5 left-10'><BsStars size={20} /></div>
        <div className="flex-1 p-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl text-white  font-bold leading-snug">{companyName} Self Paced Learning</h2>
          <p className="text-gray-300">Learn at your pace, anytime and anywhere, with our self-paced courses</p>
          <Button text='Get Started Now' />
        </div>
        <div className='sm:flex absolute hidden bottom-10 right-10 items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>{contactNo}</span></div>
      </div>
    </section >
  )
}

export default SelfPacedLearning
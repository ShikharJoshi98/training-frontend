'use client'
import EnrollNowModal from "@/components/EnrollNowModal";
import Input from "@/components/Input";
import SelfPacedLearning from "@/components/SelfPacedLearning";
import SmallButton from "@/components/SmallButton";
import { modules } from "@/constant/courses";
import { useStore } from "@/store/store";
import { dateMonthConverter } from "@/utils/dateConverter";
import { useParams } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCalendarAlt, FaChevronDown, FaChevronRight, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GiStairsGoal } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TbCertificate } from "react-icons/tb";

const Course = () => {
    const { instituteId, addStudentEnquiry, course, getCourse, upcomingBatches, getUpcomingBatches, curriculum, getCourseCurriculum } = useStore();
    const params = useParams();
    const id = typeof params.id === "string" ? params.id : "";
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [isEnrollModalOpen, setEnrollModalOpen] = useState<boolean>(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    const enrollSectionRef = useRef<HTMLDivElement>(null);
    const [submit, setSubmit] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getCourse(id);
        getUpcomingBatches();
        getCourseCurriculum(id, instituteId);
    }, [getCourse, getUpcomingBatches]);

    const upcomingBatch = upcomingBatches.find((batch) => batch?.batch === course?.course)

    const scrollToSection = () => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!termsChecked) {
                setError("Please accept the Terms and Conditions before submitting.");
                return;
            }

            await addStudentEnquiry({
                name,
                contact,
                type: "enquiry",
                enquiryAbout: course?.course
            });

            setName('');
            setContact('');
            setSubmit(true);
            setError("");
        } catch (error) {

        }
    }
    return (
        <section className="bg-gradient-to-b md:pt-10 lg:pt-20 from-[#bbd2ff] via-[#ccd4df] to-[#e5e5e5]">
            <div className="flex flex-col lg:flex-row items-center lg:gap-15 justify-center lg:px-15">
                <div className="md:w-auto">
                    <h1 className="text-4xl md:text-5xl max-w-3xl text-zinc-700 text-center lg:text-start urbanist_bold px-5 lg:px-0 py-10">{course?.course}</h1>
                    <div className="py-1 px-3 md:px-6 rounded-4xl font-semibold flex items-center gap-2 border text-sm md:text-lg w-fit mx-auto lg:mx-0"><FaCalendarAlt className="text-[#525fe1]" /><p>{`Next Batch at ${upcomingBatch?.startingDate?.split('-')[2]} ${dateMonthConverter(upcomingBatch?.startingDate)} ${upcomingBatch?.startingDate?.split('-')[0]}`}</p></div>
                    <div className="flex items-center justify-center lg:justify-start gap-3 mt-10">
                        <button onClick={() => enrollSectionRef.current?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#525fe1] cursor-pointer text-white urbanist_bold shadow-md text-sm sm:text-base md:text-lg rounded-md py-2.5 px-4">Enroll Now</button>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="w-[90vw] max-w-[450px] md:mx-0 rounded-xl p-6 mt-15 lg:mt-0 mx-auto bg-white flex flex-col gap-5">
                    <h1 className='text-zinc-800 text-4xl urbanist_bold text-center mb-5'>Enquire Now</h1>
                    <Input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} placeholder='Name' />
                    <Input type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} value={contact} placeholder='Mobile Number' />
                    <div className='flex justify-center items-center gap-2'>
                        <input type='checkbox' id='terms-and-conditions' className='size-4' checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)} /><label htmlFor='terms-and-conditions' className='cursor-pointer text-sm sm:text-base'>I have reviewed all <span className='text-[#525fe1] urbanist_bold'>Terms and Conditions.</span></label>
                    </div>
                    <button className='bg-[#525fe1] urbanist_bold mt-5 text-lg py-3 px-8 cursor-pointer hover:bg-[#4753dc] duration-300 rounded-md text-white w-fit mx-auto'>Enquire</button>
                    {submit && !error && (
                        <p className='mt-5 flex items-center justify-center gap-3 font-semibold text-lg'>
                            Enquiry Submitted Successfully <FaCircleCheck className='text-[#525fe1]' />
                        </p>
                    )}

                    {error && (
                        <p className='mt-5 text-center font-semibold text-lg text-red-600'>
                            {error}
                        </p>
                    )}
                </form>
            </div>
            <h1 id="Upcoming-Batches" ref={enrollSectionRef} className="text-3xl md:text-5xl text-center mt-24 urbanist_bold text-gray-900">Upcoming <span className="text-[#525fe1] urbanist_bold">Batches</span></h1>
            <div className="flex flex-wrap flex-col md:flex-row mx-auto mt-16 gap-4 w-[90vw] max-w-6xl items-center bg-white p-4 rounded-xl shadow-md">
                <div className="relative w-24 text-center rounded-lg shadow-md overflow-hidden bg-[#525fe1] text-white">
                    <div className="text-2xl font-bold p-3">{upcomingBatch?.startingDate?.split('-')[2]}</div>
                    <div className="bg-white text-[#666] text-sm font-medium py-2">{`${dateMonthConverter(upcomingBatch?.startingDate)} ${upcomingBatch?.startingDate?.split('-')[0]}`}</div>
                </div>
                <div className="flex-1">
                    <h3 className="text-xl font-semibold text-center md:text-start text-[#1E1A42] mb-2">{upcomingBatch?.batch}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                            <FaClock className="text-[#525fe1]" />
                            {upcomingBatch?.timing}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-[#525fe1]" />
                            {upcomingBatch?.type}
                        </div>
                        <div className="flex items-center gap-1">
                            <FaCalendarAlt className="text-[#525fe1]" />
                            {upcomingBatch?.classDays}
                        </div>
                    </div>
                </div>
                <SmallButton onClick={() => setEnrollModalOpen(true)} text="Enroll Now" />
            </div>
            <div className="flex mt-20 flex-col items-center gap-10 text-[#4a4a4a]">
                <h1 className="text-3xl md:text-5xl urbanist_bold text-gray-900">Course <span className="text-[#525fe1] urbanist_bold">Overview</span></h1>
                <p className="text-base md:text-lg leading-relaxed font-semibold w-[90vw] max-w-6xl">{course?.courseInfo}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center text-white gap-8 mt-10 md:mt-20">
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><BsGraphUpArrow size={48} /></p>
                    <p className="text-center">Comprehensive Training</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><LiaLaptopCodeSolid size={54} /></p>
                    <p className="text-center">Real-World Project Experience</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><TbCertificate size={48} /></p>
                    <p className="text-center">Industry-Recognized Certification</p>
                </div>
                <div className='flex group flex-col items-center justify-between shadow-md shadow-gray-600 bg-[#525fe1] gap-5 w-[80vw] sm:max-w-64 md:h-42 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg duration-300'>
                    <p className="font-semibold"><GiStairsGoal size={48} /></p>
                    <p className="text-center">Empowering Career Growth & Success</p>
                </div>
            </div>
            <h1 className="text-3xl md:text-5xl text-center mt-24 urbanist_bold text-gray-900">Course <span className="text-[#525fe1] urbanist_bold">Curriculum</span></h1>
            <div ref={sectionRef} className="bg-white mb-20 shadow-lg w-[95vw] max-w-6xl mx-auto mt-10 md:mt-14 text-white p-6 rounded-lg space-y-6">
                <div className="hidden md:grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-4">
                        {curriculum.map((item, index) => (
                            <div key={index} onClick={() => { setSelectedIndex(index); scrollToSection() }} className={`cursor-pointer shadow-md rounded-md p-4 border ${index === selectedIndex ? "bg-gray-200 border-gray-600" : "border-transparent hover:bg-gray-100"}`}>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <p className="text-[#525fe1] font-semibold">{(index + 1) < 10 ? `0${index + 1}` : `${index + 1}`}</p>
                                        <h4 className={`${index === selectedIndex ? "font-bold" : "font-semibold"} text-zinc-800`}>{item?.topic}</h4>
                                    </div>
                                    <FaChevronRight className={`${index === selectedIndex ? "font-bold text-zinc-800" : "font-semibold text-zinc-400"}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gray-100 shadow-md rounded-md p-6 overflow-auto">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-semibold text-lg text-zinc-800 ">Topic</h3>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-zinc-600 font-semibold text-sm md:text-base">
                            {curriculum[selectedIndex]?.subTopic?.length ? (
                                curriculum[selectedIndex]?.subTopic.map((topic, i) => (
                                    <li key={i}>{topic}</li>
                                ))
                            ) : (<li>Topic details not available.</li>)}
                        </ul>
                    </div>
                </div>
                <div className="md:hidden space-y-4">
                    {curriculum.map((item, index) => (
                        <div key={index} className="border  border-gray-700 rounded-md overflow-hidden">
                            <div onClick={() => toggleAccordion(index)} className="flex justify-between items-start p-4 cursor-pointer">
                                <div>
                                    <p className="text-[#525fe1] font-semibold text-sm">{index < 10 ? `0${index + 1}` : `${index + 1}`}</p>
                                    <h4 className="font-semibold text-zinc-800">{item?.topic}</h4>
                                </div>
                                <FaChevronDown className={`mt-1 text-zinc-800 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
                            </div>
                            {openIndex === index && (
                                <div className="bg-gray-100 p-4 border-t border-gray-700">
                                    <ul className="list-disc pl-5 text-zinc-700 space-y-2 text-sm">
                                        {curriculum[selectedIndex]?.subTopic?.length ? (
                                            curriculum[selectedIndex]?.subTopic.map((topic, i) => <li key={i}>{topic}</li>)
                                        ) : (<li>Topic details not available.</li>)}
                                    </ul>
                                </div>)}
                        </div>
                    ))}
                </div>
            </div>
            <SelfPacedLearning />
            {isEnrollModalOpen && <EnrollNowModal onClose={() => setEnrollModalOpen(false)} />}
        </section >
    )
}

export default Course
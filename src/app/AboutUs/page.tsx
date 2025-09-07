'use client';
import SelfPacedLearning from "@/components/SelfPacedLearning";
import TestimonialCard from "@/components/TestimonialCard";
import { useAppData } from "@/constant/landingPageData";
import { useStore } from "@/store/store";
import Image from "next/image";
import { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaStarSolid } from "react-icons/lia";

export default function AboutUs() {
    const { trainingInfo, getTrainingInfo, aboutUs, getAboutUs, whoWeAre, getWhoWeAre, whyChooseUs, getWhyChooseUs, shapingSuccess, getShapingSuccess } = useStore();

    type IconKey = keyof typeof iconMap;
    type Icon = keyof typeof icon;

    const { aboutInfoArray, studentData, whyChooseUsArray, iconMap, icon, aboutCards } = useAppData();

    useEffect(() => {
        getTrainingInfo();
        getAboutUs();
        getWhoWeAre();
        getWhyChooseUs();
        getShapingSuccess();
    }, [getTrainingInfo, getAboutUs, getWhoWeAre, getWhyChooseUs, getShapingSuccess]);

    return (
        <>
            <div className="sm:h-56 h-36 w-full bg-[url(/aboutUsBanner.jpg)] bg-cover bg-no-repeat">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>About Us</h1>
            </div>
            <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto mt-10 lg:mt-16 md:text-xl'>WHO WE ARE</h3>
            <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>About <span className='text-[#525fe1] urbanist_bold'>{trainingInfo?.abbv ? (trainingInfo?.abbv) : (trainingInfo?.instituteName)}</span></h1>
            <section className='py-10 mt-5 flex flex-col lg:flex-row items-center lg:justify-center lg:gap-10 xl:gap-15 gap-5'>
                <Image src={whoWeAre?.image || '/about-image-09.jpg'} alt='About Image' height={340} width={290} className='mx-auto lg:mx-0 rounded-t-full lg:h-[595px] lg:w-[363px] xl:h-[555px] xl:w-[463px] object-cover' />
                <div className='px-4'>
                    <div className='flex flex-col lg:grid lg:grid-cols-2 lg:gap-y-3 lg:w-fit items-center gap-5 text-zinc-600 mt-8 lg:mt-0'>
                        {((whoWeAre?.aboutCards)?.length === 0 ? aboutCards : whoWeAre?.aboutCards)?.map((card, i: number) => (
                            <div key={i} className={`p-3 rounded-xl lg:h-44 lg:max-w-[260px] shadow-sm ${card?.bg}`}>
                                <span className='flex items-center gap-3'>
                                    <span className={`p-1 rounded-md ${card.color} text-white`}>{iconMap[card?.icon as IconKey]}</span>
                                    <h5 className='font-semibold text-xl text-black'>{card?.title}</h5>
                                </span>
                                <p className='mt-5 text-sm'>{card?.desc}</p>

                            </div>
                        ))}
                    </div>
                    <ul className='list-none mt-10 flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-38 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold mb-10'>
                        {(whoWeAre?.aboutList ?? ['Flexible training programs', 'Learn from approved experts', 'Friendly environment for you', 'Boost your knowledge']).map((detail, index) => (
                            <li key={index} className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">{detail}</li>))}
                    </ul>
                    <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
                        <div className='flex items-center gap-4 mt-6 sm:mt-0 font-semibold'><span className='p-4 rounded-full bg-[#525fe1]/40'><FaPhoneAlt className='text-[#525fe1]' /></span><span className='text-lg hover:text-[#525fe1] duration-200 cursor-pointer'>{trainingInfo?.phone}</span></div>
                    </div>
                </div>
            </section>
            <section className='px-5 py-20 items-center flex flex-col-reverse lg:flex-row lg:gap-0 lg:justify-center gap-10 w-full'>
                <div className='flex flex-col sm:flex-row flex-wrap mx-auto lg:mx-0 max-w-[536px] lg:w-auto sm:justify-center lg:justify-start items-center gap-6'>
                    {
                        (aboutUs?.AboutUs ?? aboutInfoArray).map((info, index) => (
                            <div key={index} className='p-5 bg-white sm:w-52 flex flex-col gap-2 shadow-md items-center border border-[#525fe1] w-[90vw] rounded-2xl'>
                                <p className='text-4xl sm:text-5xl urbanist_bold text-[#525fe1]'>{info?.title}</p>
                                <p className='font-semibold'>{info?.desc}</p>
                            </div>
                        ))}
                </div>
                <TestimonialCard />
            </section>
            <section className='px-5 py-15'>
                <h3 className='text-[#7079df] w-fit urbanist_bold mx-auto md:text-xl'>OUR SERVICES</h3>
                <h1 style={{ fontFamily: 'Urbanist-bold' }} className='text-3xl text-center md:text-4xl mt-3 w-fit mx-auto'>Why Choose <span className='urbanist_bold text-[#525fe1]'>us?</span></h1>
                <div className='flex flex-col sm:flex-row items-center sm:flex-wrap sm:justify-center gap-8 mt-10'>
                    {
                        (whyChooseUs?.whyChooseUsArray ?? whyChooseUsArray ?? []).map((item, index) => (
                            <div key={index} className='flex group flex-col items-center shadow-md hover:shadow-lg gap-5 w-[80vw] sm:max-w-64 py-6 px-3.5 mx-auto sm:mx-0 rounded-lg bg-white/40 hover:bg-[#525fe1] duration-300'>
                                <span className='text-[#525fe1] group-hover:text-white text-5xl'>{icon[item.symbol as Icon]}</span>
                                <h3 className='text-center text-lg group-hover:text-white font-semibold text-zinc-800'>{item?.title}</h3>
                                <p className='text-center group-hover:text-white text-zinc-700'>{item?.desc}</p>
                            </div>
                        ))}
                </div>
            </section>
            <section className='bg-gradient-to-r mb-10 py-15'>
                <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto md:text-xl'>SHAPING SUCCESS</h3>
                <h1 className='text-3xl urbanist_bold text-center md:text-4xl mt-3 w-fit mx-auto'>Student <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Testimonials</span></h1>
                <div className='flex flex-col items-center lg:px-10 lg:flex-row-reverse lg:items-start lg:justify-center lg:gap-10 xl:gap-16 lg:mt-14'>
                    <div className='px-4 lg:px-0 my-8 lg:my-4'>
                        <p className='text-zinc-600 font-semibold'>{shapingSuccess?.shapingSuccessText}</p>
                        <ul className='list-none my-6 text-zinc-600 flex w-fit flex-col sm:grid sm:grid-cols-2 sm:gap-x-28 sm:gap-y-5 lg:gap-x-8 gap-5 font-semibold'>
                            {shapingSuccess?.shapingSuccessArray.map((detail, index) => (
                                <li key={index} className="relative pl-10 before:content-['✔'] before:absolute before:left-0 before:top-1 before:bg-[#525fe1] before:text-white before:rounded-full before:w-5 before:h-5 before:flex before:items-center before:justify-center before:text-xs">{detail}</li>
                            ))}
                        </ul>
                    </div>
                    {studentData.map((testimonial, index) => (
                        <div key={index} className='flex flex-col items-start gap-5 bg-white shadow-lg p-8 lg:max-w-[574px] rounded-md w-[90vw]'>
                            <div className='flex items-center gap-1 text-yellow-400 text-lg'>
                                {[...Array(5)].map((_, index) => (<LiaStarSolid key={index} />))}
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
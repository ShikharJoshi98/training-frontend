import SelfPacedLearning from "@/components/SelfPacedLearning";
import { blogArray } from "@/constant/landingPageData";
import Link from "next/link";
import { FaArrowRight, FaCalendar } from "react-icons/fa";

export default function Blog() {
    return (
        <>
            <div className="sm:h-56 h-36 w-full bg-[url(/blogbanner.jpg)] bg-cover bg-no-repeat">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>Tech Insights & Innovation</h1>
            </div>
            <section className='py-15'>
                <h3 className='text-[#7079df] urbanist_bold w-fit mx-auto md:text-xl'>Always Smart to Read Blogs</h3>
                <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Latest <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Blogs</span></h1>
                <div className='mt-12 flex flex-col md:flex-row max-w-7xl mx-auto flex-wrap md:justify-center md:items-center md:px-10 gap-6'>
                    {blogArray.map((blog, index) => (
                        <div key={index} className='bg-white w-[90vw] max-w-91 p-4 flex flex-col justify-between md:h-48 mx-auto md:mx-0 rounded-lg shadow-md shadow-gray-500'>
                            <h3 className='urbanist_bold text-xl cursor-pointer hover:text-[#525fe1] duration-300'>{blog.title}</h3>
                            <div className='flex items-center mt-5 justify-between'>
                                <p className='flex items-center gap-2 text-sm'><FaCalendar className='text-[#525fe1]' />{blog.date}</p>
                                <Link href={`/BlogDetail/${(blog.title).replace(/\s+/g, "-")}`} className="relative group w-fit text-sm sm:text-base cursor-pointer duration-300 text-[#525fe1] flex items-center gap-1 font-semibold rounded-lg">
                                    Read More <FaArrowRight />
                                    <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#525fe1] transition-all duration-300 group-hover:w-[80%]"></span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <SelfPacedLearning />
        </>
    )
}
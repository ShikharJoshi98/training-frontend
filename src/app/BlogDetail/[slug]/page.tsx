'use client'
import SelfPacedLearning from "@/components/SelfPacedLearning";
import { useStore } from "@/store/store";
import { dateConverter } from "@/utils/dateConverter";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { FaCalendar } from "react-icons/fa";

const BlogDetail = () => {
    const { blog, getBlog } = useStore();
    const params = useParams();
    const id = typeof params.slug === "string" ? params.slug : "";

    useEffect(() => {
        getBlog(id);
    }, [getBlog]);

    return (
        <div>
            <div className="sm:h-44 h-36 w-full bg-[#0a2342]">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>Blog Details</h1>
            </div>
            <h1 className="text-4xl md:text-5xl text-zinc-700 text-center urbanist_bold px-5 lg:px-0 py-10">{blog?.heading}</h1>
            <div className="flex items-center gap-4 justify-center">
                <p className="text-indigo-500 text-xs sm:text-sm">Education</p>
                <p className='flex border-l-1 pl-3 text-xs sm:text-sm items-center gap-2'><FaCalendar className='text-[#525fe1]' />{dateConverter(blog?.date)}</p>
            </div>
            <div className="bg-white rounded-xl my-10 shadow-md p-6 sm:p-10 border-t-4 border-[#525fe1] w-[90vw] max-w-4xl mx-auto text-center relative">
                <p className="text-[#525fe1] text-lg sm:text-xl leading-relaxed">
                    {`“ ${blog?.tagline} ”`}
                </p>
                <span className="absolute bottom-0 right-1 text-[#e0e7ff] text-7xl font-serif select-none">
                    &#10078;
                </span>
            </div>
            <section className="bg-white max-w-6xl px-6 py-12 my-10 sm:px-12 mx-auto">
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                    <p className="whitespace-pre-line">{blog?.desc}</p>
                </div>
            </section>
            <SelfPacedLearning />
        </div>
    )
}

export default BlogDetail

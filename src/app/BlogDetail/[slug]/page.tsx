'use client'
import SelfPacedLearning from "@/components/SelfPacedLearning";
import { useParams } from "next/navigation";
import { FaCalendar } from "react-icons/fa";

const BlogDetail = () => {
    const params = useParams();
    const heading = typeof params.slug === "string" ? params.slug : "";

    return (
        <div>
            <div className="sm:h-44 h-36 w-full bg-[#0a2342]">
                <h1 className='text-3xl max-w-6xl mx-auto text-white md:text-5xl p-14 urbanist_bold'>Blog Details</h1>
            </div>
            <h1 className="text-4xl md:text-5xl text-zinc-700 text-center urbanist_bold px-5 lg:px-0 py-10">{heading.replace(/-/g, " ")}</h1>
            <div className="flex items-center gap-4 justify-center">
                <p className="text-indigo-500 text-xs sm:text-sm">Education</p>
                <p className='flex border-l-1 pl-3 text-xs sm:text-sm items-center gap-2'><FaCalendar className='text-[#525fe1]' />28 July 2025</p>
            </div>
            <div className="bg-white rounded-xl my-10 shadow-md p-6 sm:p-10 border-t-4 border-[#525fe1] w-[90vw] max-w-4xl mx-auto text-center relative">
                <p className="text-[#525fe1] text-lg sm:text-xl leading-relaxed">
                    “ Time management is the backbone of successful exam preparation. Start by allocating specific hours each day for practice and revision.
                    Focus more on weaker areas, and remember to take breaks to avoid burnout. Small consistent efforts lead to great results. ”
                </p>
                <span className="absolute bottom-0 right-1 text-[#e0e7ff] text-7xl font-serif select-none">
                    &#10078;
                </span>
            </div>
            <section className="bg-white max-w-6xl px-6 py-12 my-10 sm:px-12 mx-auto">
                <div className="space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
                    <p>
                        Exams are rarely just a test of knowledge — they are a test of your consistency, discipline, and ability to manage time effectively. No matter how vast your syllabus is or how difficult a subject feels, the one skill that can make all the difference is <strong>time management</strong>.
                    </p>

                    <h2 className="font-semibold text-[#1e1e2f] text-xl">📅 Step 1: Structure Your Day</h2>
                    <p>
                        Design a simple daily schedule. Assign blocks of time to subjects, practice sessions, and revisions. Don’t overload your schedule — keep it realistic so you can stick to it.
                    </p>

                    <h2 className="font-semibold text-[#1e1e2f] text-xl">🎯 Step 2: Prioritize Weak Areas</h2>
                    <p>
                        It’s easy to revise what you already know, but improvement comes from facing the tough topics. Identify your weak areas and give them more attention early in the prep cycle.
                    </p>

                    <h2 className="font-semibold text-[#1e1e2f] text-xl">🌿 Step 3: Avoid Burnout</h2>
                    <p>
                        It’s tempting to go all-in with 10-hour study marathons. But breaks matter. Short, mindful breaks help your brain reset and retain information more effectively.
                    </p>

                    <h2 className="font-semibold text-[#1e1e2f] text-xl">🧱 Step 4: Trust the Process</h2>
                    <p>
                        The biggest myth is that success comes from last-minute genius. In reality, it’s built slowly — hour by hour, day by day. Even if progress feels small, it adds up.
                    </p>

                    <p className="text-[#1e1e2f] font-medium mt-6">
                        💡 <strong>Final Thought:</strong> If you’re preparing for placements, board exams, or competitive tests, remember: <em>your ability to manage time well is just as important as the subjects you study.</em>
                    </p>

                    <p><strong>Plan smart. Start early. Stay consistent.</strong></p>
                </div>
            </section>
            <SelfPacedLearning />
        </div>
    )
}

export default BlogDetail

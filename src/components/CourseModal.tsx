import Image from "next/image"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx"

const courses = [
    { title: 'Programming and FrameWorks', products: [{ title: 'Java Full Stack Development', image: '/java.svg' }, { title: 'Mern Stack Development', image: '/mernstack.svg' }, { title: 'Python Full Stack Web Development', image: '/Python-Web.svg' }, { title: 'Mean Stack Development', image: '/meanstack.svg' }] },
    { title: 'Software Testing', products: [{ title: 'Selenium Testing Complete Training', image: '/selenium.svg' }, { title: 'Mobile App Testing Using Appium', image: '/appium.svg' }, { title: 'Automation Testing Complete Training', image: '/AutomationTesting.svg' }] },
    { title: 'Frontend Development', products: [{ title: 'Web Developer Complete Program', image: '/Web-Development.svg' }, { title: 'React Js Complete Course', image: '/reactsvg.svg' }, { title: 'Angular Complete Course', image: '/angularsvg.svg' }, { title: 'HCJ (HTML CSS and JS) Complete Course', image: '/HCJ.svg' }] },
    { title: 'Database', products: [{ title: 'DBMS & RDBMS Complete Course', image: '/DBMS-RDBMS.svg' }, { title: 'Mongo DB Certification Training', image: '/mongosvg.svg' }, { title: 'Microsoft SQL Server Certification Training', image: '/microsoft-sql-server.svg' }, { title: 'MYSQL Certification Training', image: '/mysql.svg' }, { title: 'PostgreSQL Certification Training', image: '/postgresql.svg' }, { title: 'Oracle DB Complete Course', image: '/oracle-corporation-logo.svg' }] },
    { title: 'Data Structure', products: [{ title: 'Data Structure and Algorithm Complete Course', image: '/Data-Structure-and-Algorithm.svg' }, { title: 'Data Structure Using Java', image: '/datastructureinjava.png' }, { title: 'Data Structure Using Python', image: '/datastructureinpython.png' }, { title: 'Data Structure Using C', image: '/datastructureinc.png' }] },
];
const CourseModal = ({ onClose }: any) => {
    const [selectCourse, setSelectedCourse] = useState(courses[0]);
    return (
        <div className="bg-black/50 z-60 fixed inset-0 flex items-center justify-center p-2">
            <div className="bg-[#525fe1] max-h-[100vh] h-[99vh] max-w-[95vw] overflow-y-auto flex flex-col w-full rounded-xl p-4 shadow-lg">
                <button onClick={onClose} className="place-self-end cursor-pointer transition-all duration-300 text-white hover:bg-red-500 rounded-md p-1"><RxCross2 size={24} /></button>
                <h1 className='text-3xl text-center text-white urbanist_bold md:text-4xl w-fit mb-10 mx-auto'>Course Categories</h1>
                <div className="flex md:flex-row flex-col gap-3 md:gap-0 md:justify-center h-[90%]">
                    <div className="md:w-[28%] w-full bg-[#e9ecef] overflow-x-auto p-4 flex flex-col gap-2 rounded-md md:rounded-r-none md:rounded-l-md">
                        <h3 className="urbanist_bold text-xl text-zinc-800  flex items-center gap-1">Select Course<BiChevronDown /></h3>
                        {courses.map((course, index) => (
                            <div key={index} onClick={() => setSelectedCourse(course)} className={`hover:bg-gray-400/10 ${selectCourse === course ? 'bg-gray-400/20' : ''} p-2 rounded-md cursor-pointer`}>
                                <p className="font-semibold text-zinc-700 text-lg">{course.title}</p>
                            </div>
                        ))
                        }
                    </div>
                    <div className="bg-white w-full md:w-[72%] flex flex-wrap gap-4 overflow-x-auto p-4 rounded-md md:rounded-l-none md:rounded-r-md">
                        {selectCourse.products.map((product, index) => (
                            <div key={index} className="p-2.5 shadow-md shadow-gray-300 cursor-pointer group hover:bg-gray-100 duration-300 w-[180px] h-[180px] min-h-48 flex flex-col items-center gap-3 rounded-md">
                                <div className="p-4 rounded-full group-hover:bg-white bg-gray-100">
                                    <Image src={product.image} alt={product.title} height={60} width={60} />
                                </div>
                                <p className="text-center font-semibold text-zinc-800">{product.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseModal
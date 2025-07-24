'use client'
import Button from "@/components/Button";
import SelfPacedLearning from "@/components/SelfPacedLearning";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const latestTutorials = [{ title: 'CORE JAVA', image: "/java.svg" }, { title: 'JAVASCRIPT', image: "/javascript-svgrepo-com.svg" }, { title: 'MYSQL', image: "/mysql.svg" }, { title: 'SELENIUM', image: "/selenium.svg" }, { title: 'DATA STRUCTURE USING JAVA', image: "/datastructureinjava.png" }]

const Tutorial = () => {
  const tutorialRef = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-[#f5fbfe] rounded-lg">
      <div className="py-16 px-4 md:px-20 max-w-7xl mx-auto flex flex-col md:items-start items-center gap-2">
        <div className="text-center space-y-2 md:text-left">
          <p className="text-indigo-500 font-semibold text-lg">Knowledge at Your Fingertips</p>
          <h1 className="text-4xl md:text-5xl urbanist_bold mb-8 text-[#1c1c32] leading-tight">Explore our Extensive Range of Engaging Tutorials</h1>
        </div>
        <Button onClick={() => tutorialRef.current?.scrollIntoView({ behavior: 'smooth' })} text="Explore Our Featured Tutorials" />
      </div>
      <div ref={tutorialRef} className="py-10 max-w-7xl mx-auto">
        <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Latest <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Tutorials</span></h1>
        <div className="flex flex-row flex-wrap gap-4 px-16 mt-10 md:mt-14">
          {latestTutorials.map((tutorial, index) => (
            <Link href={`/TutorialDetail/${tutorial.title.replace(/\s+/g, '-')}`} key={index} className="p-2.5 shadow-md mx-auto sm:mx-0 shadow-blue-300 hover:shadow-gray-100 bg-white cursor-pointer duration-300 w-[180px] h-[180px] min-h-48 flex flex-col items-center gap-3 rounded-3xl">
              <div className="p-4">
                <Image src={tutorial.image} alt="Java logo" height={60} width={60} />
              </div>
              <p className="text-center font-semibold text-zinc-800">{tutorial.title}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-10 max-w-7xl mx-auto">
        <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Programming And <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Frameworks</span></h1>
        <div className="flex flex-row flex-wrap gap-4 px-16 mt-10 md:mt-14">
          {latestTutorials.map((tutorial, index) => (
            <div key={index} className="p-2.5 shadow-md mx-auto sm:mx-0 shadow-blue-300 hover:shadow-gray-100 bg-white cursor-pointer duration-300 w-[180px] h-[180px] min-h-48 flex flex-col items-center gap-3 rounded-3xl">
              <div className="p-4">
                <Image src={tutorial.image} alt="Java logo" height={60} width={60} />
              </div>
              <p className="text-center font-semibold text-zinc-800">{tutorial.title}</p>
            </div>
          ))}
        </div>
      </div>
      <SelfPacedLearning />
    </section>
  )
}

export default Tutorial
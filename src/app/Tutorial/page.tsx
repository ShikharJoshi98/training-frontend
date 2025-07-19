import Button from "@/components/Button";
import SelfPacedLearning from "@/components/SelfPacedLearning";
import Image from "next/image";



export default function Tutorial() {
  return (
    <section className="bg-[#f5fbfe] rounded-lg">
      <div className="py-16 px-4 md:px-20 flex flex-col md:items-start items-center gap-2">
        <div className="text-center space-y-2 md:text-left">
          <p className="text-indigo-500 font-semibold text-lg">Knowledge at Your Fingertips</p>
          <h1 className="text-4xl md:text-5xl urbanist_bold mb-8 text-[#1c1c32] leading-tight">Explore our Extensive Range of Engaging Tutorials</h1>
        </div>
        <Button text="Explore Our Featured Tutorials" />
      </div>
      <div className="py-10">
        <h1 className='text-3xl text-center urbanist_bold md:text-4xl mt-3 w-fit mx-auto'>Latest <span style={{ fontFamily: 'Urbanist-bold' }} className='text-[#525fe1]'>Tutorials</span></h1>
        <div>
          <div className="p-2.5 shadow-md shadow-blue-300 hover:shadow-gray-100 bg-white cursor-pointer duration-300 w-[180px] h-[180px] min-h-48 flex flex-col items-center gap-3 rounded-md">
            <div className="p-4">
              <Image src="/java.svg" alt="Java logo" height={60} width={60} />
            </div>
            <p className="text-center font-semibold text-zinc-800">Core Java</p>
          </div>
        </div>
      </div>
      <SelfPacedLearning />
    </section>
  )
}
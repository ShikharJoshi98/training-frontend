'use client'
import { RxCross2 } from "react-icons/rx";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Input from "./Input";
import { useStore } from "@/store/store";
import { FaCircleCheck } from "react-icons/fa6";

type ModalProps = {
    onClose: () => void;
};

const EnrollNowModal = ({ onClose }: ModalProps) => {
    const { addStudentEnquiry, course, getCourse } = useStore();
    const params = useParams();
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const id = typeof params.id === "string" ? params.id : "";
    const [submit, setSubmit] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getCourse(id);
    }, [getCourse]);

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
                type: "enrollment",
                enquiryAbout: course?.course
            });

            setName('');
            setContact('');
            setSubmit(true);
            setError("");
        } catch (error) {
            console.error((error as Error).message);
        }
    }

    return (
        <div className="bg-black/50 z-60 fixed inset-0 flex items-center justify-center p-2">
            <div className="bg-white overflow-x-hidden max-h-[90vh] max-w-[90vw] md:max-w-[50vw] lg:max-w-[45vw] overflow-y-auto flex flex-col w-full rounded-xl p-6 md:p-10 shadow-lg">
                <button onClick={onClose} className="place-self-end cursor-pointer transition-all duration-300 hover:text-white hover:bg-red-500 rounded-md p-1"><RxCross2 size={24} /></button>
                <h1 className='text-2xl urbanist_bold text-center'>Enroll Now: Secure Your Spot!</h1>
                <div className="bg-gray-200 mt-10 text-center text-black p-2 rounded-md"><h1>{course?.course}</h1></div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-5'>
                    <Input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} placeholder='Name' />
                    <Input type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} value={contact} placeholder='Mobile Number' />
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' id='terms-and-conditions' className='size-4' checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)} /><label htmlFor='terms-and-conditions' className='cursor-pointer'>I have reviewed all <span className='text-[#525fe1] urbanist_bold'>Terms and Conditions.</span></label>
                    </div>
                    <button className='bg-[#525fe1] urbanist_bold text-lg py-3 px-8 cursor-pointer hover:bg-[#4753dc] duration-300 rounded-md text-white w-fit mx-auto'>Enroll</button>
                </form>
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
            </div>
        </div>
    )
}

export default EnrollNowModal
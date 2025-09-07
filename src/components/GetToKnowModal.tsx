'use client'
import React, { useEffect, useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Input from './Input';
import SearchSelect from './SearchSelect';
import { trainingProgram } from '../constant/courses';
import { useStore } from '../store/store';
import { FaCircleCheck } from 'react-icons/fa6';

type ModalProps = {
    onClose: () => void;
};

const GetToKnowModal = ({ onClose }: ModalProps) => {
    const { addStudentEnquiry, courses, getCourses } = useStore();
    const [name, setName] = useState<string>('');
    const [contact, setContact] = useState<string>('');
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [submit, setSubmit] = useState(false);
    const [termsChecked, setTermsChecked] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getCourses();
    }, [getCourses]);

    const programs = courses.map((course, _) => course?.course);

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
                enquiryAbout: selectedOption
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
            <div className="bg-white overflow-x-hidden max-h-[90vh] max-w-[90vw] md:max-w-[50vw] lg:max-w-[35vw] overflow-y-auto flex flex-col w-full rounded-xl p-6 md:p-10 shadow-lg">
                <button
                    onClick={onClose}
                    className="place-self-end cursor-pointer transition-all duration-300 hover:text-white hover:bg-red-500 rounded-md p-1">
                    <RxCross2 size={24} />
                </button>
                <h1 className='underline underline-offset-8 decoration-indigo-500 text-4xl urbanist_bold text-center'>Get in Touch</h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
                    <Input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} placeholder='Name' />
                    <Input type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} value={contact} placeholder='Mobile Number' />
                    <SearchSelect options={programs} setSelectedOption={setSelectedOption} />

                    <div className='flex items-center gap-2'>
                        <input
                            type='checkbox'
                            id='terms-and-conditions'
                            className='size-4'
                            checked={termsChecked}
                            onChange={(e) => setTermsChecked(e.target.checked)}
                        />
                        <label htmlFor='terms-and-conditions' className='cursor-pointer'>
                            I have reviewed all <span className='text-[#525fe1] urbanist_bold'>Terms and Conditions.</span>
                        </label>
                    </div>

                    <button
                        className='bg-[#525fe1] urbanist_bold text-lg py-3 px-8 cursor-pointer hover:bg-[#4753dc] duration-300 rounded-md text-white w-fit mx-auto'>
                        Enquire Now
                    </button>
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

export default GetToKnowModal

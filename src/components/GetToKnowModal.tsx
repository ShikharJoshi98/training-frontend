'use client'
import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import Input from './Input';
import SearchSelect from './SearchSelect';
import { trainingProgram } from '../constant/courses';

type ModalProps = {
    onClose: () => void;
};

const GetToKnowModal = ({ onClose }: ModalProps) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [selectedOption, setSelectedOption] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(name, contact, selectedOption);
    }

    return (
        <div className="bg-black/50 z-60 fixed inset-0 flex items-center justify-center p-2">
            <div className="bg-white overflow-x-hidden max-h-[90vh] max-w-[90vw] md:max-w-[50vw] lg:max-w-[35vw] overflow-y-auto flex flex-col w-full rounded-xl p-6 md:p-10 shadow-lg">
                <button onClick={onClose} className="place-self-end cursor-pointer transition-all duration-300 hover:text-white hover:bg-red-500 rounded-md p-1"><RxCross2 size={24} /></button>
                <h1 className='underline underline-offset-8 decoration-indigo-500 text-4xl urbanist_bold text-center'>Get in Touch</h1>
                <form onSubmit={handleSubmit} className='flex flex-col gap-5 mt-10'>
                    <Input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name} placeholder='Name' />
                    <Input type='number' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)} value={contact} placeholder='Mobile Number' />
                    <SearchSelect options={trainingProgram} setSelectedOption={setSelectedOption} />
                    <div className='flex items-center gap-2'>
                        <input type='checkbox' id='terms-and-conditions' className='size-4' /><label htmlFor='terms-and-conditions' className='cursor-pointer'>I have reviewed all <span className='text-[#525fe1] urbanist_bold'>Terms and Conditions.</span></label>
                    </div>
                    <button className='bg-[#525fe1] urbanist_bold text-lg py-3 px-8 cursor-pointer hover:bg-[#4753dc] duration-300 rounded-md text-white w-fit mx-auto'>Enquire Now</button>
                </form>
            </div>
        </div>
    )
}

export default GetToKnowModal

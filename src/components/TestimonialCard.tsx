import { useStore } from "@/store/store";
import Image from "next/image";
import React, { useEffect } from "react";

export default function TestimonialCard() {
    const { testimonial, getTestimonials } = useStore();

    useEffect(() => {
        getTestimonials();
    }, [getTestimonials]);

    return (
        <div className="w-[90vw] flex flex-col gap-6 max-w-[536px] min-h-64 text-white bg-[#145aed] p-5 rounded-2xl">
            <div className="flex items-center gap-6">
                <Image src={testimonial[0]?.studentImage || '/user.png'} alt='testimonial image' height={4500} width={3000} className="rounded-full w-16 h-16 object-cover border border-white" />
                <h3 className="font-semibold text-2xl text-white">{testimonial[0]?.name}</h3>
            </div>
            <div className="sm:text-lg text-[#fffffe] font-semibold">
                {testimonial[0]?.oldJobRole} <span className="mx-2">➤➤➤</span> {testimonial[0]?.newJobRole}
            </div>
            <div className="italic text-[#fdfdfe] leading-relaxed">
                {`"${testimonial[0]?.testimonial}"`}
            </div>
        </div>
    );
}

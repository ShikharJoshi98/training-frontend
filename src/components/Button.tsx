import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    return (
        <button className="bg-[#525fe1] w-fit cursor-pointer hover:bg-[#27283e] duration-300 py-5 px-8 text-white flex items-center gap-3 font-semibold rounded-lg">{text}<FaArrowRight /></button>
    )
}
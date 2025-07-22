import { FaArrowRight } from "react-icons/fa";

type ButtonProps = {
    text: string;
    onClick?: () => void
}

export default function Button({ text, onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="bg-[#525fe1] w-fit cursor-pointer hover:bg-[#4753dc] duration-300 py-5 px-8 text-white flex items-center gap-3 font-semibold rounded-lg">{text}<FaArrowRight /></button>
    )
}
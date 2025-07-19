import { FaArrowRight } from "react-icons/fa";

type SmallButtonProps = {
    text: string;
}

export default function SmallButton({ text }: SmallButtonProps) {
    return (
        <button className="bg-[#525fe1] w-fit cursor-pointer text-sm sm:text-base hover:bg-[#4753dc] duration-300 py-3 px-5 text-white flex items-center gap-3 font-semibold rounded-lg">{text}<FaArrowRight /></button>
    )
}
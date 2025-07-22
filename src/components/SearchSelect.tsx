import { useEffect, useRef, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";

interface SearchSelectProps {
    options: string[],
    setSelectedOption: (value: string) => void
}

const SearchSelect = ({ options, setSelectedOption }: SearchSelectProps) => {
    const selectedRef = useRef<HTMLDivElement | null>(null);
    const [option, setOption] = useState<string>("");
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [active, setActive] = useState<boolean>(false);
    const filteredOptionArray = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));

    useEffect(() => {
        const closeHandler = (event: MouseEvent) => {
            if (selectedRef.current && !event.composedPath().includes(selectedRef.current)) {
                setActive(false);
            }
        }
        document.addEventListener('click', closeHandler);
        return () => {
            document.removeEventListener('click', closeHandler);
        }
    }, [selectedRef.current])

    return (
        <div ref={selectedRef} className='relative w-full'>
            <div onClick={() => setActive(prev => !prev)} className="bg-white w-full relative cursor-pointer flex items-center flex-wrap gap-1 py-2 px-3 min-h-10 rounded-lg border border-gray-400">
                <p>{option}</p>
                <IoIosArrowDown className="ml-auto shrink-0 cursor-pointer" />
            </div>
            {active && <div className='px-5 py-2 max-h-36 overflow-y-auto flex flex-col gap-2 bg-white rounded-md border border-gray-400'>
                <input placeholder="Search" onChange={(e) => setSearchTerm(e.target.value)} className='my-1 p-2 border-1 border-gray-300 rounded-lg focus:outline-none' />
                {
                    (searchTerm.length > 0 ? filteredOptionArray : options).map((option, index) => (
                        <p onClick={() => { setSelectedOption(option); setOption(option); setSearchTerm('') }} className="cursor-pointer hover:bg-gray-100 p-2 rounded-md " key={index}>{option}</p>
                    ))
                }
            </div>}
        </div>
    )
}

export default SearchSelect
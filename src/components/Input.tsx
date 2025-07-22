const Input = ({ ...props }) => {
    return (
        <div className='relative w-full'>
            <input {...props} className=' w-full bg-gray-100 h-10 pl-4 pr-3 py-2 font-normal  rounded-lg focus:outline-none focus:ring-2 focus:ring-[#525fe1] text-zinc-900 placeholder-zinc-500 transition duration-200' />
        </div>
    )
}

export default Input
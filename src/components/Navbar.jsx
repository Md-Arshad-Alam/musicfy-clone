import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-full flex justify-between items-center font-semibold p-2">
                <div className="flex items-center gap-2">
                    <img onClick={()=>navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
                    <img onClick={()=>navigate(1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <button className='  text-gray-400 hover:text-white py-2 px-4  text-[16px] cursor-pointer  rounded-full'>Sign Up</button>
                    <button className="bg-white text-black px-8 py-3 rounded-full text-[16px] hidden md:block cursor-pointer">Log In</button>
                    <p className="w-12 h-12 flex justify-center items-center bg-teal-500 text-black rounded-full">A</p>
                </div>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white  text-black px-4 py-1 rounded-full  cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-full rounded-full cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-full rounded-full cursor-pointer'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar

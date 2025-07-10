import { useEffect, useState } from "react";
import logo from '../assets/img/logo.png'
import { Link } from "react-router";
import { IoCart, IoHome } from "react-icons/io5";
import SideBar from "../components/SideBar";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [openSideBar, setOpenSideBar] = useState(false)

    // console.log(openSideBar);
    
    
    useEffect(() => {
        const handleScroll = () => {
        const scrollY = window.scrollY;
        setIsScrolled(scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <nav className={`w-full fixed top-0 h-16 flex items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/15 shadow-md backdrop-blur" : "bg-transparent"}`}>
        <div className="w-full container relative z-30 mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
                <img className="h-14" src={logo} alt="this is e-bazar logo" />
                <p className="text-2xl font-bold">- Bazar</p>
            </div>
            <ul className="flex gap-4">
                <li>
                    <Link to='/'>
                        <button className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300">
                            <IoHome className="text-2xl"/>
                            <span className="hidden md:block">Home</span>
                        </button>
                    </Link>
                </li>
                <li>
                    <button onClick={()=>setOpenSideBar(!openSideBar)} className="flex items-center cursor-pointer justify-center gap-2 bg-lime-400/20 text-lime-400 backdrop-blur py-2 px-4 rounded hover:bg-lime-400/5 transition-all duration-300">
                        <IoCart className="text-2xl"/>
                        <span className="hidden md:block">Cart</span>
                    </button>
                </li>
            </ul>
        </div>

        <div className={`absolute max-w-xl min-w-sm h-44 z-40 duration-300 transition-all right-0 ${openSideBar? "top-16 ": "-top-[500px]"}`}>
            <SideBar />
        </div>
    </nav>
    );
};

export default Navbar;
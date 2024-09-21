import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
    const {user}= useContext(AuthContext)
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const navLinks = <>
        <NavLink to="/"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Home</a></li></NavLink>
        <NavLink to="/about"><li><a className="hover:bg-[#ff3838cb] hover:text-white">About</a></li></NavLink>
        <NavLink to="/contact"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Contact</a></li></NavLink>
        {
            user?<NavLink to="/bookings"><li><a className="hover:bg-[#ff3838cb] hover:text-white">Bookings</a></li></NavLink>: ""
        }
    </>

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.error(error))
    }

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }
    return (
        <div className='navbar bg-base-100 shadow-sm container px-4 mx-auto'>
            <div className='flex-1'>
                <div className='flex items-center'>
                    <img className='w-auto h-10 text-primary' src='https://i.postimg.cc/L6bM4pSC/logo.png' alt='' />
                    <Link to='/'><span className="font-bold text-2xl ">o r k </span><sub className="text-lg text-[#000000a9] rancho font-bold">Nest</sub></Link>
                </div>
            </div>
            <div className='flex-none'>
                <ul className='menu menu-horizontal px-1'>
                    <li>
                        <div>Home</div>
                    </li>

                    {!user &&
                        <li>
                            <div>Login</div>
                        </li>
                    }
                </ul>

                {
                    user &&
                    <div className='dropdown dropdown-end z-50'>
                        <div
                            tabIndex={0}
                            role='button'
                            className='btn btn-ghost btn-circle avatar'
                        >
                            <div className='w-10 rounded-full' title=''>
                                <img
                                    referrerPolicy='no-referrer'
                                    alt='User Profile Photo'
                                    src=''
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                        >
                            <li>
                                <div className='justify-between'>Add Job</div>
                            </li>
                            <li>
                                <div>My Posted Jobs</div>
                            </li>
                            <li>
                                <div>My Bids</div>
                            </li>
                            <li>
                                <div>Bid Requests</div>
                            </li>
                            <li className='mt-2'>
                                <button className='bg-gray-200 block text-center'>Logout</button>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;
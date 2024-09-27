import { IoMdEyeOff } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser, user, setUser, updateUserProfile } = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
            Swal.fire({
                title: 'OOPS!',
                text: 'Password is week',
                icon: 'warning',
                confirmButtonText: 'Okay'
            })
            return
        }

        createUser(email, password)
            .then(result => {
                updateUserProfile(name, photoURL)
                    .then(res => {
                        setUser({ ...user, photoURL: photoURL, displayName: name })
                        console.log(res);
                        navigate('/')
                    })
                Swal.fire({
                    title: 'Congrats!',
                    text: 'Registered successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
                console.log(result.user)
            })
            .catch(error => console.log(error))


    }
    return (
        <div>
            <div className="container mx-auto flex flex-col-reverse gap-12 md:gap-0 md:flex-row justify-between items-center mb-16">
                <div className="md:w-1/2">
                    <img className=" mx-auto" src="https://i.postimg.cc/PJMJxF2d/bg1.jpg" />
                </div>
                <div className="w-1/3 mx-auto ">
                    <div className="hero md:min-h-96 w-full">
                        <div className="hero-content rounded-lg p-5 w-full">
                            <div className=" shrink-0 w-full bg-base-100">
                                <form onSubmit={handleSubmit} className="card-body ">
                                    <div>
                                        <h3 className="text-4xl text-[#444444] roboto font-semibold mb-6">Sign Up</h3>
                                        <div className="flex justify-start">
                                            <p>Already have an account?</p>
                                            <Link to="/login"><button className=" text-black hover:underline hover:underline-offset-4 hover:text-[#ff3838cb] px-4 py-2 rounded-full border-none font-bold">Login</button></Link>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" name="name" placeholder="Your Name" className="input bg-slate-100 mb-2"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input type="text" name="photoURL" placeholder="Your photo link" className="input bg-slate-100 mb-2"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name="email" placeholder="Email address" className="input bg-slate-100 mb-2"
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="relative ">
                                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input w-full bg-slate-100"
                                            />
                                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                                {
                                                    showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form-control mt-6 mb-4">
                                        <button className="btn text-white bg-blue-400 hover:bg-blue-200 border-none text-lg">Sign Up</button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
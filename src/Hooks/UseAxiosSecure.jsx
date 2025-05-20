import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})
const UseAxiosSecure = () => {
    const { logout } = UseAuth()
    const navigate = useNavigate()

    // interceptor
    axiosSecure.interceptors.response.use(res => {
        // console.log("response ashar agei ami jani ki ase er vitre");
        return res
    },
        async error => {
            console.log("error inside axios interceptor: ", error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                await logout()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )
    return axiosSecure
};

export default UseAxiosSecure;
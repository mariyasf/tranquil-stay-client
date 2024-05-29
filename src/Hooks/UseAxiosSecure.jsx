import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const UseAxiosSecure = () => {
    const { logout } = UseAuth()
    const navigate = useNavigate();

    axiosSecure.interceptors.response.use(
        res => {
            // console.log('response app e ashr age ami thamiye dekhechi ki ache er bitor', res)
            return res;
        },
        async err => {
            // console.log(err.response)
            if (err.response.status === 401 || err.response.status === 403) {
                await logout();
                navigate('/login')
            }

            return Promise.reject(err)
        }

    )

    // axios.interceptors.request

    return axiosSecure;
};

export default UseAxiosSecure;
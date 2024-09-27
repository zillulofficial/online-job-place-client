import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location= useLocation()
    if(loading){
        return <span className="loading loading-bars loading-lg text-[#1abc9c] text-center h-[500px] flex items-center mx-auto"></span>
    }
    if(!user){
        return <Navigate to="/login" state={location.pathname}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;
PrivateRoute.propTypes= {
    children: PropTypes.object
}
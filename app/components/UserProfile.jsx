import { useContext } from "react";
import { FaCog, FaMoneyCheckAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

function UserProfileSidebar() {
    const { user } = useContext(Context);
    return (
        <ul className="menu bg-base-100  items-start justify-start text-xl mt-20px h-screen userprofile">
            <li className='w-full'><Link to={`/profile`}><FaCog /> Profile</Link></li>
            <li className='w-full'><Link to={`/dashboard`}><FaCog /> Dashboard</Link></li>
            <li><Link to={`/records`}><FaMoneyCheckAlt /> Records</Link></li>
            <li><Link to={`/addPatient`}><FaUser /> AddPatient</Link></li>
            <li><Link to={`/getPatientFacialId`}><FaUser /> PatientFacialId</Link></li>
        </ul>
    )
}

export default UserProfileSidebar;

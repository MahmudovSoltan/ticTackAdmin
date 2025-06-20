import { use } from 'react'
import { routeList } from '../../../constants/Routes'
import './css/sidebar.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { CiLogout } from 'react-icons/ci'
const Sidebar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <div className="sidebar">
            <ul>
                {
                    routeList.map((route, index) => (
                        <li key={index} className={`sidebar-item ${location.pathname === route.path ? 'active' : ''}`}>
                            {route.name === "Not Found" ? (<span className='logout'>Çıxış<CiLogout size={24} /></span>) : (<span onClick={() => navigate(route.path)}>{route.name}</span>)}
                        </li>
                    ))}


            </ul>
        </div>
    )
}

export default Sidebar
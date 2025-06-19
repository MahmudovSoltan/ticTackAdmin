import { use } from 'react'
import { routeList } from '../../../constants/Routes'
import './css/sidebar.css'
import { useLocation } from 'react-router-dom'
const Sidebar = () => {
    const location = useLocation()
    console.log(`Current path: ${location.pathname}`);
    
    return (
        <div className="sidebar">
            <ul>
                {
                    routeList.map((route, index) => (
                        <li key={index} className={`sidebar-item ${location.pathname === route.path ? 'active' : ''}`}>
                            {route.name === "Not Found" ? (<span>Çıxış</span>) : (<span>{route.name}</span>)}
                        </li>
                    ))}


            </ul>
        </div>
    )
}

export default Sidebar
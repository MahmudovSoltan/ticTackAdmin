import { routeList } from '../../../constants/Routes'
import './css/sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                {
                    routeList.map((route, index) => (
                        <li key={index}>
                              {route.name}
                        </li>
                    ))}


            </ul>
        </div>
    )
}

export default Sidebar
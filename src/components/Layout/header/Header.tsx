
import Search from '../../../ui/search'
import Logo from '../../logo'
import './css/header.css'
const Header = () => {
    return (
        <div className="header container">
            <Logo />
            <Search />
        </div>
    )
}

export default Header
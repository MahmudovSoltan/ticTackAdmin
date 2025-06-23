import Header from '../../components/Layout/header/Header'
import Sidebar from '../../components/Layout/sidebar'
import UsersBody from '../../components/users/UsersBody'
import './css/users.css'
const Users = () => {
  return (
    <div className="">
      <Header />
      <div className="content container">
        <Sidebar />
        <UsersBody />
      </div>
    </div>
  )
}

export default Users
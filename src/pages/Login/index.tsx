import LoginLeft from '../../components/login/LoginLeft'
import LoginRight from '../../components/login/LoginRight'
import Logo from '../../components/logo'
import './css/login.css'
const Login = () => {
  return (
    <div className='container'>
      <Logo />
      <div className='login-wrapper'>
        <LoginLeft />
        <LoginRight />
      </div>
    </div>
  )
}

export default Login
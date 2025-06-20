import { useNavigate } from 'react-router-dom'
import image from '../../assets/images/f31b5bcda076125bf7010c781a457 1.svg'
import Button from '../../ui/button'
import './css/notfound.css'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className='not-found'>
      <img src={image} alt="404 Not Found" />
      <p className='not-found-text'>Səhifə tapılmadı, deyəsən bir problem baş verib!</p>
      <Button title='Geri qayıt' className='btn-back' style={{ width: "213px", marginTop: "50px" }} onClick={() => navigate(-1)} />
    </div>
  )
}
export default NotFound
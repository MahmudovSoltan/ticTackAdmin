import Loading from '../../components/loading';
import './css/button.css'
interface ButtonProps {
    // Define any props you want to pass to the Button component
    title: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?:boolean,
    loading?:boolean
}
const Button = ({ title, onClick, style, className, type ,disabled,loading}: ButtonProps) => {
    return (
        <button  disabled={disabled} className={`custom-button ${className}`}  onClick={onClick} style={style} type={type || "button"}>
                  {loading ? <Loading/>: title}
        </button>
    )
}

export default Button
import './css/button.css'
interface ButtonProps {
    // Define any props you want to pass to the Button component
    title: string;
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
    type?: "button" | "submit" | "reset";
}
const Button = ({ title, onClick, style, className, type }: ButtonProps) => {
    return (
        <button className={`custom-button ${className}`} onClick={onClick} style={style} type={type || "button"}>
            {title}
        </button>
    )
}

export default Button
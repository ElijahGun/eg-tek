import './button.scss';

export const Button = ({onClick, className, displayText}) => {
    return (
        <button className={ ` btn ${className ? className : ""}`} onClick={onClick}>{displayText}</button>
    )
}

export default Button;
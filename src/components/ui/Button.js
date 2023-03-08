import './ui.css'

const Button = (props) => {
    return (
        <button disabled={props.disabled} className='button-port2' onClick={() => {return props.onClick != null? props.onClick(): null}}>{props.children}</button>
    )
}

export default Button
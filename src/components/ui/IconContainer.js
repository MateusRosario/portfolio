import './ui.css'

const IconContainer = (props) => {
    var Icone = props.icon

    return (
        <div className='icon-container'>
            <Icone className='icon-comp' fill="var(--pri)"/>
        </div>
    )
}

export default IconContainer 
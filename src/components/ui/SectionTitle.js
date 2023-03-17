import './ui.css'

const SectionTitle = (props) => {
    return (
        <div className='sec-title-component'>
            <div>
                <h2 className="sec-title">{props.children}</h2>
                <hr className="sec-title-divider"/>
            </div>
        </div>
    )
}

export default SectionTitle
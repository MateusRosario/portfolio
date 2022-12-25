import './ui.css'

const SectionTitle = (props) => {
    return (
        <div>
            <h1 className="sec-title">{props.children}</h1>
            <hr className="sec-title-divider"/>
        </div>
    )
}

export default SectionTitle
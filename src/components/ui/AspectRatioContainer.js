const AspectRatioContainer = (props) => {
    return (
        <div className="ar-container">
            <div className="ar-dummy"></div>
            <div className="ar-children">{props.children}</div>
        </div>
    )
}

export default AspectRatioContainer
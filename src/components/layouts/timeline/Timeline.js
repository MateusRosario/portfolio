import SectionTitle from "../../ui/SectionTitle"
import './Timeline.css'

const TimelinePoint = (props) => {
    return (
        <div className="timeline-point-box">
            <div className="timeline-line"></div>
            <div className="timeline-point"></div>
            <div className="timeline-point-text">
                {props.children}
            </div>
        </div>
    )
}

const Timeline = (props) => {
    return (
        <div className="timeline-box">
            <h3 className="timeline-title">- {props.children}</h3>
            <TimelinePoint>Escola Caroline Campelo</TimelinePoint>
            <TimelinePoint>Escola Caroline Campelo</TimelinePoint>
        </div>
    )
}

export default Timeline;
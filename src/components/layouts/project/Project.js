import './Project.css'
import Button from '../../ui/Button'
import Slider from '../../ui/slider/Slider'
import IconContainer from '../../ui/IconContainer'
import { useState, useEffect } from 'react'
// import {ReactComponent as IconeJS} from '../../../assets/icons/javascript.svg'

const Project = (props) => {

    const openInNewTab = (url) => {
        if (url != null) {
            window.open(url, '_blank').focus();
        }
    }

    const [viewWidth, setViewWidth] = useState(() => window.innerWidth);

    useEffect(() => {
        const onResize = () => {
            setViewWidth(window.innerWidth);
        }

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    if (viewWidth <= 850) {
        return (
            <div className='project-box'>
                <div>
                    <h3>{props.project.getTitle(props.appData.language)}</h3>
                </div>
                <div className='presentation-box'>
                    <Slider images={props.project.images}></Slider>
                    <div className='presentation-icons'>
                        {props.project.icons.map((item, index) => {
                            return (<IconContainer key={index} icon={item} />)
                        })}
                    </div>
                </div>
                <div className="description-box">
                    <div className='proj-desc-content-box'>
                        <div className="description">
                            <p>{props.project.getDesc(props.appData.language)}</p>
                        </div>
                    </div>
                    <div className='action-box'>
                        {props.project.source != null ? <Button onClick={() => { openInNewTab(props.project.source) }}>Source Code</Button> : <></>}
                        {props.project.deployed != null ? <Button onClick={() => { openInNewTab(props.project.deployed) }}>Deployed</Button> : <></>}
                    </div>
                </div>
            </div>
        )
    } else {
        if (!props.invert) {
            return (
                <div className='project-box'>
                    <div className='presentation-box'>
                            <Slider images={props.project.images}></Slider>
                            <div className='presentation-icons'>
                                {props.project.icons.map((item, index) => {
                                    return (<IconContainer key={index} icon={item} />)
                                })}
                            </div>
                    </div>
                    <div className="description-box">
                        <div>
                            <h3>{props.project.getTitle(props.appData.language)}</h3>
                        </div>
                        <div className='proj-desc-content-box'>
                            <div className="description">
                                <div className='description-vertical-divider' />
                                <p>{props.project.getDesc(props.appData.language)}</p>
                            </div>
                        </div>
                        <div className='action-box'>
                            {props.project.source != null ? <Button onClick={() => { openInNewTab(props.project.source) }}>Source Code</Button> : <></>}
                            {props.project.deployed != null ? <Button onClick={() => { openInNewTab(props.project.deployed) }}>Deployed</Button> : <></>}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='project-box'>
                    <div className="description-box">
                        <div className='title-desc-box-invert'>
                            <h3>{props.project.getTitle(props.appData.language)}</h3>
                        </div>
                        <div className='proj-desc-content-box'>
                            <div className="description-invert">
                                <p>{props.project.getDesc(props.appData.language)}</p>
                                <div className='description-vertical-divider' />
                            </div>
                        </div>
                        <div className='action-box'>
                            <Button>Source Code</Button>
                            <Button>Deployed</Button>
                        </div>
                    </div>
                    <div className='presentation-box'>
                        <Slider images={props.project.images}></Slider>
                        <div className='presentation-icons-invert'>
                            {props.project.icons.map((item, index) => {
                                return (<IconContainer key={index} icon={item} />)
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Project
import './Project.css'
import Button from '../../ui/Button'
import Slider from '../../ui/slider/Slider'
import LinkedIcon from '../../ui/linkedIcon/LinkedIcon'
import {isMobileOnly} from 'react-device-detect';
import { useState, useEffect } from 'react'

const ProjectActionBox = (props) => {
    return (
        <div className='action-box'>
            {props.source != null && props.source !== ''? <Button onClick={() => { props.openInNewTab(props.source) }}>{props.appData.getString('source-code')}</Button> : <></>}
            {props.deployed != null && props.deployed !== '' ? <Button onClick={() => { props.openInNewTab(props.deployed) }}>{props.appData.getString('deployed')}</Button> : <></>}
        </div>
    )
}

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

    if (isMobileOnly? viewWidth <= 500 : viewWidth <= 850) {
        return (
            <div className='project-box'>
                <div>
                    <h3>{props.project.getTitle(props.appData.language)}</h3>
                </div>
                <div className='presentation-box'>
                    <Slider images={props.project.images}></Slider>
                    <div className='presentation-icons'>
                        {props.project.icons.map((item, index) => {
                            return (<LinkedIcon key={index} name={item} fill='var(--pri)'/>)
                        })}
                    </div>
                </div>
                <div className="description-box">
                    <div className='proj-desc-content-box'>
                        <div className="description">
                            <p>{props.project.getDesc(props.appData.language)}</p>
                        </div>
                    </div>
                    <ProjectActionBox source={props.project.source} deployed={props.project.deployed} openInNewTab={openInNewTab} appData={props.appData}/>
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
                                    return (<LinkedIcon key={index} name={item} fill='var(--pri)'/>)
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
                        <ProjectActionBox source={props.project.source} deployed={props.project.deployed} openInNewTab={openInNewTab} appData={props.appData}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='project-box'>
                    <div className="description-box-invert">
                        <div className='title-desc-box-invert'>
                            <h3>{props.project.getTitle(props.appData.language)}</h3>
                        </div>
                        <div className='proj-desc-content-box'>
                            <div className="description-invert">
                                <p>{props.project.getDesc(props.appData.language)}</p>
                                <div className='description-vertical-divider' />
                            </div>
                        </div>
                        <ProjectActionBox source={props.project.source} deployed={props.project.deployed} openInNewTab={openInNewTab} appData={props.appData}/>
                    </div>
                    <div className='presentation-box'>
                        <Slider images={props.project.images}></Slider>
                        <div className='presentation-icons-invert'>
                            {props.project.icons.map((item, index) => {
                                return (<LinkedIcon key={index} name={item} fill='var(--pri)'/>)
                            })}
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Project
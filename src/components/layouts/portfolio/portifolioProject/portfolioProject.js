import './portfolioProject.css'
import {ReactComponent as ReactSVG} from '../../../../assets/icons/react.svg'
import phoneShot from '../../../../assets/screens-portfolio/phone.jpeg'
import wideShot from '../../../../assets/screens-portfolio/wide.png'



const PortfolioProject = (props) => {
    return (
        <div className='portfolio-project'>
            <h3 className='portfolio-project-title'> {props.appData.getString('portfolio-pre-intro')} 
                <span style={{'color': 'var(--pri-l)'}}> {props.appData.getString('portfolio-label')} </span> 
                {props.appData.getString('portfolio-intro')}
                <span style={{'color': 'var(--pri-l)'}}> React</span>
            </h3>
            <ReactSVG className='react-icon-portfolio-svg' fill={'var(--pri-l)'}/>
            <div className='portfolio-project-shots'>
                <div className='portfolio-project-shot'>
                    <img className='portfolio-project-phone-shot' src={phoneShot} alt='displayPhone'/>  
                </div>
                <div className='portfolio-project-shot'>
                    <img className='portfolio-project-wide-shot' src={wideShot} alt='displayWideScreen'/>
                </div>
            </div>
            <p>{props.appData.getString('portfolio-desc1')}</p>
            <p>{props.appData.getString('portfolio-desc2')}</p>
            <p>{props.appData.getString('portfolio-continue')}</p>
            <div className='portfolio-divider'></div>
        </div>
    )
}

export default PortfolioProject
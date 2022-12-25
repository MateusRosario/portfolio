import profile from '../../../assets/profile-img.jpg'
import SectionTitle from '../../ui/SectionTitle'
import './About.css'

const About = (props) => {
    return (
        <div className='box'>
            <div className='title-box'>
              <SectionTitle>{props.appData.getString('about-me')}</SectionTitle>
            </div>
            <div className='content'>
              <div className='image-box'>
                <img className='about-image' src={profile} alt="Profile"/>
              </div>
              <div className='desc-box'>
                <p>I am Mateus da Silva Rosario, a Computer Science student</p>
              </div>
            </div>
        </div>
    )
}

export default About
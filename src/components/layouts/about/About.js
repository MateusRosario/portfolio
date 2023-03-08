import profile from '../../../assets/profile-img.jpg'
import SectionTitle from '../../ui/SectionTitle'
import Button from '../../ui/Button'
import Slider from '../../ui/slider/Slider'
import './About.css'

const DetailBoxItem = (props) => {
    return (
        <div className='detail-item'>
            <div className='detail-item-label'>{props.label}:</div>
            <p>{props.children}</p>
        </div>
    )
}

const About = (props) => {
    const getStr = (code) => {
        return props.appData.getString(code)
    }

    return (
        <div id='about' className='about-box'>
            <div className='content'>
                <div className='image-box'>
                    <div className='image-container'>
                        <Slider images={[profile]}></Slider>
                        {/* <img className='about-image' src={profile} alt="Profile" /> */}
                    </div>
                </div>
                <div className='desc-box'>
                    <SectionTitle>{getStr('about')}</SectionTitle>
                    <div className='desc-inside-box'>
                      <p>{getStr('about-me')}</p>
                      <div className='detail-box'>
                          <DetailBoxItem label={getStr('about-name-l')}>{getStr('about-name')}</DetailBoxItem>

                          <DetailBoxItem label={getStr('about-age-l')}>{getStr('about-age')}</DetailBoxItem>

                          <DetailBoxItem label={getStr('about-degree-l')}>{getStr('about-degree')}</DetailBoxItem>

                          <DetailBoxItem label={getStr('about-uni-l')}>{getStr('about-uni')}</DetailBoxItem>
                      </div>
                      <div className='action-box'>
                          {/* <Button>Curriculum</Button> */}
                          <Button disabled={true}>{getStr('about-action-download')}</Button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
import SectionTitle from '../../ui/SectionTitle';
import {isMobileOnly} from 'react-device-detect';
import './Contact.css'
import {ReactComponent as GithubIcon} from '../../../assets/icons/github.svg'
import {ReactComponent as LinkedinIcon} from '../../../assets/icons/linkedin.svg'
import {ReactComponent as EmailIcon} from '../../../assets/icons/email.svg'

function openInNewTab(url) {
    if (url != null) {
        window.open(url, '_blank').focus();
    }
}

const Contact = (props) => {
    var contacts = [LinkedinIcon, GithubIcon, EmailIcon]
    var links = ['https://www.linkedin.com/in/mateus-rosario/', 'https://github.com/MateusRosario', 'mailto:mateusrosario.me@gmail.com?subject=contact']
    var strings = ['Linkedin', 'Github', 'Email']

    return (
        <div id='contact' className="contact-box">
            <SectionTitle>{props.appData.getString('contact')}</SectionTitle>
            <div className='contact-icones-box'>
                {contacts.map((item, index) => {
                    const Icon = item
                    if (!isMobileOnly) {
                        return (
                            <div key={index} className='contact-icon-con'>
                                <Icon onClick={() => {openInNewTab(links[index])}} className='contact-icon' fill='var(--acc)'></Icon>
                            </div>
                        )
                    } else {
                        return (
                            <div key={index} className='contact-icon-con mobile'>
                                <Icon onClick={() => {openInNewTab(links[index])}} className='contact-icon' fill='var(--acc)'></Icon>
                                <div>{strings[index]}</div>
                            </div>
                        )
                    }
                }
                )}                
            </div>
            <div className='contact-ass-box'>
                <small>Página de minha autoria - <u onClick={() => {openInNewTab('https://github.com/MateusRosario/portfolio')}} style={{'cursor': 'pointer'}}>{props.appData.getString('source-code')}</u></small>
            </div>
        </div>
    )
}

export default Contact;
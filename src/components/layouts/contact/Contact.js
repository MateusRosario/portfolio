import SectionTitle from '../../ui/SectionTitle';
import './Contact.css'
import {ReactComponent as GithubIcon} from '../../../assets/icons/github.svg'
import {ReactComponent as LinkedinIcon} from '../../../assets/icons/linkedin.svg'
import {ReactComponent as EmailIcon} from '../../../assets/icons/email.svg'

function openInNewTab(url) {
    if (url != null) {
        window.open(url, '_blank').focus();
    }
}

const Contact = () => {
    var contacts = [LinkedinIcon, GithubIcon, EmailIcon]
    var links = ['https://www.linkedin.com/in/mateus-da-silva-rosario-275420176/', 'https://github.com/MateusRosario', 'mailto:mateusrosario.me@gmail.com?subject=contact']

    return (
        <div id='contact' className="contact-box">
            <SectionTitle>Contact Me</SectionTitle>
            <div className='contact-icones-box'>
                {contacts.map((item, index) => {
                    const Icon = item
                    return (
                        <div key={index} className='contact-icon-con'>
                            <Icon onClick={() => {openInNewTab(links[index])}} className='contact-icon' fill='var(--acc)'></Icon>
                        </div>
                    )
                }
                )}                
            </div>
            <div className='contact-ass-box'>
                <small>Página de minha autoria - Source Code</small>
            </div>
        </div>
    )
}

export default Contact;
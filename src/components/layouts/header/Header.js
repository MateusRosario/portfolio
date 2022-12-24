import { Component } from 'react';
import { AppData } from '../../../App'
import './Header.css'


const HeadButton = (props) => {
    let buttonClass = props.selected? 'button selected': 'button';
    return (<button className={buttonClass} onClick={() => {return props.onClick != null? props.onClick(): null}}>{props.children}</button>)
}


class Header extends Component {

    changeLanguage() {

    }

    render(){
        const lg = this.props.appData.language;

        return (
            <div className='header'>
                <div className='left'></div>
                <div className='center'>
                    <HeadButton selected={true}>{this.props.appData.getString('home')}</HeadButton>
                    <HeadButton>{this.props.appData.getString('about-me')}</HeadButton>
                    <HeadButton>{this.props.appData.getString('portfolio')}</HeadButton>
                    <HeadButton>{this.props.appData.getString('cv')}</HeadButton>
                </div>
                <div className='right'>
                    <HeadButton selected={lg === 'en'} onClick={() => this.props.appData.changeLg(AppData.EN)}>Lg En</HeadButton>
                    <HeadButton selected={lg === 'pt-br'} onClick={() => this.props.appData.changeLg(AppData.PTBR)}>Lg Pt-br</HeadButton>
                </div>
            </div>
        )
    }
}

export default Header
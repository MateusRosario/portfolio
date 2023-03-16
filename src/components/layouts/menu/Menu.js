import AppData from '../../../AppData'
import './Menu.css'


const MenuButton = (props) => {
    const selected = props.selected
    return (
        <div className={`menu-button ${selected? 'selected': ''}`} onClick={props.onClick}>{props.children}</div>
    )
}

const Menu = (props) => {
    const changeLg = (language) => {
        props.appData.changeLg(language)
    }

    const lg = props.appData.language;

    return (
        <div className='menu-container'>
            <div className='menu-box'>
                <div className='menu-sec-box'>
                    <div className='menu-divider'/>
                    {props.sections.map(section => {
                        return (
                            <MenuButton key={section}
                                selected={props.selected === section}
                                onClick={() => {
                                    props.onCloseMenu(false)
                                    props.scrollTo(section)
                                    props.setSelected(section)
                                }}>
                                {props.appData.getString(section)}
                            </MenuButton>
                        )
                    })}
                </div>
                <div className='menu-lg-box'>
                    <div className='menu-divider'/>
                    <MenuButton selected={lg === AppData.EN} onClick={() => changeLg(AppData.EN)}>Lg En</MenuButton>
                    <MenuButton selected={lg === AppData.PTBR} onClick={() => changeLg(AppData.PTBR)}>Lg Pt-br</MenuButton>
                </div>
            </div>
            <div className='menu-out-box' onClick={() => {props.onCloseMenu()}}/>
        </div>
    )
}

export default Menu
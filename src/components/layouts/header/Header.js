import { useState, useEffect } from 'react';
import AppData from '../../../AppData'
import Menu from '../menu/Menu.js'
import './Header.css'

import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg'

/*
Header Component
    Show the options to change to a specific section of the porfolio or change the language

    Each section of the page has a component, and each HeadButton will scroll smothly to its respective section

*/

const HeadButton = (props) => {
    let buttonClass = props.selected ? 'button selected' : 'button';
    return (<button className={buttonClass} onClick={() => { return props.onClick != null ? props.onClick() : null }}>{props.children}</button>)
}

const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const GetElementIntersectingHeader = (elementsID, viewHeight) => {
    const [elementsOnView, setElementOnView] = useState(() => { return [elementsID[0]] });

    useEffect(() => {
        let rootMarginString = `0px 0px -${viewHeight - 50}px 0px`;
        if(viewHeight - 50 < 0){
            rootMarginString = '0px 0px 0px 0px';
        }

        const observers = elementsID.map(id => new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!elementsOnView.includes(id)) {
                        elementsOnView.push(id)
                        setElementOnView(elementsOnView);
                    }
                } else {
                    if (elementsOnView.includes(id)) {
                        const index = elementsOnView.indexOf(id);
                        elementsOnView.splice(index, 1);
                        setElementOnView(elementsOnView);
                    }
                }
            }, { rootMargin: rootMarginString }
        ))

        const elements = elementsID.map(id => document.getElementById(id))

        elements.forEach((element, index) => {
            element && observers[index].observe(element);
            //console.log(element, observers[index])
        })


        return () => elements.forEach((element, index) => {
            observers[index].unobserve(element);
        })
    });

    return elementsOnView[elementsOnView.length - 1];
};

const GetElementOnView = (elementsID) => {
    const [elementsOnView, setElementOnView] = useState(() => { return [elementsID[0]] });

    useEffect(() => {
        const observers = elementsID.map(id => new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    if (!elementsOnView.includes(id)) {
                        elementsOnView.push(id)
                        setElementOnView(elementsOnView);
                    }
                } else {
                    if (elementsOnView.includes(id)) {
                        const index = elementsOnView.indexOf(id);
                        elementsOnView.splice(index, 1);
                        setElementOnView(elementsOnView);
                    }
                }
                //console.log(elementsOnView)
            }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' }
        ))

        const elements = elementsID.map(id => document.getElementById(id))

        elements.forEach((element, index) => {
            element && observers[index].observe(element);
            //console.log(element, observers[index])
        })


        return () => elements.forEach((element, index) => {
            observers[index].unobserve(element);
        })
    });

    return elementsOnView[elementsOnView.length - 1];
};

const Header = (props) => {
    const changeLg = (language) => {
        props.appData.changeLg(language)
    }

    const lg = props.appData.language;

    const sections = ['home', 'about', 'skills', 'portfolio', /*'cv',*/ 'contact']

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const [position, setScrollPosition] = useState(0);
    const [viewHeight, setViewHeight] = useState(() => window.innerHeight);
    const [viewWidth, setViewWidth] = useState(() => window.innerWidth);
    const [selected, setSelected] = useState(sections[0]);

    const elementOnView = GetElementOnView(sections);
    const elementIntersectHeader = GetElementIntersectingHeader(sections, viewHeight);

    if (elementOnView !== selected) {
        //console.log(elementOnView)
        setSelected(elementOnView)
    }

    useEffect(() => {
        const onScroll = () => {
            setScrollPosition(window.pageYOffset);


        }

        const onResize = () => {
            setViewHeight(window.innerHeight);
            setViewWidth(window.innerWidth);
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    // Scroll pixels limit to maintain initial header class (tranparen background) = position < (half home hight) - (home titles box height) - (header height)
    const scrollInitialHeaderLimit = (viewHeight / 2) - 260 - 50

    var headerClass = 'header'
    if (position > scrollInitialHeaderLimit) {
        if (['home', 'portfolio'].includes(elementIntersectHeader)) {
            headerClass = 'header light'
        } else {
            headerClass = 'header dark'
        }
    }

    if (viewWidth > 900) {
        return (
            <div id='header' className={headerClass}>
                <div className='left'></div>
                <div className='center'>
                    {sections.map(section => {
                        return (<HeadButton key={section}
                            onClick={() => {
                                scrollTo(section)
                                setSelected(section)
                            }}
                            selected={selected === section}>
                            {props.appData.getString(section)}
                        </HeadButton>)
                    })}
                </div>
                <div className='right'>
                    <HeadButton selected={lg === AppData.EN} onClick={() => changeLg(AppData.EN)}>Lg En</HeadButton>
                    <HeadButton selected={lg === AppData.PTBR} onClick={() => changeLg(AppData.PTBR)}>Lg Pt-br</HeadButton>
                </div>
            </div>
        )
    } else {
        return (
            <div id='header' className={headerClass}>
                {menuIsOpen ?
                    <Menu sections={sections}
                        selected={selected}
                        appData={props.appData}
                        onCloseMenu={() => { setMenuIsOpen(false) }}
                        scrollTo={(sec) => { scrollTo(sec) }}
                        setSelected={(sec) => { setSelected(sec) }} />
                    : null
                }
                <div className='left'>
                    <MenuIcon className='header-menu-button' onClick={() => { setMenuIsOpen(true) }}></MenuIcon>
                </div>
                <div className='center' />
                <div className='right'/>
            </div>
        )
    }

}

export default Header
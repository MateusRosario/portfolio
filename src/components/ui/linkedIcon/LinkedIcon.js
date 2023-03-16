import './LinkedIcon.css'

// Import SVG files
import {ReactComponent as jsSVG} from '../../../assets/icons/javascript.svg'
import {ReactComponent as p5jsSVG} from '../../../assets/icons/p5js.svg'
import {ReactComponent as javaSVG} from '../../../assets/icons/java.svg'
import {ReactComponent as pythonSVG} from '../../../assets/icons/python.svg'
import {ReactComponent as pygameSVG} from '../../../assets/icons/pygame.svg'
import {ReactComponent as dartSVG} from '../../../assets/icons/dart.svg'
import {ReactComponent as flutterSVG} from '../../../assets/icons/flutter.svg'
import {ReactComponent as firebaseSVG} from '../../../assets/icons/firebase.svg'
import {ReactComponent as androidstudioSVG} from '../../../assets/icons/android-studio.svg'

//Dicionario de Icones SVG
const SVGICONS = {
    'js': {svg: jsSVG, url: 'https://www.javascript.com/'}, 
    'p5js': {svg: p5jsSVG, url: 'https://p5js.org/'},
    'java': {svg: javaSVG, url: 'https://www.java.com/'},
    'python': {svg: pythonSVG, url: 'https://www.python.org/'},
    'pygame': {svg: pygameSVG, url: 'https://www.pygame.org/'},
    'dart': {svg: dartSVG, url: 'https://dart.dev/'},    
    'flutter': {svg: flutterSVG, url: 'https://flutter.dev/'},
    'firebase': {svg: firebaseSVG, url: 'https://firebase.google.com/'},
    'androidstudio': {svg: androidstudioSVG, url: 'https://developer.android.com/studio'},
}

const openInNewTab = (url) => {
    if (url != null) {
        window.open(url, '_blank').focus();
    }
}


const LinkedIcon = (props) => {
    let {svg, url} = SVGICONS[props.name]
    if(props.name == null || props.name === undefined){
        // if name was not given, the component will expect a given svg reactcomponent icon and an URL
        svg = props.svg
        url = props.url
    }
    
    const fill = props.fill

    const SVG = svg

    return (
        <div className='linked-icon-container' onClick={() => {openInNewTab(url)}}>
            <SVG className='linked-icon-svg' fill={fill}/>
        </div>
    )
}

export default LinkedIcon
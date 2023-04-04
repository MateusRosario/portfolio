import './LinkedIcon.css'

// Import SVG files
import {ReactComponent as jsSVG} from '../../../assets/icons/javascript.svg'
import {ReactComponent as tsSVG} from '../../../assets/icons/typescript.svg'
import {ReactComponent as p5jsSVG} from '../../../assets/icons/p5js.svg'
import {ReactComponent as javaSVG} from '../../../assets/icons/java.svg'
import {ReactComponent as pythonSVG} from '../../../assets/icons/python.svg'
import {ReactComponent as pygameSVG} from '../../../assets/icons/pygame.svg'
import {ReactComponent as dartSVG} from '../../../assets/icons/dart.svg'
import {ReactComponent as flutterSVG} from '../../../assets/icons/flutter.svg'
import {ReactComponent as firebaseSVG} from '../../../assets/icons/firebase.svg'
import {ReactComponent as androidstudioSVG} from '../../../assets/icons/android-studio.svg'
import {ReactComponent as angularSVG} from '../../../assets/icons/angular.svg'
import {ReactComponent as diagramsSVG} from '../../../assets/icons/diagrams.svg'
import {ReactComponent as cssSVG} from '../../../assets/icons/css.svg'
import {ReactComponent as htmlSVG} from '../../../assets/icons/html.svg'
import {ReactComponent as djangoSVG} from '../../../assets/icons/django.svg'
import {ReactComponent as figmaSVG} from '../../../assets/icons/figma.svg'
import {ReactComponent as gitSVG} from '../../../assets/icons/git.svg'
import {ReactComponent as mysqlSVG} from '../../../assets/icons/mysql.svg'
import {ReactComponent as noderedSVG} from '../../../assets/icons/node-red.svg'
import {ReactComponent as reactSVG} from '../../../assets/icons/react.svg'
import {ReactComponent as swiftSVG} from '../../../assets/icons/swift.svg'
import {ReactComponent as trelloSVG} from '../../../assets/icons/trello.svg'

//Dicionario de Icones SVG
const SVGICONS = {
    'js': {svg: jsSVG, url: 'https://www.javascript.com/'}, 
    'ts': {svg: tsSVG, url: 'https://www.typescriptlang.org/'}, 
    'p5js': {svg: p5jsSVG, url: 'https://p5js.org/'},
    'java': {svg: javaSVG, url: 'https://www.java.com/'},
    'python': {svg: pythonSVG, url: 'https://www.python.org/'},
    'pygame': {svg: pygameSVG, url: 'https://www.pygame.org/'},
    'dart': {svg: dartSVG, url: 'https://dart.dev/'},    
    'flutter': {svg: flutterSVG, url: 'https://flutter.dev/'},
    'firebase': {svg: firebaseSVG, url: 'https://firebase.google.com/'},
    'androidstudio': {svg: androidstudioSVG, url: 'https://developer.android.com/studio'},
    'angular': {svg: angularSVG, url: 'https://angular.io/'},
    'diagrams': {svg: diagramsSVG, url: 'https://www.diagrams.net/'},
    'css': {svg: cssSVG, url: 'https://www.css3.com/'},
    'html': {svg: htmlSVG, url: 'https://html.com/'},
    'django': {svg: djangoSVG, url: 'https://www.djangoproject.com/'},
    'figma': {svg: figmaSVG, url: 'https://www.figma.com/'},
    'git': {svg: gitSVG, url: 'https://git-scm.com/'},
    'mysql': {svg: mysqlSVG, url: 'https://www.mysql.com/'},
    'node-red': {svg: noderedSVG, url: 'https://nodered.org/'},
    'react': {svg: reactSVG, url: 'https://react.dev/'},
    'swift': {svg: swiftSVG, url: 'https://www.apple.com/br/swift/'},
    'trello': {svg: trelloSVG, url: 'https://trello.com/pt-BR'},
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
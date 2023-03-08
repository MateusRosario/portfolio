import './Portfolio.css'
import SectionTitle from '../../ui/SectionTitle'
import Project from '../project/Project'
import AppData from '../../../AppData'

//Imagens
import ballsCoLSim from '../../../assets/projects/balls-collision.png'
import ballsCoLSim1 from '../../../assets/projects/ballsSim1.gif'
import ballsCoLSim2 from '../../../assets/projects/ballsSim2.gif'
import ballsCoLSim3 from '../../../assets/projects/ballsSim3.gif'

import questionBank from '../../../assets/projects/question-bank.png'
import questionBank2 from '../../../assets/projects/question-bank2.png'

import minesweeper from '../../../assets/projects/minesweeper.png'

import pingpong from '../../../assets/projects/pingpong.png'
import pingpong2 from '../../../assets/projects/pingpong2.png'

import geoportour1 from '../../../assets/projects/geoportour1.jpg'
import geoportour2 from '../../../assets/projects/geoportour2.jpg'
import geoportour3 from '../../../assets/projects/geoportour3.jpg'
import geoportour4 from '../../../assets/projects/geoportour.jpg'

//Icones
import {ReactComponent as IconeJS} from '../../../assets/icons/javascript.svg'
import {ReactComponent as IconeP5JS} from '../../../assets/icons/p5js.svg'

class ProjectModel {
    constructor (title, titlePt, description, descriptionPt, images, icons, source, deployed) {
        this.title = title;
        this.titlePt = titlePt
        this.description = description;
        this.descriptionPt = descriptionPt;
        this.images = images;
        this.icons = icons;
        this.source = source;
        this.deployed = deployed;
    }

    getTitle(lg) {
        if (lg === AppData.EN) {
            return this.title
        } else {
            return this.titlePt
        }
    }

    getDesc(lg) {
        if (lg === AppData.EN) {
            return this.description
        } else {
            return this.descriptionPt
        }
    }
}

const Portfolio = (props) => {

    let projects = [
        new ProjectModel('Balls Collision Simulation', '',
        'Small project I made to play around with animations with JS.' +
        'It starts random balls on the canvas with random velocities and simulates the ' +
        'movements and collisions. Afterwards, I added the gravity effect to the balls. ' +
        '\n\n Drag mouse to move throughout the space, and use mouse wheel to zoom out or in. ' +
        '\n\n Hold SHIFT key: Adds gravity effect towards the cursor position. ' +
        '\n\n Hold ALT key: Spawns a new ball on the environment at the cursor position ' +
        '(mouse wheel to scale new ball).',
        '',
        [ballsCoLSim, ballsCoLSim1, ballsCoLSim2, ballsCoLSim3], [IconeJS, IconeP5JS], 
        'https://github.com/MateusRosario/BallsCollisionSimulation', 'https://mateusrosario.github.io/BallsCollisionSimulation/'),


        new ProjectModel('Bank of Questions', 'Banco de Questões',
        'Descrição',
        '',
        [questionBank, questionBank2], [IconeJS, IconeP5JS]),

        new ProjectModel('Minesweeper', 'Campo Minado',
        'Descrição',
        '',
        [minesweeper], [IconeJS, IconeP5JS]),

        new ProjectModel('Ping Pong', 'Ping Pong',
        'Descrição',
        '',
        [pingpong, pingpong2], [IconeJS, IconeP5JS]),

        new ProjectModel('GeoPorTOur', 'GeoPorTOur',
        'Descrição',
        '',
        [geoportour1, geoportour2, geoportour3, geoportour4], [IconeJS, IconeP5JS]),
    ];

    let invert = true

    return (
        <div id='portfolio' className="portfolio">
            <SectionTitle>Portfolio</SectionTitle>
            {projects.map((item, index) => {
                invert = !invert
                return <Project key={index} project={item} invert={invert} appData={props.appData}></Project>
            })}
        </div>
    )
}

export default Portfolio
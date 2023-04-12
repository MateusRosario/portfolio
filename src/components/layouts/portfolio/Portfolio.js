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
        new ProjectModel(
            //English Title
            'Balls Collision Simulation', 
            //Portuguese Title
            'Simulação de Bolas Colidindo',
            //English Description
            'Small project I made to play around with animations with JS.' +
            'It starts random balls on the canvas with random velocities and simulates the ' +
            'movements and collisions. Afterwards, I added the gravity effect to the balls. ' +
            '\n\n Drag mouse to move throughout the space, and use mouse wheel to zoom out or in. ' +
            '\n\n Hold SHIFT key: Adds gravity effect towards the cursor position. ' +
            '\n\n Hold ALT key: Spawns a new ball on the environment at the cursor position ' +
            '(mouse wheel to scale new ball).',
            //Portuguese Description
            'Pequeno projeto que eu fiz para brincar com animações em JS. Cria um canvas na página e posiciona bolas em posições aleatórias com velocidades aleatórias. Posteriormente, adicionei a simulação de colisões e de gravidade.\n\n' + 
            'Arraste com o mouse para se mover pelo espaço e use a roda do mouse para dar zoom.\n\n' +
            'Pressionar tecla SHIFT: Adicionar efeito gravitacional na direção do cursor.\n\n' +
            'Pressionar tecla ALT: Posicionar uma nova bola no ambiente na posição do cursor (use a roda do mouse para aumentar ou reduzir o tamanho da nova bola).\n\n',
            //Images and Icons
            [ballsCoLSim, ballsCoLSim1, ballsCoLSim2, ballsCoLSim3], ['js', 'p5js'], 
            //Action Links
            'https://github.com/MateusRosario/BallsCollisionSimulation', 'https://mateusrosario.github.io/BallsCollisionSimulation/'),

        new ProjectModel(
            //English Title
            'Bank of Questions',
            //Portuguese Title
            'Banco de Questões',
            //English Description
            'Object Oriented Programming (OOP) Discipline project, made in the second semester of graduation on Computer Science at Tocantins Federal University. Project made to learn OOP, UI programming in Java, data persistence, project management, and teamwork.\n\n' + 
            'The desktop program aims to maintain a question bank for mock and tests, allowing registration, listing, search, and editing of questions. Besides that, it is possible to generate PDFs, and CSVs of tests with questions assorted or filtered by subject.\n\n' +
            'Project made in collaboration, follow to github source code page to see collaborators.',
            //Portuguese Description
            'Projeto da disciplina de Programação Orientada a Objetos (POO), feito no segundo semestre da graduação em Ciência da Computação da Universidade Federal do Tocantins. Projeto feito com o intuito de aprender sobre POO, programação de Interfaces em Java, persistência de dados, gerência de projetos e trabalho em equipe.\n\n' +
            'O programa Desktop tem o objetivo de manter um banco de questões de provas e simulados, permitindo cadastro, listagem, pesquisa e edição. Além disto é possível gerar PDFs e CSVs de provas e gabaritos com questões sortidas ou filtradas por assunto.\n\n' + 
            'Projeto feito em colaboração, siga para a página do código fonte no github para informações sobre os colaboradores.', 
            //Images and Icons
            [questionBank, questionBank2], ['java'],
            //Action Links
            'https://github.com/MateusRosario/QuestionsBank'
            ),
        
        new ProjectModel(
            //English Title
            'Minesweeper',
            //Portuguese Title
            'Campo Minado',
            //English Description
            'Implementation of a minesweeper type game to play around with the matrix concept and the pygame library.\n\n' + 
            'The game is played using the buttons left and right of the mouse.',
            //Portuguese Description
            'Implementação de um game de campo minado para brincar com o conceito de matriz utilizando a biblioteca pygame.\n\n' + 
            'O game é jogado usando os botões direito e esquerdo do mouse.',
            //Images and Icons
            [minesweeper], ['python', 'pygame'],
            //Action Links
            'https://github.com/MateusRosario/Minesweeper',
            ),

        new ProjectModel(
            //English Title
            'Ping Pong',
            //Portuguese Title
            'Ping Pong',
            //English Description
            'Project I made during the end of year vacations of my fourth semester at my graduation. Simple ping pong game where is possible to play player vs player. Game made using Pygame library.\n\n' + 
            'Controls: keys A, and W to control player 1 (bottom field), keys <-, and -> to control player 2 (top field).\n\n' +
            'The game also has specials actions, activated by the keys G, H, and J (bottom field), and the numpad keys 1, 2, and 3 (top field):\n\n' +
            ' - Special 1 (V): next time the ball touches the player\'s board, it is reflected with double the velocity;\n\n' +
            ' - Special 2 (R): player\'s field limit will reflect the ball one time;\n\n' + 
            ' - Special 3 (C): next time the ball touches the player\'s board, two balls are reflected.\n\n' + 
            'Obs.: all specials are deactivated once one of the players makes a point.',
            //Portuguese Description
            'Projeto que fiz durante as férias de final de ano do quarto semestre da graduação. Simples game do tipo Ping Pong onde se joga player vs player. Jogo feito utilizando a biblioteca Pygame.\n\n' + 
            'Controles: teclas A e W para controlar player 1 (campo de baixo), teclas <- e -> para controlar player 2 (campo de cima).\n\n' +
            'O jogo também tem especiais, ativados pelas teclas G, H e J (campo de baixo) e teclas do numpad 1, 2 e 3 (campo de cima):\n\n' +
            ' - Especial 1 (V): próxima vez que a bola toca na prancha do player, esta é refletida com o dobro da velocidade.\n\n' +
            ' - Especial 2 (R): limite de campo do player vai refletir a bola uma vez;\n\n' +
            ' - Especial 3 (C): próxima vez que a bola tocar na prancha do player, duas bolas são refletidas;\n\n' +
            'Obs.: todos os especiais são desativados após algum dos players ganhar ponto.',
            //Images and Icons
            [pingpong, pingpong2], ['python', 'pygame'],
            //Action Links
            'https://github.com/MateusRosario/PingPongSimpleGame'
            ),

        new ProjectModel(
            //English Title
            'GeoPorTOur',
            //Portuguese Title
            'GeoPorTOur',
            //English Description
            'GeoPorTour is a social education app about the historical landmarks of the city of Porto Nacional (Tocantins, Brazil). ' + 
            'The app allows users to navigate through the city map, exploring each historical and cultural attraction, with information, ' + 
            'location, and images of the site, and the ability to virtually visit the selected point. The Virtual Tour is a navigation through' + 
            'various 360-degree images that allows users to view and navigate through the entire Geo-touristic itinerary, including streets, ' + 
            'squares, cathedral, museum, and much more.\n\n' + 
            'The application was developed using resources from Proex - UFT (Pro-Rectory of Extension, Culture, and Community Affairs of the Federal University of Tocantins) ' + 
            'as an extension project. I was responsible for all the technical development of the app, designing the interface, functions, and data access. ' + 
            'It was implemented in Flutter, using Firebase as the main database and fetching information from a RestFull API of the GeoPorTour web platform.',
            //Portuguese Description
            'GeoPorTour é um app para educação social sobre os marcos históricos da cidade de Porto Nacional (Tocantins, Brasil). ' +
            'O app permite fazer uma navegação pelo mapa da cidade, explorando cada atrativo histórico-cultural, com informações, ' +
            'localização e imagens do local, podendo realizar a visita virtual ao ponto selecionado. O Tour Virtual é uma navegação ' + 
            'por diversas imagens em 360 graus, que possibilita visualizar e navegar por todo o percurso do Roteiro Geo-turístico, ' + 
            'incluindo ruas, praça, catedral, museu e muito mais.\n\n' +
            'Aplicativo feito por meio dos recursos da Proex - UFT (Pró-reitoria de extensão, cultura e assuntos comunitários da Universidade Federal do Tocantins), ' + 
            'como um projeto de extensão. Fui responsável por todo o desenvolvimento técnico do app, projetando o design e implementando toda a interface, funções e ' + 
            'o acesso de dados. Este foi implementado em Flutter, utilizando o Firebase como banco de dados principal e buscando informações em uma Api RestFull da ' + 
            'plataforma web GeoPorTour.',
            //Images and Icons
            [geoportour1, geoportour2, geoportour3, geoportour4], ['dart', 'flutter', 'firebase', 'androidstudio'],
            //Action Links
            '', 'https://play.google.com/store/apps/details?id=com.fabricadesoftwareuft.geoportour'
            ),
    ];

    let invert = true

    return (
        <div id='portfolio' className="portfolio">
            <SectionTitle>{props.appData.getString('portfolio')}</SectionTitle>
            {projects.map((item, index) => {
                invert = !invert
                return <Project key={index} project={item} invert={invert} appData={props.appData}></Project>
            })}
        </div>
    )
}

export default Portfolio
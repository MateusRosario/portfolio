import SectionTitle from '../../ui/SectionTitle'
import LinkedIcon from '../../ui/linkedIcon/LinkedIcon'
import './skills.css'

const Skills = (props) => {
    const skills = [
        ['JavaScript',     'js'],
        ['TypeScript',     'ts'],
        ['CSS',            'css'],
        ['HTML',           'html'],
        ['Java',           'java'],
        ['Python',         'python'],
        ['Swift/SwiftUI',  'swift'],
        ['Dart',           'dart'],
        ['Flutter',        'flutter'],
        ['Android Studio', 'androidstudio'],
        ['Angular',        'angular'],
        ['Django',         'django'],
        ['p5js',           'p5js'],
        ['Figma',          'figma'],
        ['React',          'react'],
        ['Git',            'git'],
        ['MySQL',          'mysql'],
        ['Firebase',       'firebase'],
        ['Node-RED',       'node-red'],
        ['diagrams .net',  'diagrams'],
        ['Trello',         'trello'],
    ]

    return (
        <div id='skills' className='skills-section'>
            <SectionTitle>{props.appData.getString('skills')}</SectionTitle>
            <p>{props.appData.getString('skills-text')}</p>
            <div className='skills-container'>
                {skills.map((item, index) => {
                        return (
                            <div key={index} className='skills-block'>
                                <div className='skills-block-text'>{item[0]}</div>
                                <LinkedIcon name={item[1]} fill='var(--pri-d)'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
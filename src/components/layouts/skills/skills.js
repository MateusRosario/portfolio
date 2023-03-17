import SectionTitle from '../../ui/SectionTitle'
import LinkedIcon from '../../ui/linkedIcon/LinkedIcon'
import './skills.css'

const Skills = (props) => {
    const skills = ['JavaScript', 'TypeScript', 'p5js', 'Java', 'Python', 'Dart', 'Flutter', 'Firebase', 'Android Studio', 'Angular', 'CSS', 'HTML', 'diagrams .net',
         'Django', 'Figma', 'Git', 'MySQL', 'Node-RED','React','Swift/SwiftUI']
    const skillsIconsNames = ['js', 'ts', 'p5js', 'java', 'python', 'dart', 'flutter', 'firebase', 'androidstudio', 'angular', 'css', 'html', 'diagrams',
    'django', 'figma', 'git', 'mysql', 'node-red','react','swift']

    return (
        <div id='skills' className='skills-section'>
            <SectionTitle>{props.appData.getString('skills')}</SectionTitle>
            <p>{props.appData.getString('skills-text')}</p>
            <div className='skills-container'>
                {skills.map((item, index) => {
                        return (
                            <div key={index} className='skills-block'>
                                <div className='skills-block-text'>{item}</div>
                                <LinkedIcon name={skillsIconsNames[index]} fill='var(--pri-d)'/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills

class AppData {
    static PTBR = 'pt-BR';
    static EN = 'en';

    constructor(handleChange, lg = AppData.EN){
        this.strings = {
            'pt-BR': {
                // Headers
                'home': 'Início',
                'about': 'Sobre mim',
                'portfolio': 'Meus Projetos',
                'cv': 'Currículo',
                'contact': 'Entre em Contato',
                'skills': 'Habilidades',

                //Home Titles
                'title': 'Meu Portfólio.',
                'profile': 'Desenvolvedor Full Stack & Estudante de Ciência da Computação',

                //About
                'about-name-l': 'Nome',
                'about-name': 'Mateus da Silva Rosario',
                'about-age-l': 'Idade',
                'about-age': '23',
                'about-degree-l': 'Graduação',
                'about-degree': 'Bacharel em Ciência da Computação',
                'about-uni-l': 'Universidade',
                'about-uni': 'Universidade Federal do Tocantins',
                'about-action-download': 'Curriculum Vitae',
                'about-me': 'Possuo perfil de liderança e companheirismo, '
                            + 'além de ser muito organizado e comunicativo. ' 
                            + 'Isso me permite encaixar bem em diversos projetos e '
                            + 'contribuir grandemente para as discussões.\n'
                            + '\n'
                            + 'Realizei o desenvolvimento de um sistema para '
                            + 'elaboração e atualização de Projetos Pedagógicos de '
                            + 'Curso no meu ultimo cargo e isto trouxe para a '
                            + 'Universidade Federal do Tocantins um ambiente '
                            + 'centralizado para a evolução rápida do seu ensino, '
                            + 'um sistema inovador e pioneiro que substituiu a ' 
                            + 'elaboração manual e analógica anteriormente performada '
                            + 'na instituição.\n'
                            + '\n'
                            + 'Tenho conhecimentos em Angular, JavaScript, ' 
                            + 'TypeScript, Python, Django, RESTful API, Flutter, ' 
                            + 'React, Firebase, MySQL e certificações para ' 
                            + 'desenvolvimento com serviços IBMCloud e para ios '
                            + 'com Swift eSwiftUI.',
                'cv-url': 'https://mateusrosario.github.io/myAutoCV/cv.pdf',
                
                //Skills
                'skills-text': 'Aqui estão apresentadas as tecnologias e ferramentas que tenho experiência de uso ou domínio.',

                //Projects
                'source-code': 'Código Fonte',
                'deployed': 'Publicado',
            },
            'en': {
                // Headers
                'home': 'Home',
                'about': 'About Me',
                'portfolio': 'My Projects',
                'cv': 'Curriculum',
                'contact': 'Contact Me',
                'skills': 'Skills',

                //Home Titles
                'title': 'My Portfolio.',
                'profile': 'Full Stack Developer & Computer Science Student',

                //About
                'about-name-l': 'Name',
                'about-name': 'Mateus da Silva Rosario',
                'about-age-l': 'Age',
                'about-age': '23',
                'about-degree-l': 'Degree',
                'about-degree': 'Graduating in Computer Science',
                'about-uni-l': 'University',
                'about-uni': 'Federal University of Tocantins',
                'about-action-download': 'Curriculum Vitae',
                'about-me': 'Hello! My name is Mateus Rosario and I am a passionate professional ' + 
                        'about development and programming, as well as a Computer Science student. ' + 
                        'I am always looking for opportunities to learn and grow professionally.\n\n' + 
                        'With 2 years of experience in FullStack development, I worked on building web ' + 
                        'systems in all stages, from planning to post-launch. During this period, ' + 
                        'I developed skills in various technologies, including Angular, JavaScript, ' + 
                        'TypeScript, Python, Django, RESTful API, Flutter, React, Firebase, MySQL, Swift, SwiftUI ' + 
                        'among others. In addition, I learned how to make assertive decisions, organize ' + 
                        'work, and lead teams. I am passionate about problem-solving through ' + 
                        'programming and always strive to deliver useful and intuitive experiences ' + 
                        'for users and clients.\n\n' + 
                        'Outside of my work and studies, I enjoy gaming and am an enthusiast about the ' + 
                        'future of virtual and augmented reality.\n\nThank you for visiting my website and ' + 
                        'learning a little more about me. If you are interested in discussing a project or ' + 
                        'have any questions, please do not hesitate to contact me. I am open to new ' + 
                        'opportunities and currently looking for employment.',
                'cv-url': 'https://mateusrosario.github.io/myAutoCV/cv-en.pdf',
                
                //Skills
                'skills-text': 'Here are the technologies and tools that I have experience using or domain.',

                //Projects
                'source-code': 'Source Code',
                'deployed': 'Deployed',
            },
        }

        this.handleChange = handleChange;
        if(lg in this.strings){
            this.language = lg;
        }else{
            this.language = AppData.EN;
        }
    }

    changeLg(language) {
        this.handleChange(new AppData(this.handleChange, language));
    }

    getString(code){
        return this.strings[this.language][code];
    }
}

export default AppData
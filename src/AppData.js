
class AppData {
    static PTBR = 'pt-br';
    static EN = 'en';

    constructor(handleChange, lg = AppData.EN){
        this.strings = {
            'pt-br': {
                // Headers
                'home': 'Início',
                'about': 'Sobre',
                'portfolio': 'Portifolio',
                'cv': 'Currículo',
                'contact': 'Entre em Contato',

                //Home Titles
                'title': 'Meu Portifolio.',
                'profile': 'Desenvolvedor Full Stack & Estudante de Ciência da Computação',

                //About
                'about-name-l': 'Nome',
                'about-name': 'Mateus da Silva Rosario',
                'about-age-l': 'Idade',
                'about-age': '23',
                'about-degree-l': 'Graduação',
                'about-degree': 'Ciência da Computação',
                'about-uni-l': 'Universidade',
                'about-uni': 'Universidade Federal do Tocantins',
                'about-action-download': 'Baixar Currículo',
                'about-me': 'I am Mateus Rosario, a computer science student, with Full' +
                        'Stack development experiences and skills. I have knowledge of AI, image' +
                        'processing, project management, and software engineering. Very passionate' +
                        'about technology and development.',
            },
            'en': {
                // Headers
                'home': 'Home',
                'about': 'About Me',
                'portfolio': 'Portfolio',
                'cv': 'Curriculum',
                'contact': 'Contact Me',

                //Home Titles
                'title': 'My Portfolio.',
                'profile': 'Full Stack Developer & Computer Science Student',

                //About
                'about-name-l': 'Name',
                'about-name': 'Mateus da Silva Rosario',
                'about-age-l': 'Age',
                'about-age': '23',
                'about-degree-l': 'Degree',
                'about-degree': 'Computer Science',
                'about-uni-l': 'University',
                'about-uni': 'Federal Univercity of Tocantins',
                'about-action-download': 'Download Curriculum',
                'about-me': 'I am Mateus Rosario, a computer science student, with Full' +
                        'Stack development experiences and skills. I have knowledge of AI, image' +
                        'processing, project management, and software engineering. Very passionate' +
                        'about technology and development.',
            },
        }
    
        this.handleChange = handleChange;
        this.language = lg;
    }

    changeLg(language) {
        this.handleChange(new AppData(this.handleChange, language));
    }

    getString(code){
        return this.strings[this.language][code];
    }
}

export default AppData
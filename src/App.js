import React, { Component } from 'react'
import Home from './components/layouts/home/Home'
import About from './components/layouts/about/About'

export class AppData {
    static PTBR = 'pt-br';
    static EN = 'en';

    constructor(handleChange){
        this.handleChange = handleChange; 
        this.strings = {
            'pt-br': {
                'home': 'Início',
                'about-me': 'Sobre',
                'portfolio': 'Portifolio',
                'cv': 'Currículo',
                'title': 'Meu Portifolio.',
                'profile': 'Desenvolvedor Full Stack & Estudante de Ciência da Computação'
            },
            'en': {
                'home': 'Home',
                'about-me': 'About Me',
                'portfolio': 'Portfolio',
                'cv': 'Curriculum',
                'title': 'My Portfolio.',
                'profile': 'Full Stack Developer & Computer Science Student'
            },
        }
    
        this.language = AppData.EN;
    }

    changeLg(language) {
        this.language = language;
        this.handleChange(this);
    }

    getString(code){
        return this.strings[this.language][code];
    }
}

class App extends Component {
    state = {
        appData: new AppData(this.handleChangeAppData.bind(this)),
    }
    
    handleChangeAppData(appData) {
        this.setState(
            {
                appData: appData,
            }
        )
    }

    render() {
        const { appData } = this.state;        

        return (
            <div>
                <Home appData={appData}/>
                <About appData={appData}/>
            </div>
        )
    }
}

export default App
import React, { useState, useEffect } from 'react'
import Home from './components/layouts/home/Home'
import About from './components/layouts/about/About'
import Portfolio from './components/layouts/portfolio/Portfolio';
// import Curriculum from './components/layouts/curriculum/Curriculum';
import Contact from './components/layouts/contact/Contact';
import Header from './components/layouts/header/Header';
import AppData from './AppData';

const App = () => {
    const [appData, setAppData] = useState(null);


    const handleChangeAppData = (newAppData) => {
        setAppData(newAppData);
    }

    useEffect(() => {
        setAppData(new AppData((data) => {handleChangeAppData(data)}));
    }, []);

    if(appData === null){
        return (<div></div>)
    } else {
        return (
            <div>
                <Header appData={appData}></Header>
                <Home appData={appData}/>
                <About appData={appData}/>  
                <Portfolio appData={appData}/>
                {/* <Curriculum appData={appData}/> */}
                <Contact appData={appData}></Contact>
            </div>
        )
    }
}

export default App
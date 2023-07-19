import textData from '../src/assets/textData/text-data.json'

class AppData {
    static PTBR = 'pt-BR';
    static EN = 'en';

    constructor(handleChange, lg = AppData.EN){
        this.handleChange = handleChange;
        if(lg in textData){
            this.language = lg;
        }else{
            this.language = AppData.EN;
        }
    }

    changeLg(language) {
        this.handleChange(new AppData(this.handleChange, language));
    }

    getString(code){
        return textData[this.language][code]
    }
}

export default AppData
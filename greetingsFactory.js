function GreetFactory(){
    var radioValue;
    var greetMessage;
    var greetLanguage;
    var namesEntered = [];
    var username;

    function setRadioValue(radioBtn){
        radioValue = radioBtn;
    }
    function getRadioValue(){
        radioValue
    }

    function setLanguage(language){
        greetLanguage = language;
    }
    
    function getLanguage(){
        return greetLanguage;
    }

    function setGreetMessage(){
        if(getLanguage() === 'sepedi'){
            greetMessage = 'Dumelang, ';
        }
        else if(getLanguage() === 'zulu'){
            greetMessage = 'Sawubona, ';
        }
        else if(getLanguage() === 'english'){
            greetMessage = 'Hello, ';
        }
    }
    function getGreetMessage(){
        return greetMessage;
    }

    function setTheName(name){
        username = name;
    }
    function getTheName(){
        return username;
    }
    function setNamesGreeted(username){
        namesEntered = username;
    }

    function getNamesGreeted(){
        return namesEntered;
    }

    return{
        setRadioValue,
        getRadioValue,
        setLanguage,
        getLanguage,
        setGreetMessage,
        getGreetMessage,
        setTheName,
        getTheName,
        getNamesGreeted,
        setNamesGreeted
    }
}
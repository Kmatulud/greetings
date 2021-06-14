function GreetFactory(){
    var greetMessage;
    var greetLanguage;
    var greetedNames = [];
    var nameOfUser;

    function setLanguage(language){
        greetLanguage = language;
    }
    
    function getLanguage(){
        return greetLanguage;
    }

    function setGreetMessage(){
        if(getLanguage() === 'sepedi'){
            greetMessage = 'Dumela,';
        }if(getLanguage() === 'zulu'){
            greetMessage = 'Sawubona,';
        }if(getLanguage() === 'english'){
            greetMessage = 'Hello,';
        }
    }

    function getGreetMessage(){
        return greetMessage;
    }
    function setTheName(name){
        nameOfUser = name.charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    }
    function getTheName(){
        return nameOfUser;
    }
    function setNamesGreeted(theNames){
        greetedNames  = theNames;
    }

    function getNamesGreeted(){
        return greetedNames;
    }

    function checkNameExist(){
        if (!greetedNames.includes(nameOfUser)){
            greetedNames.push(nameOfUser);
        }
        return greetedNames;
    }


    return{
        setLanguage,
        getLanguage,
        setGreetMessage,
        getGreetMessage,
        setTheName,
        getTheName,
        getNamesGreeted,
        setNamesGreeted,
        checkNameExist,
    }
}
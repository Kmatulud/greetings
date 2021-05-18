var username = document.querySelector('#yourName');
var lang = document.querySelector('#language');
var btn = document.querySelector('.submit');
var greetLang = document.querySelector('.greeting');
var greetName = document.querySelector('.greetedName');
var counter = document.querySelector('.count');

btn.addEventListener('click', function(){
    const greetFactory = GreetFactory();

    var languages = document.querySelector('#language:checked');
    if(languages){
        var theLanguages = greetFactory.setRadioValue(languages.value);
       
    }
     console.log(languages);
    
});
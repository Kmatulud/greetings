var textfield = document.querySelector('#yourName');
var langRadioBtn = document.querySelector('#language');
var submitBtn = document.querySelector('.submit');
var resetBtn = document.querySelector('#reset');
var greetText = document.querySelector('.greeting');
var count = document.querySelector('.count');

const greetFactory = GreetFactory();


function greetings(){

    var languages = document.querySelector('#language:checked');

    var counter = Number(localStorage.getItem("stores")) || 0;

    if (!languages){
        greetText.innerHTML = "Please choose a language to be greeted in!";
        setTimeout(function(){
           greetText.innerHTML = '';
        },8000)
        greetText.style.color = 'orange';
    }

    greetFactory.setLanguage(languages.value);
    greetFactory.getLanguage();
    greetFactory.setTheName(textfield.value);
    greetFactory.setGreetMessage();

 function incrementCounter(){
        counter++;
        localStorage.setItem("stores", counter);
        counter = localStorage.getItem("stores");
        count.innerHTML =  counter;
    }
   
    if (greetFactory.getTheName()  !== '' && greetFactory.getTheName().match(/^[a-zA-Z]{3,15}$/gi)){
        greetText.innerHTML = greetFactory.getGreetMessage() + ' ' + greetFactory.getTheName();
        greetText.style.color = 'green';
        incrementCounter();
    }
    else{
        greetText.innerHTML = "Please enter a valid name!"
        setTimeout(function(){
           greetText.innerHTML = '';
        }, 8000)
        greetText.style.color = 'orange';
    }

    if (textfield.value === ''){
        greetText.innerHTML = "Please enter your name!";
        setTimeout(function(){
           greetText.innerHTML = '';
        }, 8000)
        greetText.style.color = 'orange';
    }

    var emptyArr = JSON.parse(localStorage.getItem('emptyArr')) || [];
    
    greetFactory.setNamesGreeted(emptyArr);
    greetFactory.getNamesGreeted();

    if(greetFactory.getTheName() != '' && !greetFactory.getNamesGreeted().includes(greetFactory.getTheName()) && textfield.value.match(/^[a-zA-Z]{3,15}$/ig) && document.querySelector("input[name='theRadio']:checked")){
        greetFactory.checkNameExist();
        localStorage.setItem('emptyArr', JSON.stringify(greetFactory.getNamesGreeted()));
        incrementCounter();
        count.innerHTML = JSON.parse(localStorage.getItem('emptyArr')).length;
    }

    textfield.value = '';
}

submitBtn.addEventListener('click', greetings);

resetBtn.addEventListener('click', function(){
    localStorage.clear();
    count.innerHTML = 0;
});

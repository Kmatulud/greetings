var textfield = document.querySelector('#yourName');
var langRadioBtn = document.querySelector('#language');
var submitBtn = document.querySelector('.submit');
var resetBtn = document.querySelector('#reset');
var greetText = document.querySelector('.greeting');
var count = document.querySelector('.count');

const greetFactory = GreetFactory();

count.innerHTML =  localStorage.getItem("stores");

function greetings(){
    var languages = document.querySelector('#language:checked');

    var counter = parseInt(localStorage.getItem("stores")) || 0;
    // var emptyArr = [].concat(textfield.value);


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
    
   
    if (greetFactory.getTheName()  !== '' && greetFactory.getTheName().match(/^[a-zA-Z]{3,15}$/gi)){
  
        greetText.innerHTML = greetFactory.getGreetMessage() + ' ' + greetFactory.getTheName();
        counter += 1;
        localStorage.setItem("stores", counter);
        counter = localStorage.getItem("stores");
        count.innerHTML =  counter;
        greetText.style.color = 'green'
    }
    else{
        greetText.innerHTML = "Please enter a valid name!"
        setTimeout(function(){
           greetText.innerHTML = '';
        }, 8000)
        greetText.style.color = 'orange'
    }
    // if (localStorage.getItem("stores")){
    //     counter =  localStorage.getItem("stores");
    //     count.innerHTML = counter;
    // }

    if (textfield.value === ''){
        greetText.innerHTML = "Please enter your name!";
        setTimeout(function(){
           greetText.innerHTML = '';
        }, 8000)
        greetText.style.color = 'orange'
    }
    // var items = '';

    // for(var j = 0; j < emptyArr.length; j++){

    //     items += emptyArr[j];
        
    //     if(items === textfield.value){
    //         count.innerHTML = localStorage.getItem("stores");
    //     }else {
    //         counter++;
    //         localStorage.setItem('stores', counter);
    //         count.innerHTML = localStorage.getItem('stores');
    //     }

    // }

    // greetFactory.setNamesGreeted(greetedNamesArray);
    // greetFactory.setTheName(textfield.value);
    

    // if(greetFactory.getTheName() != '' && !greetFactory.getNamesGreeted().includes(textfield.value) && greetFactory.getTheName().match(/[a-zA-Z]/ig) && document.querySelector("input[name='theRadio']:checked")){
    //     localStorage.setItem('greetedNamesArray', greetFactory.checkNameExist());
    //     counter++;
    // }
    textfield.value = '';

}

submitBtn.addEventListener('click', greetings);

resetBtn.addEventListener('click', function(){
    localStorage.clear();
    count.innerHTML = 0;
});
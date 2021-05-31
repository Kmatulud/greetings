var textfield = document.querySelector('#yourName');
var submitBtn = document.querySelector('.submit');
var resetBtn = document.querySelector('#reset');
var greetText = document.querySelector('.greeting');
var count = document.querySelector('.count');

const greetFactory = GreetFactory();

if (localStorage.getItem("emptyArr")){
    emptyArr = JSON.parse(localStorage.getItem('emptyArr')).length;
    count.innerHTML = emptyArr;
}

submitBtn.addEventListener('click', function(){

    var languages = document.querySelector('#language:checked');

    if (!languages){
        greetText.innerHTML = "Please choose a language to be greeted in!";
        greetText.style.color = 'orange';
        setTimeout(function(){
            greetText.innerHTML = "Greeting will appear here";
            greetText.style.color = "#710844";
        }, 4000)
    }

    greetFactory.setLanguage(languages.value);
    greetFactory.getLanguage();
    greetFactory.setTheName(textfield.value.trim());

    greetFactory.setGreetMessage();
   
    if (greetFactory.getTheName() !== "") {
        greetText.innerHTML = greetFactory.getGreetMessage() + " " + greetFactory.getTheName();
		greetText.style.color = "green";
	}

    var emptyArr = JSON.parse(localStorage.getItem('emptyArr')) || [];
    
    greetFactory.setNamesGreeted(emptyArr);
    greetFactory.getNamesGreeted();
    
    if(greetFactory.getTheName() != '' && !greetFactory.getNamesGreeted().includes(greetFactory.getTheName()) && greetFactory.getTheName().match(/^[a-zA-Z]{3,15}$/gi)){
        localStorage.setItem('emptyArr', JSON.stringify(greetFactory.checkNameExist()));
        count.innerHTML = JSON.parse(localStorage.getItem('emptyArr')).length ;
     }

    else if(!greetFactory.getTheName().match(/^[a-zA-Z]{3,15}$/gi)){
        greetText.innerHTML = "Invalid name!"
        greetText.style.color = "orange";
        setTimeout(function() {
			greetText.innerHTML = "Greeting will appear here";
			greetText.style.color = "#710844";
		}, 3000);
    }

    else{
        greetText.innerHTML = "That name has already been greeted!";
        greetText.style.color = "orange";
         setTimeout(function() {
			greetText.innerHTML = "Greeting will appear here";
			greetText.style.color = "#710844";
		}, 4000);
    }

	textfield.value = "";
    languages.checked = false;
})

resetBtn.addEventListener('click', function(){
    localStorage.clear();
    count.innerHTML = 0;
    greetText.innerHTML = "Greeting will appear here";
    greetText.style.color = "#710844";
});

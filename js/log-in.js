//selectors
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const small = document.querySelector('small');


//Event Handlers
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

//Functions
function checkInput(){
    const usernameValue = username.value.trim();
        
    const password1Value = password1.value.trim();


    if(usernameValue === ''){
        showError(username,"Username cannot be blank");

    }
    else if(!isUsernameValid(usernameValue)){
        showError(username,"Username is not valid");
    }
    else{
        showSuccess(username);
    }
    
    
    if(password1Value === ''){
        showError(password1,"Password cannot be blank");

    }
    else{
        showSuccess(password1);
    }
}

function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML = msg;
}

function showSuccess(input){
    const formControl = input.parentNode;
    formControl.className= 'form-control success'; 
}

function isUsernameValid(username){
    return /^([a-z]+)$/.test(username);
}
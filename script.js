//calculate
let button = document.getElementById('btn');

button.addEventListener('click',()=>{
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false, weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }
    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide a valid weight';
    }else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }
    if(height_status && weight_status){
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi < 18.5){
            result.innerHTML = 'Under weight : ' + bmi;
        }else if(bmi >=18.5 && bmi<=24.9){
            result.innerHTML = 'Normal weight :' + bmi;
        }else if(bmi >= 25 && bmi <= 29.9){
            result.innerHTML='Over weight :' + bmi;
        }else if(bmi >=30 && bmi <= 34.9){
            result.innerHTML='Obesity :' + bmi;
        }else{
            result.innerHTML ='Extreme Obesity :'+ bmi;
        }
    }else{
        alert('The form has errors');
        result.innerHTML='';
    }
});

//Music Player
let play = document.querySelector(".playpause-track");
let trackPlaying= false;
let audio = new Audio("./music/shape-of-my-heart_.mp3");
function playMusic(){
    if(trackPlaying === false){
    play.innerHTML='<i class="fa fa-pause-circle fa-4x"></i>';
    trackPlaying=true;
    audio.play();
     }else{
        audio.pause();
        play.innerHTML= '<i class="fas fa-play-circle fa-4x "></i>';
        trackPlaying=false;
        
     }
}
play.addEventListener('click',playMusic);



//Count Down Timer
let target_sec = new Date ("Aug 7, 2024 23:23:23").getTime();
function timer(){
    let now_sec = new Date().getTime();
    let remaining_sec = Math.floor((target_sec - now_sec)/1000);
    let day = Math.floor(remaining_sec/(3600*24));
    let hour = Math.floor((remaining_sec %(3600*24))/3600);
    let min = Math.floor((remaining_sec %3600)/60);
    let sec = Math.floor(remaining_sec %60);

    document.querySelector("#day").innerHTML = day;
    document.querySelector("#hour").innerHTML = hour;
    document.querySelector("#min").innerHTML = min;
    document.querySelector("#sec").innerHTML = sec;
}
setInterval(timer,1000);

//Form validation
const form = document.getElementById("form");
const username =document.getElementById("username");
const email =document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit',e=>{
    e.preventDefault();
   validateInput();
});

const setError = (element,message)=>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess =element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerHTML = '';
    inputControl.classList.remove('error');
    inputControl.classList.add('success');
}

const isValidEmail = email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>([\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInput =()=>{
    const usernameValue = username.value.trim();
   const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue ===''){
        setError(username,'Username is required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password,'Password is required');
    }else if(passwordValue.length < 8){
        setError (password,'Password must be at least 8 character.');
    }else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2,'Please confirm your password');
    }else if(password2Value !== passwordValue){
        setError(password2,"Passwords doesn't match");
    }else{
        setSuccess(password2);
    }
};

    
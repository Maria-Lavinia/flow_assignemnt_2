// window.addEventListener("DOMContentLoaded", start);


function start(){
document.querySelector("#button").addEventListener("submit", validateForm);
}

function validateForm(){
//   e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;


    if (name === "") {
        window.alert("Please enter your name properly.");
        // name.focus();
        return false;
    }else if(name.trim()){
        return true;
    }
 
    if (email === "") {
        window.alert("Please enter a valid e-mail address.");
        // email.focus();
        return false;
    }else if(email.trim()){
        return true;
    }
      
    if (message === "") {
        alert("Please enter your password");
        // password.focus();
        return false;
    } else if(message.trim()){
        return true;
    }

    return true;
}

const date = new Date();
const day = date.getDay();
console.log(day);
  
function notSubmit(){
if (day === 5 || day === 6 || day === 7){
    alert("You can't submit on this day! Come back on Monday!");
    document.querySelector("#button").removeEventListener("submit", validateForm );

}}
notSubmit();
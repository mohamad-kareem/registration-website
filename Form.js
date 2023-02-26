window.onload=function(){
const fullname=document.getElementById("fullname");
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirm=document.getElementById("confirm")
const submit=document.querySelector(".btn button")


function passwordvalidation(password){
    const exp=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return exp.test(password);
}
function emailvalidation(email){
    const exp=/^[^-\s@]+@[^-\s@]+\.[^-\s@]+$/;
    return exp.test(email);
}

submit.addEventListener("click",(e)=>{

    if (!passwordvalidation(password.value)){
        alert("password must contain: eight characters,one upper case letter,special characters");
        return;
    }
    
    if (!emailvalidation(email.value)){
        alert("email should contain @,no dashes,dot after @");
        return;
    }

    const userdata={
        Fullname:fullname.value,
        Username:username.value,
        Email:email.value,
        Password:password.value,
        Confirm:confirm.value
    }; 
    window.location.href = "user.html";
})
document.addEventListener("DOMContentLoaded", function(event) {
    const image = document.getElementById('img');
    image.classList.add('animated-image');
  });

}

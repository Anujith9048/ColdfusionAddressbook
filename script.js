function validateSignup(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var role = document.getElementById("role").value;

    
    if(username ===""){
        document.getElementById("errorUser").innerText="Enter a username";
        document.getElementById("username").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorUser").innerText=""; 
        document.getElementById("username").classList.remove("is-invalid");
    }
    if(email ===""){
        document.getElementById("errorEmail").innerText="Enter a valid email address";
        document.getElementById("email").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorEmail").innerText=""; 
        document.getElementById("email").classList.remove("is-invalid");
    }
    var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidate.test(email)){
        document.getElementById("errorEmail").innerText="Enter a valid email address!!";
        event.preventDefault();
    }
    else{
        document.getElementById("errorEmail").innerText=""; 
        document.getElementById("email").classList.remove("is-invalid");
    }
    if(pass1 ===""){
        document.getElementById("error").innerText="Enter a password";
        document.getElementById("pass1").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("error").innerText=""; 
        document.getElementById("pass1").classList.remove("is-invalid");
    }
    var passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(!pass1.match(passw)){
        document.getElementById("error").innerText="The password must contain 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        event.preventDefault();
    }   
    else{
        document.getElementById("error").innerText=""; 
        document.getElementById("pass1").classList.remove("is-invalid");
    }
    if(pass1 != pass2){
        document.getElementById("errorConfirm").innerText="Password doesnot match!";
        document.getElementById("pass1").classList.add("is-invalid");
        document.getElementById("pass2").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorConfirm").innerText=""; 
        document.getElementById("pass1").classList.remove("is-invalid");
        document.getElementById("pass2").classList.remove("is-invalid");
    }
    if(pass2 === ""){
        document.getElementById("errorConfirm").innerText="Confirm the password!!";
        document.getElementById("pass2").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorP").innerText=""; 
        document.getElementById("pass1").classList.remove("is-invalid");
    }
    if(role === "Choose..."){
        document.getElementById("errorRole").innerText="Select a role";
        document.getElementById("role").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorRole").innerText=""; 
        document.getElementById("role").classList.remove("is-invalid");
    }
}
function editValidate(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("desc").value;
    

    if(title === ""){
        document.getElementById("errorTit").innerText="Enter a title";
        document.getElementById("title").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorTit").innerText=""; 
        document.getElementById("title").classList.remove("is-invalid");
    }

    if(desc === ""){
        document.getElementById("errorDes").innerText="Enter Description";
        document.getElementById("desc").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("errorDes").innerText=""; 
        document.getElementById("desc").classList.remove("is-invalid");
    }

}

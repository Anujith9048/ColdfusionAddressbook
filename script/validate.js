function validate() {
    var profileImage = document.getElementById("profileImage").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(profileImage ===""){
        document.getElementById("nameErrorProfile").innerText = "Upload image!";
        document.getElementById("nameErrorProfile").classList.add("text-danger");
        event.preventDefault();
    } else {
        document.getElementById("nameErrorProfile").innerText = "";
    
    }

    if (name === "") {
        document.getElementById("nameError").innerText = "Enter your full name!";
        document.getElementById("nameError").classList.add("text-danger");
        document.getElementById("name").classList.add("is-invalid");
        event.preventDefault();
    } else {
        document.getElementById("nameError").innerText = "";
        document.getElementById("name").classList.remove("is-invalid");
    }
    if (email === "") {
        document.getElementById("emailError").innerText = "Enter email!";
        document.getElementById("emailError").classList.add("text-danger");
        document.getElementById("email").classList.add("is-invalid");
        event.preventDefault();
    } else {
        var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailValidate.test(email)){
            document.getElementById("emailError").classList.add("text-danger");
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("emailError").innerText="Enter a valid email address!!";
            event.preventDefault();
        }
        else{
            document.getElementById("emailError").innerText=""; 
            document.getElementById("email").classList.remove("is-invalid");
        }
    }
    

    if (userName === "") {
        document.getElementById("usernameError").innerText = "Enter a username!";
        document.getElementById("usernameError").classList.add("text-danger");
        document.getElementById("userName").classList.add("is-invalid");
        event.preventDefault();

    } else {
        document.getElementById("usernameError").innerText = "";
        document.getElementById("userName").classList.remove("is-invalid");
    }
    if (password === "") {
        document.getElementById("pass1Error").innerText = "Enter a password!";
        document.getElementById("pass1Error").classList.add("text-danger");
        document.getElementById("password").classList.add("is-invalid");
        event.preventDefault();
    } else {
        document.getElementById("pass1Error").innerText = "";
        document.getElementById("password").classList.remove("is-invalid");
    }
    var passw =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if(!password.match(passw)){
        document.getElementById("pass1Error").innerText="The password must contain 8 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter";
        document.getElementById("pass1Error").classList.add("text-danger");
        document.getElementById("password").classList.add("is-invalid");
        event.preventDefault();
    }   
    else{
        document.getElementById("pass1Error").innerText=""; 
        document.getElementById("password").classList.remove("is-invalid");
    }

    if(password != confirmPassword){
        document.getElementById("pass2Error").innerText="Password doesnot match!";
        document.getElementById("password").classList.add("is-invalid");
        document.getElementById("pass2").classList.add("is-invalid");
        event.preventDefault();
    }
    else{
        document.getElementById("pass2Error").innerText=""; 
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("confirmPassword").classList.remove("is-invalid");
    }

    if (confirmPassword === "") {
        document.getElementById("pass2Error").innerText = "Confirm password!";
        document.getElementById("pass2Error").classList.add("text-danger");
        document.getElementById("confirmPassword").classList.add("is-invalid");
        event.preventDefault();

    } else {
        document.getElementById("pass2Error").innerText = "";
        document.getElementById("confirmPassword").classList.remove("is-invalid");
    }
}

function validateLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email===""){
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("emailError").innerText ="Enter email address";
        event.preventDefault();
    }
    else{
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("emailError").innerText ="";
    }
    var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidate.test(email)){
        document.getElementById("emailError").classList.add("text-danger");
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("emailError").innerText="Enter a valid email address!!";
        event.preventDefault();
    }
    else{
        document.getElementById("emailError").innerText=""; 
        document.getElementById("email").classList.remove("is-invalid");
    }

    if (password===""){
        document.getElementById("password").classList.add("is-invalid");
        document.getElementById("passwordError").innerText ="Enter password";
        event.preventDefault();
    }
    else{
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("passwordError").innerText ="";
    }
}

function modalValidate(event){
    var isValid = true;
    var title = document.getElementById("title").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var image = document.getElementById("image").value;
    var address = document.getElementById("address").value;
    var street = document.getElementById("street").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pincode = document.getElementById("pincode").value;

   
    if (image === ""){
        document.getElementById("image").classList.add("is-invalid");
        document.getElementById("errorImage").innerText = "Upload an image";
        isValid = false;
    }
    else{
        document.getElementById("image").classList.remove("is-invalid");
        document.getElementById("errorImage").innerText = "";
        isValid = true;
    }
    if (title === ""){
        document.getElementById("title").classList.add("is-invalid");
        document.getElementById("errorTitle").innerText = "Select your title";
        isValid = false;
    }
    else{
        document.getElementById("title").classList.remove("is-invalid");
        document.getElementById("errorTitle").innerText = "";
        isValid = true;
    }
    if (fname === ""){
        document.getElementById("fname").classList.add("is-invalid");
        document.getElementById("errorFname").innerText = "Enter First name";
        isValid = false;
    }
    else{
        document.getElementById("fname").classList.remove("is-invalid");
        document.getElementById("errorFname").innerText = "";
        isValid = true;
    }
    if (lname === ""){
        document.getElementById("lname").classList.add("is-invalid");
        document.getElementById("errorLname").innerText = "Enter Last name";
        isValid = false;
    }
    else{
        document.getElementById("lname").classList.remove("is-invalid");
        document.getElementById("errorLname").innerText = "";
        isValid = true;
    }
    if (gender === ""){
        document.getElementById("gender").classList.add("is-invalid");
        document.getElementById("errorGender").innerText = "Select gender";
        isValid = false;
    }
    else{
        document.getElementById("gender").classList.remove("is-invalid");
        document.getElementById("errorGender").innerText = "";
        isValid = true;
    }
    if (dob === ""){
        document.getElementById("dob").classList.add("is-invalid");
        document.getElementById("errorDob").innerText = "Select date of birth";
        isValid = false;
    }
    else{
        document.getElementById("dob").classList.remove("is-invalid");
        document.getElementById("errorDob").innerText = "";
        isValid = true;
    }
    if (address === ""){
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Enter address";
        isValid = false;
    }
    else{
        document.getElementById("address").classList.remove("is-invalid");
        document.getElementById("errorAddress").innerText = "";
        isValid = true;
    }
    if (street === ""){
        document.getElementById("street").classList.add("is-invalid");
        document.getElementById("errorStreet").innerText = "Enter street";
        isValid = false;
    }
    else{
        document.getElementById("street").classList.remove("is-invalid");
        document.getElementById("errorStreet").innerText = "";
        isValid = true;
    }
    if (phone === "") {
        document.getElementById("phone").classList.add("is-invalid");
        document.getElementById("errorPhone").innerText = "Enter phone number";
        isValid = false;
    } else {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(phoneNum)) { 
            document.getElementById("phone").classList.add("is-invalid");
            document.getElementById("errorPhone").innerText = "Enter a valid phone number";
            isValid = false;
        } else {
            document.getElementById("phone").classList.remove("is-invalid");
            document.getElementById("errorPhone").innerText = "";
            isValid = true;
        }
    }
    
    if (email === ""){
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "Enter email";
        event.preventDefault();
        isValid = false;
    }
    else{
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("errorEmail").innerText = "";
        isValid = true;
    }
    if (pincode === ""){
        document.getElementById("pincode").classList.add("is-invalid");
        document.getElementById("errorPincode").innerText = "Enter pincode";
        isValid = false;
    }
    else{
        document.getElementById("pincode").classList.remove("is-invalid");
        document.getElementById("errorPincode").innerText = "";
        isValid = true;
    }
    var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidate.test(email)){
        document.getElementById("errorEmail").classList.add("text-danger");
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText="Enter a valid email address!!";
        isValid = false;
    }
    else{
        document.getElementById("errorEmail").innerText=""; 
        document.getElementById("email").classList.remove("is-invalid");
        isValid = true;
    }

    if(!isValid){
        event.preventDefault()
    }
}
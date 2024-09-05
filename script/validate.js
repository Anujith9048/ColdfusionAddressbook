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
    } 
    else {
        var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailValidate.test(email)){
            document.getElementById("emailError").classList.add("text-danger");
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("emailError").innerText="Enter a valid email address email must contain (@example.com)!!";
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
        var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailValidate.test(email)){
            document.getElementById("emailError").classList.add("text-danger");
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("emailError").innerText="Email should be in (@example.com) format!!";
            event.preventDefault();
        }
        else{
            document.getElementById("emailError").innerText=""; 
            document.getElementById("email").classList.remove("is-invalid");
            document.getElementById("email").classList.add("is-valid");
        }
    }
    if (password===""){
        document.getElementById("password").classList.add("is-invalid");
        document.getElementById("passwordError").innerText ="Enter password";
        event.preventDefault();
    }
    else{
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
        document.getElementById("passwordError").innerText ="";
    }
}

function modalValidate(){
    var isValid = true;
    var title = document.getElementById("title").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var street = document.getElementById("street").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pincode = document.getElementById("pincode").value;

    if (title === ""){
        document.getElementById("title").classList.add("is-invalid");
        document.getElementById("errorTitle").innerText = "Select your title";
        isValid = false;
    }
    else{
        document.getElementById("title").classList.remove("is-invalid");
        document.getElementById("title").classList.add("is-valid");
        document.getElementById("errorTitle").innerText = "";
    }
    if (fname === ""){
        document.getElementById("fname").classList.add("is-invalid");
        document.getElementById("errorFname").innerText = "Enter First name";
        isValid = false;
    }
    else{
        document.getElementById("fname").classList.remove("is-invalid");
        document.getElementById("fname").classList.add("is-valid");
        document.getElementById("errorFname").innerText = "";
        
        if(fname.length >50){
            document.getElementById("errorFname").innerText = "First name should only contain less than 50 characters";
            isValid = false;
        }
        else{
            document.getElementById("fname").classList.remove("is-invalid");
            document.getElementById("fname").classList.add("is-valid");
            document.getElementById("errorFname").innerText = "";
        }
    }
    if (lname === ""){
        document.getElementById("lname").classList.add("is-invalid");
        document.getElementById("errorLname").innerText = "Enter Last name";
        isValid = false;
    }
    else{
        document.getElementById("lname").classList.remove("is-invalid");
        document.getElementById("lname").classList.add("is-valid");
        document.getElementById("errorLname").innerText = "";

        if(lname.length >50){
            document.getElementById("errorLname").innerText = "Last name should only contain less than 50 characters";
            isValid = false;
        }
        else{
            document.getElementById("lname").classList.remove("is-invalid");
            document.getElementById("lname").classList.add("is-valid");
            document.getElementById("errorLname").innerText = "";
        }
    }
    if (gender === ""){
        document.getElementById("gender").classList.add("is-invalid");
        document.getElementById("errorGender").innerText = "Select gender";
        isValid = false;
    }
    else{
        document.getElementById("gender").classList.remove("is-invalid");
        document.getElementById("gender").classList.add("is-valid");
        document.getElementById("errorGender").innerText = "";
    }
    if (dob === ""){
        document.getElementById("dob").classList.add("is-invalid");
        document.getElementById("errorDob").innerText = "Select date of birth";
        isValid = false;
    } else {
        document.getElementById("dob").classList.remove("is-invalid");
        document.getElementById("dob").classList.add("is-valid");
        document.getElementById("errorDob").innerText = "";
    
        const today = new Date();
        const dateOfBirth = new Date(dob);
    
        today.setHours(0, 0, 0, 0);
        dateOfBirth.setHours(0, 0, 0, 0);
    
        if (dateOfBirth > today) {
            document.getElementById("dob").classList.add("is-invalid");
            document.getElementById("errorDob").innerText = "Select date before today";
            isValid = false;
        } else {
            document.getElementById("dob").classList.remove("is-invalid");
            document.getElementById("dob").classList.add("is-valid");
            document.getElementById("errorDob").innerText = "";
        }
    }
    

    if (address === ""){
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Enter address";
        isValid = false;
    }
    else{
        document.getElementById("address").classList.remove("is-invalid");
        document.getElementById("address").classList.add("is-valid");
        document.getElementById("errorAddress").innerText = "";

        if(address.length >150){
            document.getElementById("errorAddress").innerText = "Address should only contain less than 150 characters";
            isValid = false;
        }
        else{

            const tagRegex = /<.*?>/g;
            if (tagRegex.test(address)) {
                document.getElementById("address").classList.add("is-invalid");
                document.getElementById("errorAddress").innerText = "<tags> are not allowed";
                isValid = false;
            }
            else{
                document.getElementById("address").classList.remove("is-invalid");
                document.getElementById("address").classList.add("is-valid");
                document.getElementById("errorAddress").innerText = "";
            }
    }
    if (street === ""){
        document.getElementById("street").classList.add("is-invalid");
        document.getElementById("errorStreet").innerText = "Enter street";
        isValid = false;
    }
    else{
        document.getElementById("street").classList.remove("is-invalid");
        document.getElementById("street").classList.add("is-valid");
        document.getElementById("errorStreet").innerText = "";

        if(street.length >50){
            document.getElementById("errorStreet").innerText = "Street name should only contain less than 50 characters";
            isValid = false;
        }
        else{
            document.getElementById("street").classList.remove("is-invalid");
            document.getElementById("street").classList.add("is-valid");
            document.getElementById("errorStreet").innerText = "";
        }
    }
    if (phone === "") {
        document.getElementById("phone").classList.add("is-invalid");
        document.getElementById("errorPhone").innerText = "Enter phone number";
        isValid = false;
    } 
    else {
        var cleanedPhone = phone.replace(/[^\d+]/g, '');
        
        if (cleanedPhone.startsWith("+91")) {
            cleanedPhone = cleanedPhone.replace("+91", "");
            if (cleanedPhone.length !== 10) {
                document.getElementById("phone").classList.add("is-invalid");
                document.getElementById("errorPhone").innerText = "Enter a 10 digit number after the country code (+91)";
                isValid = false;
            } else {
                document.getElementById("phone").classList.remove("is-invalid");
                document.getElementById("phone").classList.add("is-valid");
                document.getElementById("errorPhone").innerText = "";
            }
        } else {
            if (cleanedPhone.length !== 10) {
                document.getElementById("phone").classList.add("is-invalid");
                document.getElementById("errorPhone").innerText = "Enter a 10 digit number";
                isValid = false;
            } else if (!/^\d+$/.test(cleanedPhone)) {
                document.getElementById("phone").classList.add("is-invalid");
                document.getElementById("errorPhone").innerText = "Phone number should contain only digits";
                isValid = false;
            } else {
                document.getElementById("phone").classList.remove("is-invalid");
                document.getElementById("phone").classList.add("is-valid");
                document.getElementById("errorPhone").innerText = "";
            }
        }
    }
    
    
    if (email === ""){
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "Enter email";
        isValid = false;
    }
    else{
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
            document.getElementById("email").classList.add("is-valid");
        }
    }
    if (pincode === ""){
        document.getElementById("pincode").classList.add("is-invalid");
        document.getElementById("errorPincode").innerText = "Enter pincode";
        isValid = false;
    }
    else{
        if(!pincode.match(/^\d{6}$/)){
            document.getElementById("pincode").classList.add("is-invalid");
            document.getElementById("errorPincode").innerText = "Enter a valid 6 digit pincode";
            isValid = false;
        }
        else{
            document.getElementById("pincode").classList.remove("is-invalid");
            document.getElementById("pincode").classList.add("is-valid");
            document.getElementById("errorPincode").innerText = "";
        }
    }

    if(!isValid){
       return false;
    }
    else{
        return true;
    }
}

function validateImage(event){

    var Image=document.getElementById("image").value;
    if(Image ===""){
        document.getElementById("image").classList.add("is-invalid");
        document.getElementById("resultImage").innerText="Upload an image!";
        event.preventDefault();
    }
    else{
        document.getElementById("image").classList.remove("is-invalid");
        document.getElementById("resultImage").innerText="";
    }
}
}
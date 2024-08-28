function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

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
        document.getElementById("emailError").innerText = "";
        document.getElementById("emailError").classList.remove("is-invalid");
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
document.getElementById('phone').addEventListener('input', function (e) {
    alert("hey")
    this.value = this.value.replace(/[^0-9]/g, '');
});
function modalValidate(){
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
    if (title === ""){
        document.getElementById("title").classList.add("is-invalid");
        document.getElementById("errorTitle").innerText = "Select your title";
        event.preventDefault();
    }
    else{
        document.getElementById("title").classList.remove("is-invalid");
        document.getElementById("errorTitle").innerText = "";
    }
    if (fname === ""){
        document.getElementById("fname").classList.add("is-invalid");
        document.getElementById("errorFname").innerText = "Enter First name";
        event.preventDefault();
    }
    else{
        document.getElementById("fname").classList.remove("is-invalid");
        document.getElementById("errorFname").innerText = "";
    }
    if (lname === ""){
        document.getElementById("lname").classList.add("is-invalid");
        document.getElementById("errorLname").innerText = "Enter Last name";
        event.preventDefault();
    }
    else{
        document.getElementById("lname").classList.remove("is-invalid");
        document.getElementById("errorLname").innerText = "";
    }
    if (gender === ""){
        document.getElementById("gender").classList.add("is-invalid");
        document.getElementById("errorGender").innerText = "Select gender";
        event.preventDefault();
    }
    else{
        document.getElementById("gender").classList.remove("is-invalid");
        document.getElementById("errorGender").innerText = "";
    }
    if (dob === ""){
        document.getElementById("dob").classList.add("is-invalid");
        document.getElementById("errorDob").innerText = "Select date of birth";
        event.preventDefault();
    }
    else{
        document.getElementById("dob").classList.remove("is-invalid");
        document.getElementById("errorDob").innerText = "";
    }
    if (image === ""){
        document.getElementById("image").classList.add("is-invalid");
        document.getElementById("errorImage").innerText = "Upload an image";
        event.preventDefault();
    }
    else{
        document.getElementById("image").classList.remove("is-invalid");
        document.getElementById("errorImage").innerText = "";
    }
    if (address === ""){
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Enter address";
        event.preventDefault();
    }
    else{
        document.getElementById("address").classList.remove("is-invalid");
        document.getElementById("errorAddress").innerText = "";
    }
    if (street === ""){
        document.getElementById("street").classList.add("is-invalid");
        document.getElementById("errorStreet").innerText = "Enter street";
        event.preventDefault();
    }
    else{
        document.getElementById("street").classList.remove("is-invalid");
        document.getElementById("errorStreet").innerText = "";
    }
    if (phone === "") {
        document.getElementById("phone").classList.add("is-invalid");
        document.getElementById("errorPhone").innerText = "Enter phone number";
        event.preventDefault();
    } else {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(phoneNum)) { 
            document.getElementById("phone").classList.add("is-invalid");
            document.getElementById("errorPhone").innerText = "Enter a valid phone number";
            event.preventDefault();
        } else {
            document.getElementById("phone").classList.remove("is-invalid");
            document.getElementById("errorPhone").innerText = "";
        }
    }
    
    if (email === ""){
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "Enter email";
        event.preventDefault();
    }
    else{
        document.getElementById("email").classList.remove("is-invalid");
        document.getElementById("errorEmail").innerText = "";
    }
    if (pincode === ""){
        document.getElementById("pincode").classList.add("is-invalid");
        document.getElementById("errorPincode").innerText = "Enter pincode";
        event.preventDefault();
    }
    else{
        document.getElementById("pincode").classList.remove("is-invalid");
        document.getElementById("errorPincode").innerText = "";
    }
    var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidate.test(email)){
        document.getElementById("errorEmail").classList.add("text-danger");
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText="Enter a valid email address!!";
        event.preventDefault();
    }
    else{
        document.getElementById("errorEmail").innerText=""; 
        document.getElementById("email").classList.remove("is-invalid");
    }
}

function modalValidateEdited(){
    var title = document.getElementById("titleEdited").value;
    var fname = document.getElementById("fnameEdited").value;
    var lname = document.getElementById("lnameEdited").value;
    var gender = document.getElementById("genderEdited").value;
    var dob = document.getElementById("dobEdited").value;
    var image = document.getElementById("imageEdited").value;
    var address = document.getElementById("addressEdited").value;
    var street = document.getElementById("streetEdited").value;
    var phone = document.getElementById("phoneEdited").value;
    var email = document.getElementById("emailEdited").value;
    var pincode = document.getElementById("pincodeEdited").value;
    if (title === ""){
        document.getElementById("titleEdited").classList.add("is-invalid");
        document.getElementById("errorTitleEdited").innerText = "Select your title";
        event.preventDefault();
    }
    else{
        document.getElementById("titleEdited").classList.remove("is-invalid");
        document.getElementById("errorTitleEdited").innerText = "";
    }
    if (fname === ""){
        document.getElementById("fnameEdited").classList.add("is-invalid");
        document.getElementById("errorFnameEdited").innerText = "Enter First name";
        event.preventDefault();
    }
    else{
        document.getElementById("fnameEdited").classList.remove("is-invalid");
        document.getElementById("errorFnameEdited").innerText = "";
    }
    if (lname === ""){
        document.getElementById("lnameEdited").classList.add("is-invalid");
        document.getElementById("errorLnameEdited").innerText = "Enter Last name";
        event.preventDefault();
    }
    else{
        document.getElementById("lnameEdited").classList.remove("is-invalid");
        document.getElementById("errorLnameEdited").innerText = "";
    }
    if (gender === ""){
        document.getElementById("genderEdited").classList.add("is-invalid");
        document.getElementById("errorGenderEdited").innerText = "Select gender";
        event.preventDefault();
    }
    else{
        document.getElementById("genderEdited").classList.remove("is-invalid");
        document.getElementById("errorGenderEdited").innerText = "";
    }
    if (dob === ""){
        document.getElementById("dobEdited").classList.add("is-invalid");
        document.getElementById("errorDobEdited").innerText = "Select date of birth";
        event.preventDefault();
    }
    else{
        document.getElementById("dobEdited").classList.remove("is-invalid");
        document.getElementById("errorDobEdited").innerText = "";
    }
    if (image === ""){
        document.getElementById("imageEdited").classList.add("is-invalid");
        document.getElementById("errorImageEdited").innerText = "Upload an image";
        event.preventDefault();
    }
    else{
        document.getElementById("imageEdited").classList.remove("is-invalid");
        document.getElementById("errorImageEdited").innerText = "";
    }
    if (address === ""){
        document.getElementById("addressEdited").classList.add("is-invalid");
        document.getElementById("errorAddressEdited").innerText = "Enter address";
        event.preventDefault();
    }
    else{
        document.getElementById("addressEdited").classList.remove("is-invalid");
        document.getElementById("errorAddressEdited").innerText = "";
    }
    if (street === ""){
        document.getElementById("streetEdited").classList.add("is-invalid");
        document.getElementById("errorStreetEdited").innerText = "Enter street";
        event.preventDefault();
    }
    else{
        document.getElementById("streetEdited").classList.remove("is-invalid");
        document.getElementById("errorStreetEdited").innerText = "";
    }
    if (phone === "") {
        document.getElementById("phoneEdited").classList.add("is-invalid");
        document.getElementById("errorPhoneEdited").innerText = "Enter phone number";
        event.preventDefault();
    } else {
        var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(phoneNum)) { 
            document.getElementById("phoneEdited").classList.add("is-invalid");
            document.getElementById("errorPhoneEdited").innerText = "Enter a valid phone number";
            event.preventDefault();
        } else {
            document.getElementById("phoneEdited").classList.remove("is-invalid");
            document.getElementById("errorPhoneEdited").innerText = "";
        }
    }
    
    if (email === ""){
        document.getElementById("emailEdited").classList.add("is-invalid");
        document.getElementById("errorEmailEdited").innerText = "Enter email";
        event.preventDefault();
    }
    else{
        document.getElementById("emailEdited").classList.remove("is-invalid");
        document.getElementById("errorEmailEdited").innerText = "";
    }
    if (pincode === ""){
        document.getElementById("pincodeEdited").classList.add("is-invalid");
        document.getElementById("errorPincodeEdited").innerText = "Enter pincode";
        event.preventDefault();
    }
    else{
        document.getElementById("pincodeEdited").classList.remove("is-invalid");
        document.getElementById("errorPincodeEdited").innerText = "";
    }
    var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailValidate.test(email)){
        document.getElementById("errorEmailEdited").classList.add("text-danger");
        document.getElementById("emailEdited").classList.add("is-invalid");
        document.getElementById("errorEmailEdited").innerText="Enter a valid email address!!";
        event.preventDefault();
    }
    else{
        document.getElementById("errorEmailEdited").innerText=""; 
        document.getElementById("emailEdited").classList.remove("is-invalid");
    }


}

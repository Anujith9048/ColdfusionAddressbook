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
        document.getElementById("email").setAttribute("title", "Email id is required for login"); 
        event.preventDefault();
    }
    else{
        var emailValidate= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailValidate.test(email)){
            document.getElementById("emailError").classList.add("text-danger");
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("emailError").innerText="Email should be in (@****.com) format!!";
            document.getElementById("email").setAttribute("title", "This is not a valid email id"); 
            event.preventDefault();
        }
        else{
            document.getElementById("emailError").innerText=""; 
            document.getElementById("email").classList.remove("is-invalid");
            document.getElementById("email").classList.add("is-valid");
            document.getElementById("email").removeAttribute("title"); 
        }
    }
    if (password===""){
        document.getElementById("password").classList.add("is-invalid");
        document.getElementById("passwordError").innerText ="Enter password";
        document.getElementById("password").setAttribute("title", "Password required for login"); 
        event.preventDefault();
    }
    else{
        document.getElementById("password").classList.remove("is-invalid");
        document.getElementById("password").classList.add("is-valid");
        document.getElementById("passwordError").innerText ="";
    }
}

function modalValidate() {
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

    // Title validation
    if (title === "") {
        document.getElementById("title").classList.add("is-invalid");
        document.getElementById("errorTitle").innerText = "Select your title";
        document.getElementById("title").setAttribute("title", "This field is required");
        isValid = false;
    } else {
        document.getElementById("title").classList.remove("is-invalid");
        document.getElementById("title").classList.add("is-valid");
        document.getElementById("title").removeAttribute("title");
        document.getElementById("errorTitle").innerText = "";
    }

    // First name validation
    if (fname === "") {
        document.getElementById("fname").classList.add("is-invalid");
        document.getElementById("errorFname").innerText = "Enter First name";
        document.getElementById("fname").setAttribute("title", "This field is required");
        isValid = false;
    } else if (fname.length > 50) {
        document.getElementById("fname").classList.add("is-invalid");
        document.getElementById("errorFname").innerText = "First name should be less than 50 characters";
        document.getElementById("fname").setAttribute("title", "Enter First name less than 50 characters");
        isValid = false;
    } else {
        document.getElementById("fname").classList.remove("is-invalid");
        document.getElementById("fname").classList.add("is-valid");
        document.getElementById("fname").removeAttribute("title");
        document.getElementById("errorFname").innerText = "";
    }

    // Last name validation
    if (lname === "") {
        document.getElementById("lname").classList.add("is-invalid");
        document.getElementById("lname").setAttribute("title", "This field is required");
        document.getElementById("errorLname").innerText = "Enter Last name";
        isValid = false;
    } else if (lname.length > 50) {
        document.getElementById("lname").classList.add("is-invalid");
        document.getElementById("errorLname").innerText = "Last name should be less than 50 characters";
        document.getElementById("lname").setAttribute("title", "Enter Last name less than 50 charecters");
        isValid = false;
    } else {
        document.getElementById("lname").classList.remove("is-invalid");
        document.getElementById("lname").classList.add("is-valid");
        document.getElementById("lname").removeAttribute("title");
        document.getElementById("errorLname").innerText = "";
    }

    // Gender validation
    if (gender === "") {
        document.getElementById("gender").classList.add("is-invalid");
        document.getElementById("errorGender").innerText = "Select gender";
        document.getElementById("gender").setAttribute("title", "This field is required");
        isValid = false;
    } else {
        document.getElementById("gender").classList.remove("is-invalid");
        document.getElementById("gender").classList.add("is-valid");
        document.getElementById("errorGender").innerText = "";
        document.getElementById("gender").removeAttribute("title");
    }

    if (dob === "") {
        document.getElementById("dob").classList.add("is-invalid");
        document.getElementById("errorDob").innerText = "Select date of birth";
        document.getElementById("dob").setAttribute("title", "This field is required");
        isValid = false;
    } else {
        const today = new Date();
        const dateOfBirth = new Date(dob);
        if (dateOfBirth >= today) {
            document.getElementById("dob").classList.add("is-invalid");
            document.getElementById("errorDob").innerText = "Select a date before today";
            document.getElementById("dob").setAttribute("title", `${fname} is not in the world`);
            isValid = false;
        } else {
            document.getElementById("dob").classList.remove("is-invalid");
            document.getElementById("dob").classList.add("is-valid");
            document.getElementById("dob").removeAttribute("title");
            document.getElementById("errorDob").innerText = "";
        }
    }

    // Address validation
    if (address === "") {
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Enter address";
        document.getElementById("address").setAttribute("title", "This field is required");
        isValid = false;
    } else if (address.length > 150) {
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Address should be less than 150 characters";
        document.getElementById("address").setAttribute("title", "Enter address less than 150 characters");
        isValid = false;
    } else if (/<.*?>/g.test(address)) {
        document.getElementById("address").classList.add("is-invalid");
        document.getElementById("errorAddress").innerText = "Tags are not allowed in the address";
        document.getElementById("address").setAttribute("title", "Enter your address!! not program 😂");
        isValid = false;
    } else {
        document.getElementById("address").classList.remove("is-invalid");
        document.getElementById("address").classList.add("is-valid");
        document.getElementById("address").removeAttribute("title");
        document.getElementById("errorAddress").innerText = "";
    }

    // Street validation
    if (street === "") {
        document.getElementById("street").classList.add("is-invalid");
        document.getElementById("errorStreet").innerText = "Enter street";
        document.getElementById("street").setAttribute("title", "This field is required");
        isValid = false;
    } else if (street.length > 50) {
        document.getElementById("street").classList.add("is-invalid");
        document.getElementById("errorStreet").innerText = "Street name should be less than 50 characters";
        document.getElementById("street").setAttribute("title", "Enter street name less than 50 characters");
        isValid = false;
    } else {
        document.getElementById("street").classList.remove("is-invalid");
        document.getElementById("street").classList.add("is-valid");
        document.getElementById("street").removeAttribute("title");
        document.getElementById("errorStreet").innerText = "";
    }

    // Phone number validation
    if (phone === "") {
        document.getElementById("phone").classList.add("is-invalid");
        document.getElementById("errorPhone").innerText = "Enter phone number";
        document.getElementById("phone").setAttribute("title", "This field is required");
        isValid = false;
    } else {
        var cleanedPhone = phone.replace(/[^\d+]/g, '');
        if (cleanedPhone.startsWith("+91")) {
            cleanedPhone = cleanedPhone.replace("+91", "");
        }

        if (cleanedPhone.length !== 10 || !/^\d+$/.test(cleanedPhone)) {
            document.getElementById("phone").classList.add("is-invalid");
            document.getElementById("phone").setAttribute("title", "Enter 10-digit phone number");
            document.getElementById("errorPhone").innerText = "Enter a valid 10-digit phone number";
            isValid = false;
        } else {
            document.getElementById("phone").classList.remove("is-invalid");
            document.getElementById("phone").classList.add("is-valid");
            document.getElementById("phone").removeAttribute("title");
            document.getElementById("errorPhone").innerText = "";
        }
    }

    // Email validation
    if (email === "") {
        document.getElementById("email").classList.add("is-invalid");
        document.getElementById("errorEmail").innerText = "Enter email";
        document.getElementById("email").setAttribute("title", "This field is required");
        isValid = false;
    } else {
        var emailValidate = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailValidate.test(email)) {
            document.getElementById("email").classList.add("is-invalid");
            document.getElementById("errorEmail").innerText = "Enter a valid email address";
            document.getElementById("email").setAttribute("title", "An email id should be in @***.com");
            isValid = false;
        } else {
            document.getElementById("email").classList.remove("is-invalid");
            document.getElementById("email").classList.add("is-valid");
            document.getElementById("email").removeAttribute("title");
            document.getElementById("errorEmail").innerText = "";
        }
    }

    // Pincode validation
    if (pincode === "") {
        document.getElementById("pincode").classList.add("is-invalid");
        document.getElementById("errorPincode").innerText = "Enter pincode";
        document.getElementById("pincode").setAttribute("title", "This field is required");
        isValid = false;
    } else if (!/^\d{6}$/.test(pincode)) {
        document.getElementById("pincode").classList.add("is-invalid");
        document.getElementById("errorPincode").innerText = "Enter a valid 6-digit pincode";
        document.getElementById("pincode").setAttribute("title", "Pincode should have 6 digit");
        isValid = false;
    } else {
        document.getElementById("pincode").classList.remove("is-invalid");
        document.getElementById("pincode").classList.add("is-valid");
        document.getElementById("pincode").removeAttribute("title");
        document.getElementById("errorPincode").innerText = "";
    }

    return isValid;
}

function excelValidate(){
    if(document.getElementById("fileUpload").value ===""){
        document.getElementById("fileUpload").classList.add("is-invalid");
        document.getElementById("excelUploadError").innerText="Select an Excel file";
        return false;
    }
    else{
        document.getElementById("fileUpload").classList.remove("is-invalid");
        document.getElementById("fileUpload").classList.add("is-valid");
        document.getElementById("excelUploadError").innerText="";
        return true;
    }
}

// Function to Google signup
function googleSignup() {
    let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
    let form = document.createElement('form');

    form.setAttribute('method', 'GET');
    form.setAttribute('action', oauth2Endpoint);

    let param = {
        "client_id": "811341109696-67lnbab6jeath4ljtec32iq5ndfdo2e4.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:8500/TASK/AddressBook/views/homePage.cfm",
        
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
        "include_granted_scopes": 'true',
        'state': 'pass-through-value'
    };

    for (let p in param) {
        let input = document.createElement('input');
        input.setAttribute('type', 'hidden');
        input.setAttribute('name', p);
        input.setAttribute('value', param[p]);
        form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit();
}

window.onload = function () {
    if (window.location.hash) {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const accessToken = params.get('access_token');

        if (accessToken) {
            
            fetch(`https://www.googleapis.com/oauth2/v2/userinfo?access_token=${accessToken}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    saveUserToDatabase(data);
                })
                .catch(err => {
                    console.error('Error fetching user info:', err);
                });
        }
    }
};

function saveUserToDatabase(userData) {
    $.ajax({
        url: '../components/controller.cfc?method=saveOrLoginUser',
        method: 'POST',
        data: {
            email: userData.email,
            name: userData.name,
            picture: userData.picture || ''
        },
        success: function (response) {
            let result = JSON.parse(response);
            if (result.result) {
                window.location.href = result.redirect;
            } else {
                console.error('Login/registration failed:', result.error);
            }
        },
        error: function(error) {
            console.log("An error occurred: " + error);
        }
    });
}

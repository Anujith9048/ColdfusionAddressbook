$(document).ready(function(){

//SIGNUP//
    $("#register").click(function(){
        event.preventDefault();
        $.ajax({
            url: '../components/controller.cfc',
            method: 'post',
            data: {
                method: "signupUser",
                name: $("#name").val(),
                email: $("#email").val(),
                userName: $("#userName").val(),
                password: $("#password").val()
            },
            dataType: "json",
            success: function (response) {
                if (response.result) {
                    $("#result").text("Your account has been created please login.");
                    $("#result").removeClass("text-danger");
                    $("#result").addClass("text-success");
                }
                else{
                    $("#result").text("Email already exist!!");
                    $("#result").removeClass("text-success");
                    $("#result").addClass("text-danger");
                }

            },
            error: function (xhr, status, error) {
                console.log("An error occurred : " + error);
            }
        });
    });

//LOGIN//
    $("#login").click(function(){
        event.preventDefault();
        $.ajax({
            url: '../components/controller.cfc',
            method: 'post',
            data: {
                method: "login",
                email: $("#email").val(),
                password: $("#password").val()
            },
            dataType: "json",
            success: function (response) {
                if (response.result ===true) {
                    window.location.href = "../views/homePage.cfm";
                }
                else if (response.result ==="noAccount") {
                    $("#logResult   ").text("You don't have an account please signup!!");
                    $("#result").removeClass("text-success");
                    $("#logResult   ").addClass("text-danger");
                }
                else{
                    $("#logResult   ").text("Incorect email or password!!");
                    $("#result").removeClass("text-success");
                    $("#logResult   ").addClass("text-danger");
                }

            },
            error: function (xhr, status, error) {
                console.log("An error occurred : " + error);
            }
        });
    });

//LOGOUT//
    $("#logout").click(function(){
        event.preventDefault();
        $.ajax({
            url: '../components/controller.cfc',
            method: 'post',
            data: {
                method: "logout"
            },
            dataType: "json",
            success: function (response) {
                if(response.result){
                    window.location.href="../views/login.cfm"
                }

            },
            error: function (xhr, status, error) {
                console.log("An error occurred : " + error);
            }
        });
    });

//ADD ADDRESS//
$("#addAddress").click(function(event){
    event.preventDefault();

    // Create a FormData object
    var formData = new FormData();
    formData.append("method", "addAddress");
    formData.append("title", $("#title").val());
    formData.append("fname", $("#fname").val());
    formData.append("lname", $("#lname").val());
    formData.append("gender", $("#gender").val());
    formData.append("dob", $("#dob").val());
    formData.append("image", $("#image")[0].files[0]);  // Use files[0] to get the actual file
    formData.append("address", $("#address").val());
    formData.append("street", $("#street").val());
    formData.append("phone", $("#phone").val());
    formData.append("email", $("#email").val());
    formData.append("pincode", $("#pincode").val());

    $.ajax({
        url: '../components/controller.cfc',
        method: 'post',
        data: formData,
        dataType: "json",
        processData: false,
        contentType: false,  
        success: function (response) {
            if(response.result){
                $("#resultAddress").text("Address added successfully");
            }
        },
        error: function (xhr, status, error) {
            console.log("An error occurred : " + error);
        }
    });
});


$("#closeModal").click(function(event){
    location.reload(true);
});
$("#closeModalEdited").click(function(event){
    location.reload(true);
});
});


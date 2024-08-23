$(document).ready(function(){
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
                    $("#result").addClass("text-success");
                }
                else{
                    $("#result").text("Email already exist!!");
                    $("#result").addClass("text-danger");
                }

            },
            error: function (xhr, status, error) {
                console.log("An error occurred : " + error);
            }
        });
    });
});


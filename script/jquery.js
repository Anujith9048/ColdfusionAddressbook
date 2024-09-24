$(document).ready(function(){

//SIGNUP//
$("#register").click(function(event){
    event.preventDefault();

    var datas = new FormData();
    datas.append("profileImage", $("#profileImage")[0].files[0]);
    datas.append("name", $("#name").val());
    datas.append("email", $("#email").val());
    datas.append("userName", $("#userName").val());
    datas.append("password", $("#password").val());
    $.ajax({
        url: '../components/controller.cfc?method=signupUser',
        method: 'post',
        data: datas,
        dataType: "json",
        processData: false,
        contentType: false,
        success: function (response) {
            if (response.result) {
                $("#result").text("Your account has been created please login.");
                $("#result").removeClass("text-danger");
                $("#result").addClass("text-success");
            }
            else {
                $("#result").text("Email already exists!!");
                $("#result").removeClass("text-success");
                $("#result").addClass("text-danger");
            }
        },
        error: function (xhr, status, error) {
            console.log("An error occurred: " + error);
        }
    });
});


//LOGIN//
    $("#login").click(function(event){
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
                    $("#email").addClass("is-valid");
                    $("#password").addClass("is-valid");
                    window.location.href = "../views/homePage.cfm";
                }
                else if (response.result ==="noAccount") {
                    $("#logResult   ").text("You don't have an account please signup!!");
                    $("#result").removeClass("text-success");
                    $("#logResult   ").addClass("text-danger");
                    $("#password").addClass("is-invalid");
                    $("#email   ").addClass("is-invalid");
                    $("#email   ").attr("title","An account with this email id doesn't exixt");
                }
                else{
                    $("#logResult   ").text("");
                    $("#result").removeClass("text-success");
                    $("#email").addClass("is-valid");
                    $("#password").addClass("is-invalid");
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

    $("#createContact").click(function(event) { 
        event.preventDefault();
        $("#editContact").hide(); 
        $("#addAddress").show();  
        $("#exampleModal").modal('show');  
    });
    
//EDIT ADDRESS MODAL VIEW//
        $(".editAddress").click(function(){
            event.preventDefault();
            $.ajax({
                url: '../components/controller.cfc?method=selectedAddress',
                method: 'post',
                data: {
                    id:$(this).attr("data-id")
                },
                dataType: "json",
                success: function (response) {
                    var rowData = response.DATA[0];

                    $("#addAddress").hide();
                    $("#editContact").show();
                    $("#modalSideImage").hide();
                    $("#upload-box").hide();

                    $("#exampleModalLabel").text("Edit Contact");
                    $("#addAddress").text("Edit Contact");
                    $("#image-title").text("Change Image");

                    $("#title").val(rowData[1]);
                    $("#gender").val(rowData[4]);
                    $("#fname").attr("value", `${rowData[2]}`);
                    $("#lname").attr("value", `${rowData[3]}`);
                    $("#dob").attr("value", `${rowData[5]}`);
                    $("#address").attr("value", `${rowData[7]}`);
                    $("#street").attr("value", `${rowData[8]}`);
                    $("#phone").attr("value", `${rowData[9]}`);
                    $("#email").attr("value", `${rowData[10]}`);
                    $("#pincode").attr("value", `${rowData[11]}`);
                    
                    $("#modalSideBox").html(`<img class="img-fluid shadow rounded-3" id="modalSideImage" width="150" src="../assets/${rowData[6]}" alt="">`);
                },
                error: function (xhr, status, error) {
                    console.log("An error occurred : " + error);
                }
            });
        });
//EDIT ADDRESS//
        $("#editContact").click(function(){
            event.preventDefault();       
                var isValid = modalValidate();

                if (isValid) {
                    event.preventDefault();
                    let image =$("#image")[0].files[0];
                    var editData = new FormData();
                    if (image) {
                        editData.append("method", "updateAddressImage");
                        editData.append("image", image);
                    } else {
                        editData.append("method", "updateAddress");
                    }
                    editData.append("title", $("#title").val());
                    editData.append("fname", $("#fname").val());
                    editData.append("lname", $("#lname").val());
                    editData.append("gender", $("#gender").val());
                    editData.append("dob", $("#dob").val());
                    editData.append("image", $("#image")[0].files[0]);
                    editData.append("address", $("#address").val());
                    editData.append("street", $("#street").val());
                    editData.append("phone", $("#phone").val());
                    editData.append("email", $("#email").val());
                    editData.append("pincode", $("#pincode").val());
    
                    $.ajax({
                        url: '../components/controller.cfc',
                        method: 'post',
                        data: editData,
                        dataType: "json",
                        processData: false,
                        contentType: false, 
                        success: function (response) {
                            if(response.result===true){
                                $("#resultAddress").removeClass("text-danger");
                                $("#resultAddress").addClass("text-success");
                                $("#resultAddress").text("Contact updated successfully");
                                window.location.href="homePage.cfm";

                                }
                        else{
                                $("#email").addClass("is-invalid");
                                $("#image").removeClass("is-invalid");
                                $("#errorImage").text("");
                                $("#resultAddress").text("");
                                $("#errorEmail").text("Email already exist");
                            }
                        },
                        error: function (xhr, status, error) {
                            console.log("An error occurred : " + error);
                        }
            });
                } else {
                    console.log('Validation failed');
                }
        });

//DELETE-ADDRESS//
$(".Address").click(function(){
    $("#confmTextDlt").addClass("text-secondary");
    $("#confmTextDlt").removeClass("text-success");
    $( $(this)).addClass("deleted");
    $("#confmTextDlt").text("Do you really want to delete the address? This process cannot be undone.");
    event.preventDefault();
    $.ajax({
        url: '../components/controller.cfc',
        method: 'post',
        data: {
            method: "selectedAddress",
            id:$(this).attr("data-id")
        },
        dataType: "json",
        error: function (xhr, status, error) {
            console.log("An error occurred : " + error);
        }
    });
});
$("#deleteContact").click(function(){
    $("#confmTextDlt").removeClass("text-secondary");
    $("#confmTextDlt").addClass("text-success");
    event.preventDefault();
    $.ajax({
        url: '../components/controller.cfc',
        method: 'post',
        data: {
            method: "deleteAddress"
        },
        dataType: "json",
        success: function (response) {
            $(".deleted").parents("tr").slideUp();
            $("#confmTextDlt").text("Contact deleted Sussessfully");
          },
        error: function (xhr, status, error) {
            console.log("An error occurred : " + error);
        }
    });
});
$(".closeDelete").click(function(){
    $( ".deleted").removeClass("deleted");
});

//VIEW-ADDRESS//
        $(".viewAddress").click(function(event) {
            event.preventDefault();
            var button = $(this);
            $.ajax({
                url: '../components/controller.cfc?method=selectedAddress',
                method: 'post',
                data: {
                    id: button.attr("data-id"),
                    ts: new Date().getTime()
                },
                dataType: "json",
                success: function(response) {
                    console.log(response);
            
                    if (response.DATA && response.DATA.length > 0) {
                        var rowData = response.DATA[0];
                
                        let table = '<table class="table table-striped">';
                        table += '<tr><th class="color-address">Name</th>';
                        table +=`<td class="color-address">${rowData[1]} ${rowData[2]} ${rowData[3]}</td></tr>`;
                        table += '<tr><th class="color-address">Gender</th>';
                        table +=`<td class="color-address">${rowData[4]}</td></tr>`;
                        table += '<tr><th class="color-address">Date of Birth</th>';
                        table +=`<td class="color-address">${rowData[5]}</td></tr>`;
                        table += '<tr><th class="color-address">Address</th>';
                        table +=`<td class="color-address">${rowData[7]}, ${rowData[8]}</td></tr>`;
                        table += '<tr><th class="color-address">Phone</th>';
                        table +=`<td class="color-address">${rowData[9]}</td></tr>`;
                        table += '<tr><th class="color-address">Email</th>';
                        table +=`<td class="color-address">${rowData[10]}</td></tr>`;
                        table += '<tr><th class="color-address">Pincode</th>';
                        table +=`<td class="color-address">${rowData[11]}</td></tr>`;
                        table += '</table>';

                        let image = '<img class="img-fluid shadow rounded-3" width="150" src="../assets/';
                        image += `${rowData[6]}`;
                        image += '" alt="">';

                        $("#address-view").html(table);
                        $("#image_view").html(image);

                        $("#viewAddress").modal("show");
                    } else {
                        console.log("No data available");
                    }
                },
                error: function(xhr, status, error) {
                    console.log("An error occurred: " + error);
                }
            });
        });

        


//ADD ADDRESS//
$("#addAddress").click(function(event){
    event.preventDefault();
    $("#exampleModalLabel").text("Create Contact");

    if ($("#image").val() === "") {
        $("#image").addClass("is-invalid");
        $("#resultAddress").text("");
        $("#errorImage").text("Upload an image!");

    }
    else{
        $("#image").removeClass("is-invalid");
        $("#image").addClass("is-valid");
        $("#resultAddress").text("");
        $("#errorImage").text("");
    }
    var formData = new FormData();
    formData.append("method", "addAddress");
    formData.append("title", $("#title").val());
    formData.append("fname", $("#fname").val());
    formData.append("lname", $("#lname").val());
    formData.append("gender", $("#gender").val());
    formData.append("dob", $("#dob").val());
    formData.append("image", $("#image")[0].files[0]);
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
                $("#resultAddress").removeClass("text-danger");
                $("#resultAddress").addClass("text-success");
                $("#resultAddress").text("Address added successfully");
                window.location.href="homePage.cfm";
            }
            else if(response.result==="noImg") {
                $("#image").addClass("is-invalid");
                $("#resultAddress").text("");
                $("#errorImage").text("Upload an image!");
            }
            else {
                $("#email").addClass("is-invalid");
                $("#resultAddress").text("");
                $("#errorEmail").text("Email already exist");
            }
        },
        error: function (xhr, status, error) {
            console.log("An error occurred : " + error);
        }
    });
});

//UPLOAD EXCEL//
$("#uploadAddress").click(function(event){
    event.preventDefault();
    
    var formData = new FormData($('#addressForm')[0]);

    $.ajax({
        url: '../components/controller.cfc?method=uploadAddress',
        method: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        dataType: "json",
        success: function (response) {
            if(response.result){
                $("#excelUploadResult").addClass("text-success");
                $("#excelUploadResult").text("Address upload successfully");
                window.location.href="homePage.cfm";
            }
        },
        error: function (xhr, status, error) {
            console.log("An error occurred: " + error);
        }
    });
});

$(".closeModal").click(function(event){
    location.reload(true);
});
$("#closeModalEdited").click(function(event){
    location.reload(true);
});
});
<cfif session.isLog>
    <cflocation url="homePage.cfm">

    <cfelse>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup to AddressBook</title>
    <link rel="stylesheet" href="../style/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="../images/phone-book.png">
    <script src="../script/jquery-ui.min.js"></script>
    <script src="../script/validate.js"></script>
    <script src="../script/jquery.js"></script>
</head>
<body class="body">
    <nav class="navbar navbar-light address-nav fixed-top shadow">
        <div class="container-fluid mx-4">
            <a class="navbar-brand text-white fw-bold"><img width="35" class="mb-1 pe-2 shadow"
                    src="../images/phone-book.png" alt="">ADDRESS BOOK</a>
            <div class="d-flex gap-4 ">
                <div class="d-flex align-items-center gap-1 nav-butns btn">
                    <img width="20" height="20" src="../images/signup.png" alt="">
                    <a href="signup.cfm" class="text-decoration-none text-white py-2"> Sign Up</a>
                </div>

                <div class="d-flex align-items-center gap-1 nav-butns btn">
                    <img width="20" height="20" src="../images/login.png" alt="">
                    <a href="login.cfm" class="text-decoration-none text-white py-2"> Login</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="col-6 mx-auto my-5 d-flex">
        <div class="col-4 bg-address d-flex justify-content-center form-logo ">
            <img class="w-50 my-auto" height="110" src="../images/phone-book.png" alt="">
        </div>
        <div class="col-7 bg-white  px-3 pb-4 form-signup shadow-lg">
            <h3 class="text-center mt-2 color-address">SIGN UP</h3>
            <form action="signup.cfm" method="post" class="" enctype="multipart/form-data">
                <div class="gap-4">
                    <div class="image-box mt-3 mx-auto">
                        <input type="hidden" name="defaultImage" id="defaultImage" value="../images/default_user.png">

                        <input type="file" name="profileImage" id="profileImage" class="mx-auto rounded-circle profile-image form-control border-start-0 border-end-0 border-top-0 border-bottom-1">
                        <label class="" id="nameErrorProfile" for="">Profile photo</label>
                    </div>
                    <div class="name-box mt-3 form-floating">
                        <input type="text" id="name" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Full Name">
                        <label for="floatingInput">Full Name</label>
                        <p id="nameError"></p>
                    </div>
                    <div class="email-box mt-4 form-floating">
                        <input type="text" id="email" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Email ID">
                        <label for="floatingInput">Email ID</label>
                        <p id="emailError"></p>
                    </div>
                    <div class="username-box mt-4 form-floating">
                        <input type="text" id="userName" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Username">
                        <label for="floatingInput">Username</label>
                        <p id="usernameError"></p>
                    </div>
                    <div class="password-box mt-4 form-floating">
                        <input type="password" id="password" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Password">
                        <label for="floatingInput">Password</label>
                        <p id="pass1Error"></p>
                    </div>
                    <div class="conPassword-box mt-4 form-floating">
                        <input type="password" id="confirmPassword" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Confirm Password">
                        <label for="floatingInput">Confirm Password</label>
                        <p id="pass2Error"></p>
                    </div>
                    <div class="registr-btn mt-4 text-center">
                        <button class="w-100 btn color-address address-btn rounded-pill" id="register" onclick="validate()">Register</button>
                        <a href="login.cfm" class="text-decoration-none text-dark text-center">Already have an account?<span class="color-address">  Login</span></a>
                    </div>
                </div>
                <p class="text-center" id="result"></p>
            </form>

            
        </div>
    </div>
</body>

</html>
</cfif>
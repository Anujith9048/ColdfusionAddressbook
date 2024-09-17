<cfif session.isLog>
    <cfheader statuscode="200">
    <meta http-equiv="refresh" content="2;url=homePage.cfm">
    <cfexit>

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
                <div class="col-7 bg-white pt-4 px-3 pb-4 form-signup shadow-lg">
                    <h3 class="text-center mt-2 color-address">LOGIN</h3>
                    <form action="" method="post" class="">
                        <div class="gap-4">
                            <div class="email-box mt-4 form-floating">
                                <input type="text" id="email" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Email ID">
                                <label for="floatingInput">Email ID</label>
                                <p class="text-danger" id="emailError"></p>
                            </div>
                            <div class="password-box mt-4 form-floating">
                                <input type="password" id="password" class="form-control border-start-0 border-end-0 border-top-0 border-bottom-1" placeholder="Password">
                                <label for="floatingInput">Password</label>
                                <p class="text-danger" id="passwordError"></p>
                            </div>
                            <div class="registr-btn mt-4 text-center">
                                <button class="w-100 btn color-address address-btn rounded-pill" id="login" onclick="validateLogin()">Login</button>
                                <p class="form-text mt-2 mb-2">Or Sign in using</p>
                                <a href="##" onclick="googleSignup()" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign up using Google" class="sso-link-btn"><img class="mb-2 sso-button rounded-circle" src="../images/googleSSO.png" width="40px" alt="" ></a> <br>    
                                <a href="signup.cfm" class="text-decoration-none text-dark text-center ">Don't have an account?<span class="color-address">  Signup</span></a>
                            </div>
                        </div>
                        <p class="text-center" id="logResult"></p>
                    </form>
                </div>
            </div>
        </body>
        
        </html>
</cfif>

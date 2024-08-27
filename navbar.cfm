<cfoutput>
<nav class="navbar navbar-expand-lg px-5">
    <div class="row w-100 ">
        <div class="col-12 d-flex justify-content-between">
            <div class="logos d-flex align-items-center">
                <img class="rounded-circle" src="assets/logo2.jpg" width="30" height="30" alt="">
                <h4 class="text-white fw-bold ms-2 align-content-center mb-0">InfoVault</h4>
            </div>
            <ul class="d-flex navbar-nav col-3 justify-content-between">
                <li><a href="welcome.cfm" class="text-decoration-none text-white p-3 align-content-center">Home</a></li>
                <li><a href="##"class="text-decoration-none text-white userHello fs-5 fw-bolder p-3 align-content-center userHello">Hello #session.userName#</a></li>
            </ul>
            <ul class="d-flex navbar-nav col-4 justify-content-between">
                <li><a href="#session.role#List.cfm" class="text-decoration-none text-white p-3 align-content-center">View List</a></li>
                <li>
                    <form action="" method="post">
                        <input class="btn text-white p-3 align-content-center bg-none" type="submit" name="logOut" value="Logout">
                    </form>
                </li>
            </ul>
        </div>
    </div>

    <cfif structKeyExists(form, "logOut")>
        <cfset session.isLogged = false>
        <cflocation  url="login.cfm">
    </cfif>
</nav>
</cfoutput>
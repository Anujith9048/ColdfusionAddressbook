<cfif session.isLog>
    <!DOCTYPE html>
    <cfoutput>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>#session.username# | AddressBook Copy</title>
            <link rel="stylesheet" href="../style/style.css">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="icon" type="image/x-icon" href="../images/phone-book.png">
            <script src="../script/jquery-ui.min.js"></script>
            <script src="../script/validate.js"></script>
            <script src="../script/jquery.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href= "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
            
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css">
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
        </head>

        <body class="body">
            <nav class="navbar navbar-light address-nav fixed-top shadow">
                <div class="container-fluid mx-4">
                    <a class="navbar-brand text-white fw-bold">
                        <img width="35" class="mb-1 pe-2 shadow" src="../images/phone-book.png" alt=""> ADDRESS BOOK
                    </a>
                    <div class=" gap-4 ">
                        <div class="d-flex align-items-center gap-1 nav-butns btn">
                            <!-- Toggle button for collapse -->
                            <button class="navbar-toggler py-2" type="button" data-bs-toggle="collapse" data-bs-target="##navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onclick="rotate()">
                                <img width="30" height="30" src="#session.userDP#" alt="Toggle Logout" class="rounded-circle">
                                <img width="20" height="20" src="../images/dropdown.png" alt="Toggle Logout" class="dropdown-image">
                            </button>
                        </div>
                        <!-- Collapsible content (Logout link) -->
                        <div class="collapse collapse-container rounded-bottom" id="navbarCollapse">
                            <a href="##" id="logout" class="text-decoration-none py-2 log-butn btn ms-3"> Logout</a>
                        </div>
                    </div>
                </div>
            </nav>
            
            <div class="col-10 mt-5 mx-auto list-view-contents">

                <div class="col-12 bg-light px-3 p-2 text-center">
                    <div class="d-flex justify-content-end gap-2">
                        <div class="pdf-img-box pdf-download-buttons" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Pdf">
                            <a href="addressPdf.cfm" >
                                <img class="ms-auto" src="../images/pdf.png" width="40" alt="">
                            </a>
                        </div>
                        <div class="pdf-img-box xl-download-buttons" data-bs-toggle="tooltip" data-bs-placement="top" title="Download Excel">
                            <a href="addressExcel.cfm?act=list">
                                <img class="ms-auto" src="../images/excel.png" width="40" alt="">
                            </a>
                        </div>
                        <div class="pdf-img-box prt-download-buttons"  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Print Address">
                            <a href="printAddress.cfm">
                                <img class="ms-auto" src="../images/print.png" width="40" alt="">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="d-flex gap-2 mt-2">

                    <div class="col-2  bg-white d-flex justify-content-center rounded-3 shadow-lg text-center sticky-panel">
                        <div class="d-block my-auto pb-5">
                            <img class="img-fluid  mt-5 pb-0 rounded-circle userDp"
                                src="#session.userDP#" alt="Image #session.username#">
                            <p class="color-address fw-bold text-center mt-2 fs-5">#session.username#</p>
                            <button class="px-3 btn  fw-bold color-address  rounded-pill btn-outline-primary uploadExcel" title="Add new contact"
                                id="createContact">Create Contact</button>

                            <button class="px-4 btn mt-2 text-decoration-underline  btn-outline-success uploadExcel fw-bold text-success  rounded-pill" title="Add/Update address"
                                id="uploadExcel"  data-bs-toggle="modal" data-bs-target="##uploadModal">Upload Excel</button>  
                        </div>
                    </div>
    
                    <div class="col-10 bg-white pb-3 px-4 rounded-3 shadow-lg scrollable-table">
                        <table class="table table-hover">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col" class="color-address bg-white" ></th>
                                    <th scope="col" class="color-address bg-white pt-4">Name</th>
                                    <th scope="col" class="color-address bg-white">Email</th>
                                    <th scope="col" class="color-address bg-white">Phone Number</th>
                                    <th scope="col" class="color-address bg-white"></th>
                                    <th scope="col" class="color-address bg-white"></th>
                                    <th scope="col" class="color-address bg-white"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <cfset criteria={userId=session.userId}>
                                    <cfset savedAddresses=entityLoad("savedAddress", criteria)>
                                        <cfloop array="#savedAddresses#" index="address">
                                            <tr>
                                                <td class="align-content-center">
                                                    <img class="img-fluid rounded-circle address-image"
                                                        src="../assets/#address.getImage()#" alt="Address Image">
                                                </td>
                                                <td class="align-content-center">#address.getFname()#</td>
                                                <td class="align-content-center">#address.getEmail()#</td>
                                                <td class="align-content-center">#address.getPhone()#</td>
                                                <td class="align-content-center">
                                                    <button class="btn address-btn rounded-pill editAddress"
                                                        id="editAddress" data-id="#address.getaddressId()#" title="Edit this contact"
                                                        data-bs-toggle="modal">Edit</button>
                                                </td>
                                                <td class="align-content-center">
                                                    <button class="btn address-btn rounded-pill deleteButton"
                                                        data-bs-toggle="modal" data-bs-target="##deleteModal" title="Delete this contact"
                                                        data-id="#address.getaddressId()#">Delete</button>
                                                </td>
                                                <td class="align-content-center">
                                                    <button class="btn address-btn rounded-pill Address viewAddress" title="View this contact"
                                                        data-id="#address.getaddressId()#">View</button>
                                                </td>
                                            </tr>
                                        </cfloop>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--CREATE/EDIT-MODAl-->
            <div class=" shadow-lg modal fade" id="exampleModal" data-bs-backdrop="static" tabindex="-1"
                aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg d-flex gap-0">
                    <div class="modal-content border-0 rounded-0 rounded-start">
                        <div class="modal-header create-bg">
                            <h5 class="modal-title color-address create-title w-100 text-center py-2 rounded-pill"
                                id="exampleModalLabel">Create Contact</h5>
                        </div>
                        <div class="modal-body">
                            <form action="homePage.cfm" method="post" enctype="multipart/form-data">
                                <p class="w-100 color-address fw-bold contact-title">Personal Contact</p>
                                <div class="d-flex gap-3">
                                    <div class="title-box">
                                        <label for="" class="color-address form-text fw-bold">Title*</label>
                                        <select class="form-select" name="" id="title">
                                            <option id="" value=""></option>
                                            <option id="Mr." value="Mr.">Mr.</option>
                                            <option id="Mrs." value="Mrs.">Mrs.</option>
                                            <option id="Ms." value="Ms.">Ms.</option>
                                        </select>
                                        <p id="errorTitle" class="text-danger"></p>
                                    </div>
                                    <div class="fname-box">
                                        <label for="" class="color-address form-text fw-bold">First
                                            Name*</label>
                                        <input type="text" class="form-control" placeholder="First Name" id="fname">
                                        <p id="errorFname" class="text-danger"></p>
                                    </div>
                                    <div class="lname-box">
                                        <label for="" class="color-address form-text fw-bold">Last
                                            Name*</label>
                                        <input type="text" class="form-control" placeholder="Last Name" id="lname">
                                        <p id="errorLname" class="text-danger"></p>
                                    </div>
                                </div>
                                <div class="d-flex gap-3 mt-3">
                                    <div class="gender-box">
                                        <label for="" class="color-address form-text fw-bold">Gender*</label>
                                        <select class="form-select" name="" id="gender">
                                            <option value=""></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <p id="errorGender" class="text-danger"></p>
                                    </div>
                                    <div class="dob-box">
                                        <label for="" class="color-address form-text fw-bold">Date of
                                            birth*</label>
                                        <input type="date" class="form-control" id="dob">
                                        <p id="errorDob" class="text-danger"></p>
                                    </div>
                                    <div class="upload-box" id="">
                                        <label for="" class="color-address form-text fw-bold" id="image-title">Upload a
                                            photo*</label>
                                        <input type="file" class="form-control" id="image" name="image"
                                            accept="image/*">
                                        <p id="errorImage" class="text-danger"></p>
                                    </div>
                                </div>
                                <p class=" mt-4 w-100 color-address fw-bold contact-title">Contact Details
                                </p>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Address*</label>
                                                <input type="text" class="form-control " placeholder="Address"
                                                    id="address">
                                                <p id="errorAddress" class="text-danger"></p>
                                            </td>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Street*</label>
                                                <input type="text" class="form-control" placeholder="Street"
                                                    id="street">
                                                <p id="errorStreet" class="text-danger"></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Phone*</label>
                                                <input type="text" class="form-control" placeholder="Phone" id="phone">
                                                <p id="errorPhone" class="text-danger"></p>
                                            </td>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Email*</label>
                                                <input type="text" class="form-control" placeholder="Email" id="email">
                                                <p id="errorEmail" class="text-danger"></p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Pin
                                                    Code*</label>
                                                <input type="text" class="form-control" placeholder="PinCode"
                                                    id="pincode" maxlength="6">
                                                <p id="errorPincode" class="text-danger"></p>
                                            </td>
                                            <td>
                                                <label for="" class="form-text fw-bold color-address">Roles*</label>
                                                    <div id="selectionArea">
                                                        <!-- select roles -->
                                                    </div>
                                                <p id="errorRole" class="text-danger"></p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p id="resultAddress" class="text-center text-success form-text"></p>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeModalAdd" class="btn btn-secondary ">Close</button>
                            <button type="button" id="addAddress" class="btn btn-primary"
                                onclick="modalValidate(event)">Add Contact</button>
                            <button type="button" id="editContact" class="btn btn-primary">Save Contact</button>
                        </div>

                    </div>
                    <div class="col-3 create-bg d-flex align-items-center justify-content-center rounded-end modal-image-box">
                        <div class="image_container p-4 py-auto" id="modalSideBox">
                            <img class="img-fluid" id="modalSideImage" width="100" src="../images/phone-book.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <!--VIEW-MODAl-->
            <div class="shadow-lg modal fade" id="viewAddress" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-lg d-flex gap-0">
                    <div class="modal-content border-0 rounded-start">
                        <div class="modal-header create-bg">
                            <h5 class="modal-title color-address create-title w-100 text-center py-2 rounded-pill"
                                id="exampleModalLabel">View Contact</h5>
                        </div>
                        <div class="modal-body">
                            <div class="address-view" id="address-view">
                                <!-- View table -->
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" id="closeModal" class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                    <div
                        class="col-3 create-bg d-flex align-items-center justify-content-center rounded-end modal-image-box">
                        <div class="image_view p-4 py-auto" id="image_view">
                        </div>
                    </div>
                </div>
            </div>
            <!--DELETE-CONFIRM-MODAL-->
            <div id="deleteModal" class="modal fade">
                <div class="modal-dialog modal-confirm">
                    <div class="modal-content">
                        <div class="modal-header d-block">
                            <div class="icon-box">
                                <i class="material-icons mt-0">
                                    <img src="../images/deleteAddress.png" class="img-fluid mb-1" alt="">
                                </i>
                            </div>
                            <h4 class="modal-title">Are you sure?</h4>
                        </div>
                        <div class="modal-body">
                            <p id="confmTextDlt" class="text-secondary">Do you really want to delete the address? This process cannot be undone.</p>
                        </div>
                        <div class="modal-footer mx-auto">
                            <button type="button" id="" class="btn btn-primary closeDelete"
                                data-bs-dismiss="modal">Close</button>
                            <button type="button" id="deleteContact" class="btn btn-danger">Delete Contact</button>
                        </div>
                    </div>
                </div>
            </div>



            <!--- Upload Excel MODAL--->
            <div class="modal fade" id="uploadModal" tabindex="-1" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                   <form action="homePage.cfm" method="post" enctype="multipart/form-data" id="addressForm" onsubmit="excelValidate()">
                      <div class="modal-content">
                         <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Upload Address</h5>
                            <button type="button" class="btn-close closeModal" data-bs-="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body text-center">
                            <div class="button-boxes float-end mb-3">
                               <a href="addressExcel.cfm?act=template"><button type="button" class="btn btn-success">Plain Template <img src="../images/excel.png" width="20" alt=""></button></a>
                               <a href="addressExcel.cfm?act=list"><button type="button" class="btn btn-primary">Template with data <img src="../images/excel.png" width="20" alt=""></button></a>
                            </div>
                            <input type="file" name="fileUpload" id="fileUpload" class="form-control" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
                            <p class="form-text m-0">You can add or update address using excel</p>
                            <p id="excelUploadResult" class="text-center m-0"></p>
                         </div>
                         <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" class="btn btn-primary" id="uploadAddress">Upload Excel</button>
                         </div>
                      </div>
                   </form>
                </div>
             </div>
        </body>

        </html>
    </cfoutput>
    <cfelse>
        <cflocation url="login.cfm">
</cfif>
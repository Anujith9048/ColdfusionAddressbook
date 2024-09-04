<cfhtmltopdf format="pdf" filename="#ExpandPath('./downloads/addresses.pdf')#" overwrite="true">
    <cfcontent file="#getdirectoryfrompath(getbasetemplatepath())#usage_example2.pdf" type="application/pdf" >
    
    <html>
        <head>
        </head>
        <body>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col" class="color-address"></th>
                        <th scope="col" class="color-address">Name</th>
                        <th scope="col" class="color-address">Email</th>
                        <th scope="col" class="color-address">Phone Number</th>
                        <th scope="col" class="color-address"></th>
                        <th scope="col" class="color-address"></th>
                        <th scope="col" class="color-address"></th>
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
                                            id="editAddress" data-id="#address.getaddressId()#"
                                            data-bs-toggle="modal" data-bs-target="##exampleModal">Edit</button>
                                    </td>
                                    <td class="align-content-center">
                                        <button class="btn address-btn rounded-pill Address"
                                            data-bs-toggle="modal" data-bs-target="##deleteModal"
                                            data-id="#address.getaddressId()#">Delete</button>
                                    </td>
                                    <td class="align-content-center">
                                        <button class="btn address-btn rounded-pill Address viewAddress"
                                            data-id="#address.getaddressId()#">View</button>
                                    </td>
                                </tr>
                            </cfloop>
                </tbody>
            </table>
        </body>
    </html>
</cfhtmltopdf>

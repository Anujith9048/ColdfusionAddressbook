
    <cfhtmltopdf destination="#ExpandPath('../assets/pdf/address.pdf')#" overwrite="true">
        <html>
            <head>
                <style>
                </style>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
                <link href="../style/style.css" rel="stylesheet">
            </head>
            <cfoutput>
            <body>
                <h2 class="text-center color-address fw-bold">Address List</h2>
                <table class="table-striped align-content-center">
                    <thead>
                        <tr  class="fw-bold bg-address text-white mb-3 gap-3">
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Data Of Birth</th>
                            <th scope="col">Roles</th>
                        </tr>

                    </thead>
                    <tbody>
                        <cfset local.criteria={userId=session.userId}>
                        <cfset savedAddresses=entityLoad("savedAddress", local.criteria)>
                        <cfset local.roleList="">
                            
                        <cfloop array="#savedAddresses#" index="address">
                            <cfquery name="selectAddress" datasource="myDatabase">
                                SELECT * FROM savedAddress
                                WHERE addressId = <cfqueryparam value="#address.getaddressId()#" cfsqltype="cf_sql_integer">
                            </cfquery>
                            
                            <cfquery name="savedRole" datasource="myDatabase">
                                SELECT roleName 
                                FROM rolesList
                                INNER JOIN userRoles ON userRoles.roleId = rolesList.roleId
                                WHERE userRoles.addressId = #address.getaddressId()#;
                            </cfquery>
                            
                            <cfset local.roleArray = []>
                            <cfloop query="savedRole" >
                                <cfset arrayAppend(local.roleArray, "#roleName#")>
                            </cfloop>
                            <cfset local.roleList = arrayToList(local.roleArray)>
                            

                            
                            <tr class="mt-2 mt-2">
                                <td class="align-content-center">
                                    <img src="../assets/#address.getImage()#" height="40" width="40" alt="Address Image" class="image rounded-circle">
                                </td>
                                <td class="align-content-center ms-3">#address.getTitle()# #address.getFname()# #address.getLname()#</td>
                                <td class="align-content-center">#address.getEmail()#</td>
                                <td class="align-content-center">#address.getPhone()#</td>
                                <td class="align-content-center">#address.getDateOfBirth()#</td>
                                <td class="align-content-center">#local.roleList#</td>
                            </tr>
                            <cfset local.roleList="">
                        </cfloop>
                    </tbody>
                </table>
            </body>
        </cfoutput>
        </html>
    </cfhtmltopdf>
<cfoutput>
    <cfheader name="Content-Disposition" value="attachment; filename=#session.username#'s_address.pdf">
    <cfcontent file="#ExpandPath('../assets/pdf/address.pdf')#" type="application/pdf">
    <cfabort>

</cfoutput>

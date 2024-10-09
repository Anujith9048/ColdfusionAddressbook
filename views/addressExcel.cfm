<cfoutput>
    <cfset excelFile = spreadsheetNew("Address List", true)>
    <cfset local.roleList="">

    <!-- Add header row -->
    <cfset spreadsheetAddRow(excelFile, "Title,First Name,Last Name,Gender,Date of Birth,Street,Address,Email,Phone Number,Pincode,Image,Roles")>

    <cfif url.act EQ 'list'>
        <cfset criteria = {userId = session.userId}>
        <cfset savedAddresses = entityLoad("savedAddress", criteria)>
    
        <cfloop array="#savedAddresses#" index="address">
            <cfset local.roleList = "" />
            
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

            <cfdump var="#local.roleList#" label="Roles for Address #address.getaddressId()#">
            
            <cfset image = address.getImage()>
            <cfset row = "#address.getTitle()#, #address.getFname()#, #address.getLname()#, #address.getGender()#, 
                #address.getDateOfBirth()#, #address.getStreet()#, #address.getAddress()#, #address.getEmail()#, 
                #address.getPhone()#, #address.getPincode()#, #image#, #local.roleList#">
            <cfset spreadsheetAddRow(excelFile, row)>
        </cfloop>
        
        
    </cfif>
    
    <cfset filePath = ExpandPath('../assets/excel/address_list.xlsx')>
    <cfspreadsheet action="write" filename="#filePath#" name="excelFile" overwrite="true">

    <cfheader name="Content-Disposition" value="attachment; filename=address_#url.act#.xlsx">
    <cfcontent file="#filePath#" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    <cfabort>
</cfoutput>

<cfoutput>
    <cfset excelFile = spreadsheetNew("Address List", true)>
    <cfset local.roleList="">
    <cfset spreadsheetAddRow(excelFile, "Title,First Name,Last Name,Gender,Date of Birth,Street,Address,Email,Phone Number,Pincode,Image,Roles")>

    <cfif url.act EQ 'list'>
        <cfset criteria = {userId = session.userId}>
        <cfset savedAddresses = entityLoad("savedAddress", criteria)>
    
        <cfloop array="#savedAddresses#" index="address">
            <cfset local.condition={addressId=address.getaddressId()}>
            <cfset local.role=EntityLoad("roleList",local.condition)>
            <cfloop array="#local.role#" index="roles">
                <cfset local.roleList =listAppend(local.roleList, roles.getrole())>
            </cfloop>

            <cfset image = address.getImage()>

            <cfset row = "#address.getTitle()#, #address.getFname()#, #address.getLname()#, #address.getGender()#, #address.getDateOfBirth()#, #address.getStreet()#, #address.getAddress()#, #address.getEmail()#, #address.getPhone()#, #address.getPincode()#, #image#, #local.roleList#">
            
            <cfset spreadsheetAddRow(excelFile, row)>
            <cfset local.roleList="">
        </cfloop>
    </cfif>
    
    <cfset filePath = ExpandPath('../assets/excel/address_list.xlsx')>
    <cfspreadsheet action="write" filename="#filePath#" name="excelFile" overwrite="true">

    <cfheader name="Content-Disposition" value="attachment; filename=address_#url.act#.xlsx">
    <cfcontent file="#filePath#" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    <cfabort>
</cfoutput>

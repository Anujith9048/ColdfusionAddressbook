<cfoutput>
    <cfset excelFile = spreadsheetNew("Address List", true)>
    
    <cfset spreadsheetAddRow(excelFile, "Title, First Name,Last Name , Genter, Street,Address, Email, Phone Number,Pincode,Image,")>

    <cfif url.act EQ 'list'>
        <cfset criteria = {userId = session.userId}>
        <cfset savedAddresses = entityLoad("savedAddress", criteria)>
    
        <cfloop array="#savedAddresses#" index="address">
            <cfset image = address.getImage()>
            <cfset row = "#address.getTitle()#, #address.getFname()#, #address.getLname()#, #address.getGender()#, #address.getStreet()#,#address.getAddress()#, #address.getEmail()#,#address.getPhone()#,#address.getPincode()#,#image#">
            <cfset spreadsheetAddRow(excelFile, row)>
        </cfloop>
    </cfif>
    
    <cfset filePath = ExpandPath('../assets/excel/address_list.xlsx')>
    <cfspreadsheet action="write" filename="#filePath#" name="excelFile" overwrite="true">

    <cfheader name="Content-Disposition" value="attachment; filename=address_#url.act#.xlsx">
    <cfcontent file="#filePath#" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    <cfabort>

</cfoutput>

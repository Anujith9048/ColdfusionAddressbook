<cfoutput>
    <cfset excelFile = spreadsheetNew("Address List", true)>
    
    <cfset spreadsheetAddRow(excelFile, "Title, Name, Genter, Address,Street, Email, Phone Number,Pincode,Image,")>

    <cfset criteria = {userId = session.userId}>
    <cfset savedAddresses = entityLoad("savedAddress", criteria)>
    
    <cfloop array="#savedAddresses#" index="address">
        <cfset image = address.getImage()>
        <cfset row = "#address.getTitle()#, #address.getFname()# #address.getLname()#, #address.getGender()#,#address.getAddress()# #address.getStreet()#, #address.getEmail()#,#address.getPhone()#,#address.getPincode()#,#image#">
        <cfset spreadsheetAddRow(excelFile, row)>
    </cfloop>
    
    <cfset filePath = ExpandPath('../assets/excel/address_list.xlsx')>
    <cfspreadsheet action="write" filename="#filePath#" name="excelFile" overwrite="true">

    <cfheader name="Content-Disposition" value="attachment; filename=address_list.xlsx">
    <cfcontent file="#filePath#" type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet">
    <cfabort>

</cfoutput>

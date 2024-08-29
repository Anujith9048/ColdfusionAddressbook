<cfcomponent>
    <!--- Function for SIGNUP --->
    <cffunction name="signupUser" access="remote" returnformat="json">
        <cfargument name="profileImage" type="string">
        <cfargument name="name" type="string">
        <cfargument name="email" type="string">
        <cfargument name="userName" type="string">
        <cfargument name="password" type="string">

        <cfset local.hashedPassword = Hash(arguments.password, 'SHA-512')>
        <cfset local.destinationPath = expandPath('../assets/userDP/')>
    
        <cffile action="upload"
                filefield="profileImage"
                destination="#local.destinationPath#"
                accept="image/*"
                nameconflict="makeUnique">
        <cfset local.uploadedFile =cffile.serverFile>
        
    
        <cfquery name="check" datasource="myDatabase">
            SELECT email FROM addressbookRegister
            WHERE email = <cfqueryparam value="#arguments.email#" cfsqltype="cf_sql_varchar">
        </cfquery>
    
        <cfif check.RecordCount gt 0>
            <cfreturn {"result":false}>
        <cfelse>
            <cfquery name="insertUser" datasource="myDatabase">
                INSERT INTO addressbookRegister (name, email, username, password, profileImage)
                VALUES(
                    <cfqueryparam value="#arguments.name#" cfsqltype="cf_sql_varchar">,
                    <cfqueryparam value="#arguments.email#" cfsqltype="cf_sql_varchar">,
                    <cfqueryparam value="#arguments.userName#" cfsqltype="cf_sql_varchar">,
                    <cfqueryparam value="#local.hashedPassword#" cfsqltype="cf_sql_varchar">,
                    <cfqueryparam value="#local.uploadedFile#" cfsqltype="cf_sql_varchar">
                )
            </cfquery>
            <cfreturn {"result":true}>
        </cfif>
    </cffunction>
    
    


    <!--- Function for LOGIN --->
    <cffunction name="login" access="remote" returnformat="json">
        <cfargument name="email" type="string" >
        <cfargument name="password" type="string" >
        <cfset local.encryptedPass = Hash(#arguments.password#, 'SHA-512')/>
  
        <cfquery name="check" datasource="myDatabase">
          SELECT * FROM addressbookRegister 
          WHERE email = <cfqueryparam value="#arguments.email#"  cfsqltype="cf_sql_varchar">
  
        </cfquery>
        <cfif check.email EQ arguments.email AND check.password EQ local.encryptedPass>
            <cfset session.isLog = true>
            <cfset session.username = check.username>
            <cfset session.userId = check.userId>
            <cfset session.userDP = check.profileImage>
            <cfreturn {"result":true}>

        <cfelseif check.email EQ arguments.email AND check.password NEQ local.encryptedPass>       
            <cfreturn {"result":false}>

        <cfelse>
            <cfreturn {"result":"noAccount"}>

        </cfif>
      </cffunction>

<!--- Function for LOGOUT --->
      <cffunction name="logout" access="remote" returnformat="JSON">
        <cfset session.isLog = false>
        <cfreturn {"result":true}>
      </cffunction>

      <!--- Function for selectedAddress --->
            <cffunction name="selectedAddress" access="remote" returnformat="JSON">
                <cfargument name="id" type="numeric">
                <cfset session.selectId = arguments.id>
            </cffunction>
            <cffunction name="deleteAddress" access="remote" returnformat="JSON">
                <cfquery name="deleteData" datasource="myDatabase">
                DELETE FROM savedAddress 
                WHERE addressId = #session.selectId#
                </cfquery>
                <cfreturn {"result":true}>
            </cffunction>

<!--- Function for ADD ADDRESS --->
<cffunction name="addAddress" access="remote" returnformat="JSON">
    <cfargument name="title" type="string">
    <cfargument name="fname" type="string">
    <cfargument name="lname" type="string">
    <cfargument name="gender" type="string">
    <cfargument name="dob" type="string">
    <cfargument name="image" type="string">
    <cfargument name="address" type="string">
    <cfargument name="street" type="string">
    <cfargument name="phone" type="string">
    <cfargument name="email" type="string">
    <cfargument name="pincode" type="string">
    
    <cfset local.destinationPath = expandPath('../assets/')>
    <cfset local.result.success = false>


    <cfif not directoryExists(local.destinationPath)>
        <cfdirectory action="create" directory="#local.destinationPath#">
    </cfif>

        <cffile action="upload"
                filefield="image"
                destination="#expandPath('../assets/')#"
                accept="image/*"
                nameconflict="makeUnique">
        <cfset local.uploadedFile = cffile.serverFile>
    
    <cfquery name="addDatas" datasource="myDatabase">
    INSERT INTO savedAddress (Title , Fname , Lname , Gender , DateOfBirth , Image ,Address , Street , Phone , Email ,Pincode, userId)
    VALUES(
      <cfqueryparam value="#arguments.title#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.fname#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.lname#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.gender#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.dob#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#uploadedFile#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.address#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.street#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.phone#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.email#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#arguments.pincode#" cfsqltype="cf_sql_varchar">,
      <cfqueryparam value="#session.userId#" cfsqltype="cf_sql_integer">
    )
    </cfquery>
    <cfreturn {"result":true}>
  </cffunction>
  
</cfcomponent>
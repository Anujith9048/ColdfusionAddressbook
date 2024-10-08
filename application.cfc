<cfcomponent>
    <!--- application settings --->
    <cfset this.name = "MyApplication">
    <cfset this.sessionManagement = true>
    <cfset this.setClientCookies = true>
    <cfset this.datasource = "myDatabase">
    <cfset this.ormEnabled = true>
    <cfset this.ormSettings = {
        dbCreate = "update",
        logsql = true,
        cfclocation = ["components"] 
    }>
    
    <!--- Session start event --->
    <cffunction name="onSessionStart" returntype="void">
        <cfset session.isLog = false>
        <cfset session.username ="">
        <cfset session.selectId ="">
        <cfset session.userDP ="">
        <cfset session.userId ="">
    </cffunction>

    <cffunction name="onApplicationStart" returntype="boolean">
        <cfset ormReload()>
        <cfreturn true>
    </cffunction>

</cfcomponent>

<cfcomponent>
    <!--- application settings --->
    <cfset this.name = "MyApplication">
    <cfset this.applicationTimeout = createTimeSpan(0,0,2,0)>
    <cfset this.sessionManagement = true>
    <cfset this.sessionTimeout = createTimeSpan(0,0,20,0)>
    <cfset this.setClientCookies = true>
    <cfset this.datasource = "myDatabase">
    <cfset this.ormEnabled = true>
    <cfset this.ormSettings = {
        dbCreate = "update",
        logsql = true
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
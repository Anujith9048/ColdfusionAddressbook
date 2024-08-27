<cfcomponent>
    <!--- application settings --->
    <cfset this.name = "MyApplication">
    <cfset this.applicationTimeout = createTimeSpan(0,0,2,0)>
    <cfset this.sessionManagement = true>
    <cfset this.sessionTimeout = createTimeSpan(0,0,20,0)>
    <cfset this.setClientCookies = true>

    <!--- Session start event --->
    <cffunction name="onSessionStart" returntype="void">
        <cfset session.isLog = false>
    </cffunction>
</cfcomponent>
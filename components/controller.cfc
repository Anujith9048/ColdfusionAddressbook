<cfcomponent>
    <cffunction name="signupUser" access="remote" returnformat="json">
        <cfargument name="name" type="string" >
        <cfargument name="email" type="string" >
        <cfargument name="userName" type="string" >
        <cfargument name="password" type="string" >
        <cfset local.hashedPassword = Hash(#arguments.password#, 'SHA-512')/>

        <cfquery name="check" datasource="myDatabase">
            SELECT email FROM addressbookRegister
            WHERE email = <cfqueryparam value="#arguments.email#" cfsqltype="cf_sql_varchar">
        </cfquery>

        <cfif check.RecordCount gt 0>
            <cfreturn {"result":false}>
            <cfelse>
                <cfquery name="check" datasource="myDatabase">
                    INSERT INTO addressbookRegister (name , email, username , password)
                    VALUES(
                        <cfqueryparam value="#arguments.name#"  cfsqltype="cf_sql_varchar">,
                        <cfqueryparam value="#arguments.email#"  cfsqltype="cf_sql_varchar">,
                        <cfqueryparam value="#arguments.userName#"  cfsqltype="cf_sql_varchar">,
                        <cfqueryparam value="#local.hashedPassword#"  cfsqltype="cf_sql_varchar">
                    )
                </cfquery>
            <cfreturn {"result":true}>
        </cfif>
    </cffunction>
</cfcomponent>
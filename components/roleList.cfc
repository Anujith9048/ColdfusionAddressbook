<cfscript>
component persistent="true" table="rolesTable" {
    
    property name="roleId" fieldtype="id" generator="identity";
    property name="role";
    property name="addressId"; 

}
</cfscript>
component persistent="true" table="rolesTable" {
    
    property name="roleId" fieldtype="id" generator="identity";
    property name="role";
    
    // Define relationship with savedAddress entity
    property name="savedAddress" fieldtype="many-to-one" cfc="savedAddress" fkcolumn="addressId";
}
